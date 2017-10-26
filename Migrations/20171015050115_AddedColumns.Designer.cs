using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using ePatientCare.Data;

namespace ePatientCare.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20171015050115_AddedColumns")]
    partial class AddedColumns
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ePatientCare.Models.Patient", b =>
                {
                    b.Property<long>("PatientID")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DOB");

                    b.Property<string>("Email");

                    b.Property<string>("FirstName");

                    b.Property<int>("Gender");

                    b.Property<string>("IDNumber");

                    b.Property<string>("LastName");

                    b.Property<string>("MiddleName");

                    b.Property<string>("Phone");

                    b.Property<string>("PlaceOfBirth");

                    b.Property<string>("Sublocation");

                    b.HasKey("PatientID");

                    b.ToTable("Patients");
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

                    b.Property<string>("FirstName")
                        .IsRequired();

                    b.Property<int>("Gender");

                    b.Property<string>("IDNumber")
                        .IsRequired();

                    b.Property<string>("ImageUrl");

                    b.Property<string>("LastName")
                        .IsRequired();

                    b.Property<string>("Title");

                    b.Property<string>("Username")
                        .IsRequired();

                    b.HasKey("UserDetailsID");

                    b.HasIndex("AppUserId");

                    b.ToTable("UserDetails");
                });

            modelBuilder.Entity("ePatientCare.Models.Visit", b =>
                {
                    b.Property<long>("VisitId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Complain");

                    b.Property<DateTime>("Date");

                    b.Property<string>("Diagnosis");

                    b.Property<string>("Medications");

                    b.Property<long?>("PatientID");

                    b.Property<long?>("UserDetailsID");

                    b.HasKey("VisitId");

                    b.HasIndex("PatientID");

                    b.HasIndex("UserDetailsID");

                    b.ToTable("Visits");
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

            modelBuilder.Entity("ePatientCare.Models.Visit", b =>
                {
                    b.HasOne("ePatientCare.Models.Patient", "Patient")
                        .WithMany("Visits")
                        .HasForeignKey("PatientID");

                    b.HasOne("ePatientCare.Models.UserDetails", "UserDetails")
                        .WithMany("Visits")
                        .HasForeignKey("UserDetailsID");
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
