using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.SpaServices.Webpack;
using ePatientCare.Data;
using ePatientCare.Models;
using ePatientCare.Services;
using Newtonsoft.Json;
using ePatientCare.Models.Security;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.Cookies;
using ePatientCare.Configurations;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using ePatientCare.Auth;
using ePatientCare.Helpers;
using Microsoft.AspNetCore.Diagnostics;
using System.Net;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Antiforgery;

namespace ePatientCare
{
    public class Startup
    {

        public Startup(IHostingEnvironment env)
        {
      var builder = new ConfigurationBuilder()
          .SetBasePath(env.ContentRootPath)
          .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsDevelopment())
            {
                // For more details on using the user secret store see https://go.microsoft.com/fwlink/?LinkID=532709
                builder.AddUserSecrets<Startup>();
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

          // This method gets called by the runtime. Use this method to add services to the container.
          public void ConfigureServices(IServiceCollection services)
          {
            // Add framework services.
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("ePatientCareConnection")));

          //services.AddDbContext<ApplicationDbContext>(options =>
          //    options.UseSqlServer(Configuration.GetConnectionString("AppUserIdentity")));
          services.AddIdentity<AppUser, IdentityRole>()
                      .AddEntityFrameworkStores<ApplicationDbContext>()
                      .AddDefaultTokenProviders();

          services.AddMvc().AddJsonOptions(opts => opts.SerializerSettings.ReferenceLoopHandling
                                                = ReferenceLoopHandling.Serialize);
            //services.AddAutoMapper();
            // Add application services.
          services.Configure<EmailConfig>(Configuration.GetSection("Email"));
          services.AddTransient<IEmailSender, EmailSender>();
          services.AddTransient<ISmsSender, AuthMessageSender>();

          services.Configure<IdentityOptions>(config =>
            {
              config.Cookies.ApplicationCookie.Events =
                  new CookieAuthenticationEvents
                  {
                    OnRedirectToLogin = context =>
                    {
                      if (context.Request.Path.StartsWithSegments("/api")
                                      && context.Response.StatusCode == 200)
                      {
                        context.Response.StatusCode = 401;
                      }
                      else
                      {
                        context.Response.Redirect(context.RedirectUri);
                      }
                      return Task.FromResult<object>(null);
                    }
                  };
           });
          services.AddAntiforgery(options =>
          {
            options.HeaderName = "X-XSRF-TOKEN";
          });

          }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory,
                              IAntiforgery antiforgery)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

        //app.UseDeveloperExceptionPage();
        //app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
        //{
        //  HotModuleReplacement = true
        //});
      //if (env.IsDevelopment())
      //{
      //  app.UseDeveloperExceptionPage();
      //  app.UseDatabaseErrorPage();
      //  app.UseBrowserLink();
      //}
      //else
      //{
      //  app.UseExceptionHandler("/Home/Error");
      //}
      app.UseExceptionHandler(
          builder =>
          {
              builder.Run(
              async context =>
              {
                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                context.Response.Headers.Add("Access-Control-Allow-Origin", "*");

                var error = context.Features.Get<IExceptionHandlerFeature>();
                if (error != null)
                {
                  //context.Response.AddApplicationError(error.Error.Message);
                 await context.Response.WriteAsync(error.Error.Message).ConfigureAwait(false);
                }
              });
          });

        app.UseStaticFiles();
        app.UseIdentity();

        // Add external authentication middleware below. To configure them please see https://go.microsoft.com/fwlink/?LinkID=532715

        app.Use(nextDelegate => context =>
        {
          if(context.Request.Path.StartsWithSegments("/api")
               || context.Request.Path.StartsWithSegments("/")){
            context.Response.Cookies.Append("XSRF-TOKEN", antiforgery.GetAndStoreTokens(context).RequestToken);
          }
          return nextDelegate(context);
        });

        app.UseMvc(routes =>
        {
            routes.MapRoute(
                name: "default",
                template: "{controller=Home}/{action=Index}/{id?}");

            routes.MapSpaFallbackRoute("angular-fallback", new { controller = "Home", action = "Index" });
        });
        SeedData.SeedDatabase(app.ApplicationServices.GetRequiredService<ApplicationDbContext>(), 
                              app.ApplicationServices.GetRequiredService<UserManager<AppUser>>(),
                              app.ApplicationServices.GetRequiredService<RoleManager<IdentityRole>>());
     }
    }
}
