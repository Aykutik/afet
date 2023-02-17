/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function index() {
  const [talepler, setTalepler] = useState([]);

  const liste = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/ekip/destekol?getir=genel`
      );
      setTalepler(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    liste();
  }, []);

  return (
    <div>
      <div className="relative z-10 overflow-hidden lg:py-[120px]">
        <div className="flex items-center justify-center">
          <div className="mx-auto flex flex-col lg:flex-row w-full">
            <div className="p-1.5 w-full lg:w-1/2 inline-block">
              <div className="bg-white border rounded-md px-2 py-2 mb-2 font-bold">
                <h1>Destek Talepleri</h1>
              </div>
              <div className="overflow-hidden border rounded-lg bg-arkaplan">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 h-8 text-[9pt] text-left tel:text-[9pt]">
                    <tr className="px-2">
                      <th className="px-2">Adsoyad</th>
                      <th>Talep</th>
                      <th>Durum</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white text-[6pt]">
                    {talepler.map((talep) => (
                      <tr key={talep.id}>
                        <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap">
                          {talep.adsoyad}
                        </td>
                        <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap">
                          {talep.konu}
                        </td>
                        <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap">
                          {talep.durum}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
