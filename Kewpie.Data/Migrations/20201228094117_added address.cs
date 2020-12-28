using Microsoft.EntityFrameworkCore.Migrations;

namespace Kewpie.Data.Migrations
{
    public partial class addedaddress : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "52c4e4e3-2df2-4070-84f9-8b943a109990");

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "AddressId", "ConcurrencyStamp", "Email", "EmailConfirmed", "FirstName", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "RefreshToken", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "8e8bebb5-e48d-4b06-abaa-8a008e827de4", 0, null, "9c3b980e-9b27-4dde-82a4-27c576f4d9c6", "test@gmail.com", false, null, null, false, null, null, null, "AQAAAAEAACcQAAAAED7I29Lpy9+uKGVj2culmKbzYWA7JqmXpYbaUOzc/SxsSQfVt51nd36PUnH83PFxqg==", null, false, null, "", false, "test@gmail.com" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8e8bebb5-e48d-4b06-abaa-8a008e827de4");

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "AddressId", "ConcurrencyStamp", "Email", "EmailConfirmed", "FirstName", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "RefreshToken", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "52c4e4e3-2df2-4070-84f9-8b943a109990", 0, null, "8ede8710-5b70-45ee-8b26-2a706c73347b", "test@gmail.com", false, null, null, false, null, null, null, "AQAAAAEAACcQAAAAEOd03gMxY/pTFcGUNE41iIptXZDGCbECK94PO55bBD1N0/LscIkhb8ypgyG2w8lvVA==", null, false, null, "", false, "test@gmail.com" });
        }
    }
}
