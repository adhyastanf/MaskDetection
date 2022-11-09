import prisma from "../../libs/db";

export default async function handler(req, res) {
  // req.method = "POST"
  if (req.method === "POST") {
    const user = await prisma.user.findFirst({
      where: {
        Username: req.body.Username,
        Password:req.body.Password
      },
    });
    // console.log(user);
    if(user === null){
      return res.status(403).json({"message":'not registered'});
    }else if (user.Username === req.body.Username && user !== null){
      return res.status(200).json({"message":'registered','data':user});
    }
    
    return res.status(200).json({"message":'Welcome to API'});
    
    // console.log(user);
    // console.log(req.body.Username);
    // console.log(req.body.Password);
  }
  // res.status(200).json(user);
}
