import prisma from "../../../libs/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const user = await prisma.user.findMany({
      where: {
        Nama_Depan: "Bu",
      },
    });
    console.log(user);
    if (user === null) {
      return res.status(200).json([]);
    }
    res.status(200);
    res.json(user);
  } else if (req.method === "POST") {
    const newData = {
      Nama_Depan: req.body.Nama_Depan,
      Nama_Belakang: req.body.Nama_Belakang,
      birthdate: new Date(req.body.birthdate.slice(0, 10)),
      gender: req.body.gender,
      Nomor_Telepon: req.body.Nomor_Telepon,
      Email: req.body.Email,
      Password: req.body.Password,
      Username: req.body.Username,
    };
    console.log("berhasil");
    await prisma.user.create({
      data: newData,
    });

    res.status(201);
    res.json(newData);
  }
}
