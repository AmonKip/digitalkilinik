using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ePatientCare.Migrations
{
    public partial class createLogLeveltbl_updated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LogEntry_LogLevel_LevelID",
                table: "LogEntry");

            migrationBuilder.DropIndex(
                name: "IX_LogEntry_LevelID",
                table: "LogEntry");

            migrationBuilder.DropColumn(
                name: "LevelID",
                table: "LogEntry");

            migrationBuilder.AddColumn<int>(
                name: "Level",
                table: "LogEntry",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Level",
                table: "LogEntry");

            migrationBuilder.AddColumn<int>(
                name: "LevelID",
                table: "LogEntry",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_LogEntry_LevelID",
                table: "LogEntry",
                column: "LevelID");

            migrationBuilder.AddForeignKey(
                name: "FK_LogEntry_LogLevel_LevelID",
                table: "LogEntry",
                column: "LevelID",
                principalTable: "LogLevel",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
