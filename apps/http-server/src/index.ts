import express from "express";
import cors from "cors";
import prisma from '@repo/db/client';

const app = express();
app.use(cors());


app.get("/", async (req, res) => {
   return res.status(200).json({ message: "Yess htttp server working fine" });
});


app.listen(8000, () => {
   console.log("Server is running on http://localhost:8000");
});