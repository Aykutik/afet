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
    const { durum } = req.query;

    console.log(adsoyad);
    console.log(telefon);
    console.log(adres);
    console.log(konu);
    console.log(tarih);
    console.log(aciklama);

    if (durum === "tamamla") {
      const { getir } = req.query;
      const { kapatan } = req.query;
      const { kapatmatarihi } = req.query;
      const { kapatanaciklama } = req.query;

      const result =
        await prisma.$queryRaw`UPDATE destekol set durum="tamamlandı",kapatan=${kapatan},kapandı=1,kapatmatarihi=${kapatmatarihi},kapatanaciklama=${kapatanaciklama} where id=${getir}`;
      res.status(200).json(result);

    } else {

      try {
        const result =
          await prisma.$queryRaw`INSERT INTO destekol (adsoyad,telefon,adres,konu,tarih,aciklama,meslek,isyeri) VALUES (${adsoyad},${telefon},${adres},${konu},${tarih},${aciklama},${meslek},${isyeri})`;

        console.log("yeni destek al talebi eklendi");
        res.status(200).json(result);
      } catch (err) {
        console.log(err);
        res.status(403).json({ err: "Error occured." });
      }

    }
  } else if (req.method === "GET") {
    const { getir } = req.query;
    const { durum } = req.query;

    if (durum === "sil") {
      const result =
        await prisma.$queryRaw`SELECT * FROM destekol where id=${getir}`;
      res.status(200).json(result);
      console.log(result);
    } else {
      const result = await prisma.$queryRaw`SELECT * FROM destekol=${getir}`;
      res.status(200).json(result);
    }
  }
};
