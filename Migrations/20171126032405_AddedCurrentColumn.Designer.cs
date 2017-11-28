using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using ePatientCare.Data;

namespace ePatientCare.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20171126032405_AddedCurrentColumn")]
    partial class AddedCurrentColumn
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ePatientCare.Models.Assessment", b =>
                {
                    b.Property<int>("AssessmentId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Date");

                    b.Property<string>("Notes");

                    b.Property<long>("UserDetailsID");

                    b.Property<long>("VisitId");

                    b.HasKey("AssessmentId");

                    b.ToTable("Assessments");
                });

            modelBuilder.Entity("ePatientCare.Models.Imaging", b =>
                {
                    b.Property<long>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Fulfilled");

                    b.Property<DateTime>("FulfillmentDate");

                    b.Property<long>("OrderId");

                    b.Property<long>("PatientID");

                    b.Property<long>("UserDetailsID");

                    b.Property<string>("XRay");

                    b.HasKey("ID");

                    b.ToTable("Imaging");
                });

            modelBuilder.Entity("ePatientCare.Models.Lab", b =>
                {
                    b.Property<long>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Blood");

                    b.Property<int>("Fulfilled");

                    b.Property<DateTime>("FulfillmentDate");

                    b.Property<long>("OrderId");

                    b.Property<long>("PatientID");

                    b.Property<string>("Stool");

                    b.Property<string>("Urianalysis");

                    b.Property<long>("UserDetailsID");

                    b.HasKey("ID");

                    b.ToTable("LabWorks");
                });

            modelBuilder.Entity("ePatientCare.Models.Order", b =>
                {
                    b.Property<long>("OrderId")
                        .ValueGeneratedOnAdd();

                    b.Property<long>("AssessmentId");

                    b.Property<DateTime>("Date");

                    b.Property<string>("Notes");

                    b.Property<string>("OrderType");

                    b.HasKey("OrderId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("ePatientCare.Models.Patient", b =>
                {
                    b.Property<long>("PatientID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Current");

                    b.Property<DateTime>("DOB");

                    b.Property<string>("Email");

                    b.Property<string>("FirstName");

                    b.Property<string>("Gender");

                    b.Property<string>("IDNumber");

                    b.Property<string>("LastName");

                    b.Property<string>("MiddleName");

                    b.Property<string>("Phone");

                    b.Property<string>("PlaceOfBirth");

                    b.Property<string>("Sublocation");

                    b.HasKey("PatientID");

                    b.ToTable("Patients");
                });

            modelBuilder.Entity("ePatientCare.Models.Pharmacy", b =>
                {
                    b.Property<long>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Comments");

                    b.Property<int>("Fulfilled");

                    b.Property<DateTime>("FulfillmentDate");

                    b.Property<long>("OrderId");

                    b.Property<long>("PatientID");

                    b.Property<long>("UserDetailsID");

                    b.HasKey("ID");

                    b.ToTable("Pharmacy");
                });

            modelBuilder.Entity("ePatientCare.Models.Security.AppUser", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("ePatientCare.Models.UserDetails", b =>
                {
                    b.Property<long>("UserDetailsID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AppUserId");

                    b.Property<string>("Biography");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("Email");

                    b.Property<int>("Enabled");

                    b.Property<string>("FirstName");

                    b.Property<string>("Gender");

                    b.Property<string>("IDNumber");

                    b.Property<string>("ImageUrl");

                    b.Property<int>("IsRequest");

                    b.Property<string>("LastName");

                    b.Property<DateTime>("LastUpdatedDate");

                    b.Property<string>("PhoneNumber");

                    b.Property<string>("Reason");

                    b.Property<string>("Title");

                    b.Property<string>("Username");

                    b.HasKey("UserDetailsID");

                    b.HasIndex("AppUserId");

                    b.ToTable("UserDetails");
                });

            modelBuilder.Entity("ePatientCare.Models.Visit", b =>
                {
                    b.Property<long>("VisitId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Background");

                    b.Property<string>("Complaint");

                    b.Property<int>("Current");

                    b.Property<DateTime>("Date");

                    b.Property<long>("PatientID");

                    b.HasKey("VisitId");

                    b.ToTable("Visits");
                });

            modelBuilder.Entity("ePatientCare.Models.VitalSigns", b =>
                {
                    b.Property<long>("VitalSignsId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("BloodPressure");

                    b.Property<DateTime>("Date");

                    b.Property<string>("OxygenSaturation");

                    b.Property<string>("Pulse");

                    b.Property<string>("Respiration");

                    b.Property<string>("Temperature");

                    b.Property<long>("UserDetailsID");

                    b.Property<long>("VisitId");

                    b.HasKey("VitalSignsId");

                    b.ToTable("VitalSigns");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("RoleId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("ePatientCare.Models.UserDetails", b =>
                {
                    b.HasOne("ePatientCare.Models.Security.AppUser", "AppUser")
                        .WithMany()
                        .HasForeignKey("AppUserId");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRole")
                        .WithMany("Claims")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("ePatientCare.Models.Security.AppUser")
                        .WithMany("Claims")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("ePatientCare.Models.Security.AppUser")
                        .WithMany("Logins")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRole")
                        .WithMany("Users")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ePatientCare.Models.Security.AppUser")
                        .WithMany("Roles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
