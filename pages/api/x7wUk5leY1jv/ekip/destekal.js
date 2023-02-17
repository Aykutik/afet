/* eslint-disable import/no-anonymous-default-export */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "POST") {
    const { adsoyad } = req.query;
    const { telefon } = req.query;
    const { adres } = req.query;
    const { konu } = req.query;
    const { tarih } = req.query;
    const { aciklama } = req.query;
    const { meslek } = req.query;
    const { isyeri } = req.query;

    console.log(adsoyad);
    console.log(telefon);
    console.log(adres);
    console.log(konu);
    console.log(tarih);
    console.log(aciklama);

    try {
      const result =
        await prisma.$queryRaw`INSERT INTO destekol (adsoyad,telefon,adres,konu,tarih,aciklama,meslek,isyeri) VALUES (${adsoyad},${telefon},${adres},${konu},${tarih},${aciklama},${meslek},${isyeri})`;

      console.log("yeni destek al talebi eklendi");
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(403).json({ err: "Error occured." });
    }
  } else if (req.method === "GET") {
    const { getir } = req.query;

    if (getir === "genel") {
      const result =
        await prisma.$queryRaw`SELECT * FROM destekal`;
      res.status(200).json(result);
    }
    else{
      const result = await prisma.$queryRaw`SELECT * FROM destekol=${getir}`;
      res.status(200).json(result);
    }
  }
};
