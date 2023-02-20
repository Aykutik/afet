/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import FormAction from "@/components/FormAction";
import axios from "axios";
import { getSession, useSession } from "next-auth/react";
import Tel_ekle from "@/components/ui/Tel_ekle";
import Web_ekle from "@/components/ui/Web_ekle";

function index() {
  
  const { data: session } = useSession();

  const [ekleOn, setEkleOn] = useState(false);
  const [ekleOn_web, setEkleOn_web] = useState(false);
  const [birimler, setBirimler] = useState([]);
  const [web, setWeb] = useState([]);

  const ekleAc = async () => {
    if (ekleOn == false) {
      setEkleOn(true);
    } else {
      setEkleOn(false);
    }
  };

  const ekleAc_web = async () => {
    if (ekleOn == false) {
      setEkleOn_web(true);
    } else {
      setEkleOn_web(false);
    }
  };

  const liste_telefon = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_VERCEL_URL}/ekip/ekip/onemlibilgiler?getir=telefon`
      );
      setBirimler(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const liste_web = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_VERCEL_URL}/ekip/onemlibilgiler?getir=web`
      );
      setWeb(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    liste_telefon();
    liste_web();
  }, []);

  return (
    <div>
      <div className="relative z-10 overflow-hidden lg:py-[120px]">
        <div className="flex items-center justify-center">
          <div className="mx-auto flex flex-col lg:flex-row w-full">
            <div className="p-1.5 w-full lg:w-1/2 inline-block">
              <div className="bg-white shadow border rounded-md px-2 py-2 mb-2 font-bold">
                <h1>Telefon Numaraları</h1>
              </div>
              <div className="overflow-hidden shadow border rounded-lg bg-arkaplan">
                <table className="min-w-full divide-y border shadow-md divide-gray-200 ">
                  <thead className="bg-white h-8 text-[11pt] text-left tel:text-[9pt]">
                    <tr className="px-2">
                      <th className="px-2">Birim</th>
                      <th>Telefon</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {birimler.map((birim) => (
                      <tr key={birim.id} 
                      className="text-[10pt] tel:text-[8pt]">
                        <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap">
                          {birim.birim}
                        </td>
                        <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap">
                          {birim.telefon}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>                
              </div>
              {session && (
                  <div className="mt-2">
                    <FormAction
                      handleSubmit={ekleAc}
                      text="Ekle"
                      action="Button"
                    />
                  </div>
                )}
            </div>
            <div className="p-1.5 w-full inline-block">
              <div className="bg-white shadow border rounded-md px-2 py-2 mb-2 font-bold">
                <h1>İnternet Siteleri</h1>
              </div>
              <div className="overflow-hidden shadow border rounded-lg bg-arkaplan">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 h-8 text-[11pt] text-left tel:text-[9pt]">
                    <tr className="px-2">
                      <th className="px-2">Birim</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                  {web.map((web) => (
                      <tr key={web.id} 
                      className="text-[10pt] tel:text-[8pt]">
                        <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap">
                          <a href={web.web} target="_blank" rel="noreferrer">
                          {web.birim}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
              </div>
              {session && (
                  <div className="mt-2">
                    <FormAction
                      handleSubmit={ekleAc_web}
                      text="Ekle"
                      action="Button"
                    />
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>

      {ekleOn && <Tel_ekle setEkleOn={setEkleOn}/>}
      {ekleOn_web && <Web_ekle setEkleOn_web={setEkleOn_web}/>}

    </div>
  );
}

export default index;

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  // const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  // const user = res.data?.find((user) => user.email === session?.user.email);

  return {
    props: { session },
  };
};
