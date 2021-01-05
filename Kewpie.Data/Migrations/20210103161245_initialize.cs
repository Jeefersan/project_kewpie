using Microsoft.EntityFrameworkCore.Migrations;

namespace Kewpie.Data.Migrations
{
    public partial class initialize : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "dd06131a-1bee-4656-a96b-cd05ed513456");

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "AddressId", "ConcurrencyStamp", "Email", "EmailConfirmed", "FirstName", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "RefreshToken", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "7c76c9d2-bc78-412c-b0cf-d01b5330d312", 0, null, "e66abe06-5299-45d4-a59f-b3d4f2b61053", "test@gmail.com", false, null, null, false, null, null, null, "AQAAAAEAACcQAAAAELXnmj+zvEQwVrgo+0/1+q0sB2o0GXvnwAnM+NgLth7ljGRA0vfEl1l/Rn1wG1uVYA==", null, false, null, "", false, "test@gmail.com" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "7c76c9d2-bc78-412c-b0cf-d01b5330d312");

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "AddressId", "ConcurrencyStamp", "Email", "EmailConfirmed", "FirstName", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "RefreshToken", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "dd06131a-1bee-4656-a96b-cd05ed513456", 0, null, "710e3e69-68f0-4363-8365-b9053c6d8b8d", "test@gmail.com", false, null, null, false, null, null, null, "AQAAAAEAACcQAAAAEKlTSCvJUrW4a3sj3iiJxO9RLN1gZrQHi2DI78Bt87d4+bdMPmrrlNRCPwfNFpa/KQ==", null, false, null, "", false, "test@gmail.com" });
        }
    }
}
