import React from "react";

function index() {
  return (
    <div>
      <div className="relative z-10 overflow-hidden lg:py-[120px]">
        <div className="flex items-center justify-center">
          <div className="mx-auto flex flex-col lg:flex-row w-full">
            <div className="p-1.5 w-full lg:w-1/2 inline-block">
              <div className="bg-white border rounded-md px-2 py-2 mb-2 font-bold">
                <h1>Telefon Numaraları</h1>
              </div>
              <div className="overflow-hidden border rounded-lg bg-arkaplan">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 h-8 text-[11pt] text-left tel:text-[9pt]">
                    <tr className="px-2">
                      <th className="px-2">Birim</th>
                      <th>Telefon</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="text-[10pt] tel:text-[8pt]">
                      <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap">
                        ACİL DURUM
                      </td>
                      <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap">
                        112
                      </td>
                    </tr>
                    <tr className="text-[10pt] tel:text-[8pt]">
                      <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap">
                        ÇANKIRI BELEDİYESİ
                      </td>
                      <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap">
                        0 (376) 212 14 00
                      </td>
                    </tr>
                    <tr className="text-[10pt] tel:text-[8pt]">
                      <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap">
                        ÇANKIRI BELEDİYESİ HİLAL MASA
                      </td>
                      <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap">
                        153
                      </td>
                    </tr>
                    <tr className="text-[10pt] tel:text-[8pt]">
                      <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap">
                        ÇANKIRI AFAD
                      </td>
                      <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap">
                        0 (376) 213 11 90
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="p-1.5 w-full inline-block">
              <div className="bg-white border rounded-md px-2 py-2 mb-2 font-bold">
                <h1>İnternet Siteleri</h1>
              </div>
              <div className="overflow-hidden border rounded-lg bg-arkaplan">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 h-8 text-[11pt] text-left tel:text-[9pt]">
                    <tr className="px-2">
                      <th className="px-2">Birim</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="text-[10pt] tel:text-[8pt]">
                      <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap">
                        <a
                          href="https://cankiri.afad.gov.tr/"
                          rel="noopener noreferrer"
                          target={"_blank"}
                        >
                          ÇANKIRI AFAD
                        </a>
                      </td>
                    </tr>
                    <tr className="text-[10pt] tel:text-[8pt]">
                      <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap">
                        <a
                          href="https://cankiri.bel.tr/"
                          rel="noopener noreferrer"
                          target={"_blank"}
                        >
                          ÇANKIRI BELEDİYESİ
                        </a>
                      </td>
                    </tr>
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
