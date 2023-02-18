/* eslint-disable import/no-anonymous-default-export */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {

  if (req.method === "GET") {
    const { getir } = req.query;

    if (getir === "telefon") {
      const result =
        await prisma.$queryRaw`SELECT * FROM bilgi_telefon where onay=1`;
      res.status(200).json(result);
    } else if (getir === "web") {
      const result =
        await prisma.$queryRaw`SELECT * FROM bilgi_web where onay=1`;
      res.status(200).json(result);
    }

  } else if (req.method === "POST") {
    const { getir } = req.query;

    if (getir === "telefon") {
      const { birim } = req.query;
      const { telefon } = req.query;
      const { aciklama } = req.query;
      const { ekleyen } = req.query;
      const { eklenmetarihi } = req.query;
      try {
        const result =
          await prisma.$queryRaw`INSERT INTO bilgi_telefon (birim,telefon,aciklama,ekleyen,eklenmetarihi) VALUES (${birim},${telefon},${aciklama},${ekleyen},${eklenmetarihi})`;
        res.status(200).json(result);
      } catch (err) {
        console.log(err);
        res.status(403).json({ err: "Error occured." });
      }
    }
    else if (getir === "web") {        
      const { birim } = req.query;
      const { web } = req.query;
      const { aciklama } = req.query;
      const { ekleyen } = req.query;
      const { eklenmetarihi } = req.query;
      try {
        const result =
          await prisma.$queryRaw`INSERT INTO bilgi_web (birim,web,aciklama,ekleyen,eklenmetarihi) VALUES (${birim},${web},${aciklama},${ekleyen},${eklenmetarihi})`;
        res.status(200).json(result);
      } catch (err) {
        console.log(err);
        res.status(403).json({ err: "Error occured." });
      }
    }
  }
};