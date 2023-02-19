/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState } from "react";
import FormAction from "@/components/FormAction";
import Input from "@/components/Input";
import { Router, useRouter } from "next/router";
import Header from "@/components/layout/destekal";
import ekibekatilFields from "@/constants/destekol/ekibekatilFields";

const fields = ekibekatilFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

function destekol_evinipaylas() {
  const router = useRouter();

  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = () => {
    router.push("/anasayfa");
  };

  return (
    <div class="mx-auto mt-10 ml-5">
      <div class="flex flex-wrap lg:justify-between">
        <div class="w-full px-1 lg:w-1/2 xl:w-6/12">
          <div class="mb-12 max-w-[570px] lg:mb-0 text-black">
            <h1 class="text-dark mb-6 text-[25px] font-bold uppercase sm:text-[30px] lg:text-[26px] xl:text-[30px]">
              EKİBİMİZE HANGİ KONULARDA YARDIMCI OLABİLİRSİN?
            </h1>
            <p class="text-body-color mb-9 text-base leading-relaxed">
            Dağıtacakları malzemeleri toplayıp, paketleyip, göndermek için hazır hale getirmesinde yardımcı olabilirsin.              
            </p>
            
            <p class="text-body-color mb-9 text-base leading-relaxed">
            Onlara ekipman ve malzeme ihtiyaçlarını karşılayacak kişileri bulmada yardımcı olabilirsin.
            </p>

            <p class="text-body-color mb-9 text-base leading-relaxed">
            Lütfen bizimle iletişime geçerek, ne tür yardımlar yapabileceğinizi belirtin.
            </p>

            <p class="text-body-color mb-9 text-base leading-relaxed">
            <b>İletişim bilgilerimiz:
            Tel:     (+90)505 700 71 41</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default destekol_evinipaylas;
