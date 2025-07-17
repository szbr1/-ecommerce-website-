import express from "express";


const app = express();
const PORT = 4999;

app.get("/", (req, res) => {
 
  res.send("<a href='/auth/google' >Hello</a>")
   }   );

app.listen(PORT, () => {
  console.log(`🫡 Server running at http://localhost:${PORT}`);
});
