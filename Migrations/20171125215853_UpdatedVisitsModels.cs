using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ePatientCare.Migrations
{
    public partial class UpdatedVisitsModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Visits_Patients_PatientID",
                table: "Visits");

            migrationBuilder.DropColumn(
                name: "Complain",
                table: "Visits");

            migrationBuilder.RenameColumn(
                name: "Medications",
                table: "Visits",
                newName: "Complaint");

            migrationBuilder.RenameColumn(
                name: "Diagnosis",
                table: "Visits",
                newName: "Background");

            migrationBuilder.AlterColumn<long>(
                name: "PatientID",
                table: "Visits",
                nullable: false,
                oldClrType: typeof(long),
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "Assessments",
                columns: table => new
                {
                    AssessmentId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Date = table.Column<DateTime>(nullable: false),
                    Notes = table.Column<long>(nullable: false),
                    UserDetailsID = table.Column<long>(nullable: false),
                    VisitId = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Assessments", x => x.AssessmentId);
                });

            migrationBuilder.CreateTable(
                name: "Imaging",
                columns: table => new
                {
                    ID = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Fulfilled = table.Column<int>(nullable: false),
                    FulfillmentDate = table.Column<DateTime>(nullable: false),
                    OrderId = table.Column<long>(nullable: false),
                    PatientID = table.Column<long>(nullable: false),
                    UserDetailsID = table.Column<long>(nullable: false),
                    XRay = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Imaging", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "LabWorks",
                columns: table => new
                {
                    ID = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Blood = table.Column<string>(nullable: true),
                    Fulfilled = table.Column<int>(nullable: false),
                    FulfillmentDate = table.Column<DateTime>(nullable: false),
                    OrderId = table.Column<long>(nullable: false),
                    PatientID = table.Column<long>(nullable: false),
                    Stool = table.Column<string>(nullable: true),
                    Urianalysis = table.Column<string>(nullable: true),
                    UserDetailsID = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LabWorks", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    OrderId = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AssessmentId = table.Column<long>(nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    Notes = table.Column<string>(nullable: true),
                    OrderType = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.OrderId);
                });

            migrationBuilder.CreateTable(
                name: "Pharmacy",
                columns: table => new
                {
                    ID = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Comments = table.Column<string>(nullable: true),
                    Fulfilled = table.Column<int>(nullable: false),
                    FulfillmentDate = table.Column<DateTime>(nullable: false),
                    OrderId = table.Column<long>(nullable: false),
                    PatientID = table.Column<long>(nullable: false),
                    UserDetailsID = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pharmacy", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "VitalSigns",
                columns: table => new
                {
                    VitalSignsId = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BloodPressure = table.Column<string>(nullable: true),
                    Date = table.Column<DateTime>(nullable: false),
                    OxygenSaturation = table.Column<string>(nullable: true),
                    Pulse = table.Column<string>(nullable: true),
                    Respiration = table.Column<string>(nullable: true),
                    Temperature = table.Column<string>(nullable: true),
                    UserDetailsID = table.Column<long>(nullable: false),
                    VisitId = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VitalSigns", x => x.VitalSignsId);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Visits_Patients_PatientID",
                table: "Visits",
                column: "PatientID",
                principalTable: "Patients",
                principalColumn: "PatientID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Visits_Patients_PatientID",
                table: "Visits");

            migrationBuilder.DropTable(
                name: "Assessments");

            migrationBuilder.DropTable(
                name: "Imaging");

            migrationBuilder.DropTable(
                name: "LabWorks");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "Pharmacy");

            migrationBuilder.DropTable(
                name: "VitalSigns");

            migrationBuilder.RenameColumn(
                name: "Complaint",
                table: "Visits",
                newName: "Medications");

            migrationBuilder.RenameColumn(
                name: "Background",
                table: "Visits",
                newName: "Diagnosis");

            migrationBuilder.AlterColumn<long>(
                name: "PatientID",
                table: "Visits",
                nullable: true,
                oldClrType: typeof(long));

            migrationBuilder.AddColumn<string>(
                name: "Complain",
                table: "Visits",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Visits_Patients_PatientID",
                table: "Visits",
                column: "PatientID",
                principalTable: "Patients",
                principalColumn: "PatientID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
