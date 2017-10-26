using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ePatientCare.Migrations
{
    public partial class UpdatedUserDmodel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "UserDetails",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Enabled",
                table: "UserDetails",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "PhoneNumber",
                table: "UserDetails",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "UserDetails");

            migrationBuilder.DropColumn(
                name: "Enabled",
                table: "UserDetails");

            migrationBuilder.DropColumn(
                name: "PhoneNumber",
                table: "UserDetails");
        }
    }
}
