using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ePatientCare.Migrations
{
    public partial class ModifiedFkeys : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Visits_Patients_PatientID",
                table: "Visits");

            migrationBuilder.DropForeignKey(
                name: "FK_Visits_UserDetails_UserDetailsID",
                table: "Visits");

            migrationBuilder.DropIndex(
                name: "IX_Visits_PatientID",
                table: "Visits");

            migrationBuilder.DropIndex(
                name: "IX_Visits_UserDetailsID",
                table: "Visits");

            migrationBuilder.DropColumn(
                name: "UserDetailsID",
                table: "Visits");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "UserDetailsID",
                table: "Visits",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Visits_PatientID",
                table: "Visits",
                column: "PatientID");

            migrationBuilder.CreateIndex(
                name: "IX_Visits_UserDetailsID",
                table: "Visits",
                column: "UserDetailsID");

            migrationBuilder.AddForeignKey(
                name: "FK_Visits_Patients_PatientID",
                table: "Visits",
                column: "PatientID",
                principalTable: "Patients",
                principalColumn: "PatientID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Visits_UserDetails_UserDetailsID",
                table: "Visits",
                column: "UserDetailsID",
                principalTable: "UserDetails",
                principalColumn: "UserDetailsID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
