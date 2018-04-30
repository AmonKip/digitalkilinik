using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ePatientCare.Migrations
{
    public partial class createLogLeveltbl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Level",
                table: "LogEntry");

            migrationBuilder.AddColumn<int>(
                name: "LevelID",
                table: "LogEntry",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "LogLevel",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(nullable: true),
                    Level = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LogLevel", x => x.ID);
                });

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LogEntry_LogLevel_LevelID",
                table: "LogEntry");

            migrationBuilder.DropTable(
                name: "LogLevel");

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
    }
}
