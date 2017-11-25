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
using ePatientCare.Configurations;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Diagnostics;
using System.Net;
using Microsoft.AspNetCore.Http;
using ePatientCare.Middleware.DataModels;


namespace ePatientCare
{
    public class Startup
    {

    private static readonly string secretKey = "mysuperSUPER&verilysecret_secretkey!123";
    private static readonly string issuer = "DigitalKilinikApi";
    private static readonly string audience = "DigitalKilinikApps";
    public Startup(IHostingEnvironment env)
        {
      var builder = new ConfigurationBuilder()
            .SetBasePath(env.ContentRootPath)
            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
            //.AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

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

              //services.Configure<IdentityOptions>(config =>
              //  {
              //    config.Cookies.ApplicationCookie.Events =
              //        new CookieAuthenticationEvents
              //        {
              //          OnRedirectToLogin = context =>
              //          {
              //            if (context.Request.Path.StartsWithSegments("/api")
              //                            && context.Response.StatusCode == 200)
              //            {
              //              context.Response.StatusCode = 401;
              //            }
              //            else
              //            {
              //              context.Response.Redirect(context.RedirectUri);
              //            }
              //            return Task.FromResult<object>(null);
              //          }
              //        };
              //    config.Cookies.ApplicationCookie.AuthenticationScheme = "CookieAuth";
              // });
              //services.AddAntiforgery(options =>
              //{
              //  options.HeaderName = "X-XSRF-TOKEN";
              //});

             var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secretKey));

              services.Configure<TokenProviderOptions>(options =>
               {
                 options.Audience = audience;
                 options.Issuer = issuer;
                 options.SigningCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);
               });

          }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            // start jwt token config
            var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secretKey));

           //generate token

           // app.UseMiddleware<TokenProviderMiddleware>(Options.Create(jwtOptions));

            //validation key


            var tokenValidationParameters = new TokenValidationParameters
            {
              //The signing key must match !
              ValidateIssuerSigningKey = true,
              IssuerSigningKey = signingKey,

              //Validate the JWT Issuer (iss) claim
              ValidateIssuer = true,
              ValidIssuer = issuer,

              //validate the JWT Audience (aud) claim

              ValidateAudience = true,
              ValidAudience = audience,

              //validate the token expiry
              ValidateLifetime = true,

              // If you  want to allow a certain amout of clock drift
              ClockSkew = TimeSpan.Zero
            };


            app.UseJwtBearerAuthentication(new JwtBearerOptions
            {
              AutomaticAuthenticate = false,
              AutomaticChallenge = true,
              TokenValidationParameters = tokenValidationParameters,
              AuthenticationScheme = "Bearer"
            });

          app.UseDeveloperExceptionPage();
          app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
          {
            HotModuleReplacement = true
          });
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
       // app.UseIdentity();

      // Add external authentication middleware below. To configure them please see https://go.microsoft.com/fwlink/?LinkID=532715

        //app.Use(nextDelegate => context =>
        //{
        //  if (context.Request.Path.StartsWithSegments("/api")
        //     || context.Request.Path.StartsWithSegments("/"))
        //{
        //  context.Response.Cookies.Append("XSRF-TOKEN", antiforgery.GetAndStoreTokens(context).RequestToken);
        //}
        //   return nextDelegate(context);
        //});

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
