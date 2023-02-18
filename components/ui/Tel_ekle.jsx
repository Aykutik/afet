import React from "react";
import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Tamamla = ({ setEkleOn }) => {
  const router = useRouter();
  const { data: session } = useSession();

  const [birim, setBirim] = useState("");
  const [telefon, setTelefon] = useState("");
  const [aciklama, setAciklama] = useState("");

  //bugünün tarihini alıyoruz
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  const tarih = yyyy + "-" + mm + "-" + dd;

  const handleSubmit_tamamla = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/ekip/onemlibilgiler?getir=telefon&birim=${birim}&telefon=${telefon}&aciklama=${aciklama}&ekleyen=${session?.user.name}&eklenmetarihi=${tarih}`
      );

      toast.success("Telefon başarıyla eklendi");
      toast.info("Onaylandıktan sonra listelenecektir", { delay: 730});

      router.push("/onemlibilgiler");
      setEkleOn(false);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen 
    after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-60 grid place-content-center"
    >
      <OutsideClickHandler onOutsideClick={() => setTamamlandı(false)}>
        <div className="w-full h-full grid place-content-center">
          <div className="relative z-50 md:w-[600px] w-[370px] bg-white border-2 p-10 text-center rounded-3xl">
            <h1 className="text-2xl font-bold mb-5">Talebi Tamamla</h1>
            <div>
              
              <input
                onChange={(e) => setBirim(e.target.value)}
                type="text"
                className="w-full border-2 border-gray-300 p-2 rounded-md mb-5"
                placeholder="Birim adı"
              ></input>
               <input
                onChange={(e) => setTelefon(e.target.value)}
                type="text"
                className="w-full border-2 border-gray-300 p-2 rounded-md mb-5"
                placeholder="Telefon"
              ></input>
              <input
                onChange={(e) => setAciklama(e.target.value)}
                type="text"
                className="w-full border-2 border-gray-300 p-2 rounded-md mb-5"
                placeholder="Açıklama"
              ></input>
              <div className="mt-2">
                <button
                  type="button"
                  onClick={handleSubmit_tamamla}
                  className="items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <a href="#">Tamamla</a>
                </button>
              </div>
            </div>
            <button
              className="absolute top-4 right-4"
              onClick={() => setEkleOn(false)}
            >
              <AiFillCloseCircle className="hover:text-primary transation-all"></AiFillCloseCircle>
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Tamamla;
