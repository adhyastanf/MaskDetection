const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.create({
    data: {
      Nama_Depan: "adi",
      Nama_Belakang: "opal",
      birthdate: new Date("2022-08-04T08:16:32.716904"),
      gender: true,
      Foto: "muka.png",
      Nomor_Telepon: "09129290",
      Email: "adasfs",
      Password: "asdada",
      Username: "sdad",
      Verifikasi_Masker: {
        create: {
          Data_Harian: {
            create: {
              Jumlah: 1,
            },
          },
        },
      },
    },
  });

  console.log(alice);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
