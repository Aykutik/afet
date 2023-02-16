import React from "react";
import FormAction from "@/components/FormAction";

function index() {
  const handleSubmit_tamamla = () => {
    console.log("Giriş Yapıldı liste");
    router.push("/ekip/destekol");
  };

  const handleSubmit_sil = () => {
    console.log("Giriş Yapıldı liste");
    router.push("/ekip/destekol");
  };

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
                      <th className="px-2">KİŞİSEL BİLGİLER</th>
                      <th className="px-2"></th>
                      <th className="px-2"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white text-[6pt]">
                    <tr className="">
                      <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap">
                        Ahmet Yılmaz
                      </td>
                      <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap">
                        36130164559
                      </td>
                      <td className="px-2 py-2 tel:px-2 tel:py-1 whitespace-nowrap">
                        05413655656
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <table className="min-w-full divide-y divide-gray-200 mt-5">
                <thead className="bg-gray-50 h-8 text-[9pt] text-left tel:text-[9pt]">
                  <tr className="px-2">
                    <th className="px-2">DESTEK KONUSU</th>
                    <th className="px-2"></th>
                    <th className="px-2"></th>
                  </tr>
                </thead>
                <tbody className="bg-white text-[6pt]">
                  <tr className="">
                    <td
                      colSpan={3}
                      className="px-2 py-2 tel:px-2 tel:py-1 whitespace-pre-line"
                    >
                      Ahmet YılmazSADSADSADSADASDASDASDASDSA
                      DSADASDASDASDASDASDSADSASDSDSDS AD312321321321
                      SDSDSDSDSDSDS DSDSD SDSDSDSS
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-20 p-1">
              <div>
                <FormAction
                  handleSubmit={handleSubmit_tamamla}
                  text="Tamamlandı olarak işaretle"
                  action="Button"
                />
              </div>
              <div className="mt-2">
                <FormAction
                  handleSubmit={handleSubmit_sil}
                  text="Sil"
                  action="Button"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
