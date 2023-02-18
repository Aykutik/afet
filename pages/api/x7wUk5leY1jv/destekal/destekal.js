/* eslint-disable import/no-anonymous-default-export */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "POST") {
    const { adsoyad } = req.query;
    const { tcno } = req.query;
    const { telefon } = req.query;
    const { adres } = req.query;
    const { konu } = req.query;
    const { tarih } = req.query;

    try {
      const result =
        await prisma.$queryRaw`INSERT INTO destekal (adsoyad,tcno,telefon,adres,konu,tarih) VALUES (${adsoyad},${tcno},${telefon},${adres},${konu},${tarih})`;

      console.log("yeni destek al talebi eklendi");
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(403).json({ err: "Error occured." });
    }
  } else if (req.method === "GET") {
    const { getir } = req.query;
    console.log("getir: " + getir);

    if (getir === "genel") {
      const result = await prisma.$queryRaw`SELECT * FROM destekal`;
      res.status(200).json(result);
    } else {
      const result = await prisma.$queryRaw`SELECT * FROM destekal where id=${getir}`;
      res.status(200).json(result.data);
    }
  }
};
