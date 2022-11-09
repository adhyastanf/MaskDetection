import prisma from "../../../libs/db";

export default async function handler(req, res) {
  const { id } = req.query;
  console.log(id);
  if (req.method === "GET") {
    const findData = await prisma.user.findUnique({
      where: id,
    });
    console.log(findData);
    res.status(200).json(findData);
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    const findData = data.find((data) => data.name === id);
    const findIndex = data.findIndex((data) => data.name === id);
    data.splice(findIndex, 1);
    res.status(200).json(findData);
  } else if (req.method === "POST") {
    const newData = {
      Nama_Depan: req.body.Nama_Depan,
      Nama_Belakang: req.body.Nama_Belakang,
      birthdate: new Date(req.body.birthdate),
      gender: req.body.gender,
      Foto: req.body.Foto,
      Nomor_Telepon: req.body.Nomor_Telepon,
      Email: req.body.Email,
      Password: req.body.Password,
      Username: req.body.Username,
    };
    // data.push(newData);

    const user = await prisma.user.create({
      data: newData,
    });
    res.status(201).json(newData);
  }
}
