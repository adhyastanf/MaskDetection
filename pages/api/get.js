export default function handler(req, res) {
  const requestMethod = req.method;
  // const body = JSON.parse(req.body);
  if (requestMethod !== "POST") {
    return res.status(200).json({ message: "Welcome to API Routes!" });
  }

  res.status(200).json({ message: `You submitted the following data: ` });
  // handle other HTTP methods
}
