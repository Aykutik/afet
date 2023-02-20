/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import FormAction from "@/components/FormAction";
import axios from "axios";
import { useState, useEffect } from "react";
import { getSession, useSession } from "next-auth/react";
import Tamamla from "@/components/ui/Tamamla";

function index({ id }) {
  const [talep, setTalep] = useState([]);
  const [konusu, setKonusu] = useState("");
  const [tamamlandı, setTamamlandı] = useState(false);

  const { data: session } = useSession();

  const liste = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/ekip/destekol?getir=${id}&durum=id`
      );
      setTalep(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }

    if (talep[0]?.konu === "ev") {
      console.log("eve geldi");
      setKonusu("Evini Paylaşmak İstiyor");
    } else if (talep[0]?.konu == "malzeme") {
    } else if (talep.konu == "iş") {
    }
    console.log("talep.konu");
  };

  const handleSubmit_tamamlaAc = async () => {
    if (tamamlandı == false) {
      setTamamlandı(true);
    } else {
      setTamamlandı(false);
    }
  };

  useEffect(() => {
    if (konusu === "") {
      liste();
    }
  }, [konusu]);

  //bugünün tarihini alıyoruz
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  const tarih = yyyy + "-" + mm + "-" + dd;

  const handleSubmit_tamamla = async () => {
    // router.push("/ekip/destekol");
    try {
      const res = await axios.post(
        `https://afet-y19k.vercel.app/api/x7wUk5leY1jv/ekip/destekol_tamamla?getir=${id}&durum=tamamla&kapatan=${session?.user.name}&kapatmatarihi=${tarih}`
      );
      setTalep(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit_sil = () => {
    // router.push("/ekip/destekol");
  };

  console.log(konusu);

  return (
    <div>
      <div className="relative z-10 overflow-hidden lg:py-[120px]">
        <div className="flex items-center justify-center">
          <div className="p-1.5 w-full lg:w-1/2 inline-block">
            <div className="bg-white border rounded-md px-2 py-2 mb-2 font-bold">
              <h1>{konusu}</h1>
            </div>
            <div className="overflow-hidden border rounded-lg bg-arkaplan">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 h-8 text-[10pt] text-left tel:text-[9pt]">
                  <tr className="px-2">
                    <th className="px-2">KİŞİSEL BİLGİLER</th>
                    <th className="px-2"></th>
                    <th className="px-2"></th>
                  </tr>
                </thead>
                <thead className="bg-gray-50 h-8 text-[9pt] text-left tel:text-[9pt]">
                  <tr className="px-2">
                    <th className="px-2">Ad Soyad</th>
                    <th className="px-2">İletişim</th>
                    <th className="px-2">Adres</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-[7pt]">
                  {talep.map((item) => (
                    <tr key={talep.id} className="">
                      <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap">
                        {item.adsoyad}
                      </td>
                      <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap">
                        {item.telefon}
                      </td>
                      <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap">
                        {item.adres}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <table className="min-w-full divide-y divide-gray-200 mt-5">
              <thead className="bg-gray-50 h-8 text-[9pt] text-left tel:text-[9pt]">
                <tr className="px-2">
                  <th className="px-2">AÇIKLAMA</th>
                  <th className="px-2"></th>
                  <th className="px-2"></th>
                </tr>
              </thead>
              <tbody className="bg-white text-[7pt]">
                <tr className="">
                  <td
                    colSpan={3}
                    className="px-2 py-2 tel:px-2 tel:py-1 whitespace-pre-line"
                  >
                    {talep[0]?.aciklama}
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="min-w-full divide-y divide-gray-200 mt-5">
              <thead className="bg-gray-50 h-8 text-[9pt] text-left tel:text-[9pt]">
                <tr className="px-2">
                  <th className="px-2">Durum</th>
                  <th className="px-2">
                    {talep[0]?.durum === "beklemede" ? "" : "Kapatan"}
                  </th>
                  <th className="px-2">
                    {talep[0]?.durum === "beklemede" ? "" : "Kapatma Tarihi"}
                  </th>
                  <th className="px-2">
                    {talep[0]?.durum === "beklemede" ? "" : "Kapatan Açıklama"}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white text-[7pt]">
                <tr className="">
                  <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-pre-line">
                    {talep[0]?.durum}
                  </td>
                  {talep[0]?.durum == "tamamlandı" ? (
                    <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-pre-line">
                      {talep[0]?.kapatan}
                    </td>
                  ) : (
                    <td></td>
                  )}
                  {talep[0]?.durum == "tamamlandı" ? (
                    <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-pre-line">
                      {(talep[0]?.kapatmatarihi).slice(0, 10)}
                    </td>
                  ) : (
                    <td></td>
                  )}
                  {talep[0]?.durum == "tamamlandı" ? (
                    <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-pre-line">
                      {talep[0]?.kapatanaciklama}
                    </td>
                  ) : (
                    <td></td>
                  )}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-20 p-1">
            {talep[0]?.durum === "beklemede" ? (
              <div>
                <FormAction
                  handleSubmit={handleSubmit_tamamlaAc}
                  text="Tamamlandı olarak işaretle"
                  action="Button"
                />
              </div>
            ) : (
              <div>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <a href="#">Tamamlandı</a>
                </button>
              </div>
            )}

            {talep[0]?.silindi == 0 ? (
              <div className="mt-2">
                <FormAction
                  handleSubmit={handleSubmit_sil}
                  text="Sil"
                  action="Button"
                />
              </div>
            ) : (
              <div>
                <div className="mt-2">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    <a href="#">Silindi</a>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {tamamlandı && <Tamamla setTamamlandı={setTamamlandı} talep={talep[0]} kolon={"destekol"}/>}

    </div>
  );
}

export default index;

export const getServerSideProps = async ({ params, req }) => {
  const session = await getSession({ req });

  console.log("session: ", session?.user);

  // const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  // const user = res.data?.find((user) => user.email === session?.user.email);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      // avans: res.data ? res.data : null,
      id: params.id,
    },
  };
};
