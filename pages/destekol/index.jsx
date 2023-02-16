/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import FormAction from "@/components/FormAction";
import { Router, useRouter } from "next/router";

function index() {
  const router = useRouter();

  const handleSubmit_evinipaylaş = () => {
    console.log("Giriş Yapıldı yeni kayıt");
    router.push("/destekol/destekol_evinipaylas");
  };

  const handleSubmit_mazleme = () => {
    console.log("Giriş Yapıldı liste");
    router.push("/destekol/destekol_malzemepaylas");
  };

  const handleSubmit_yardımet = () => {
    console.log("Giriş Yapıldı harita");
    router.push("/destekol/destekol_ekibeyardimet");
  };

  const handleSubmit_ekibekatil = () => {
    console.log("Giriş Yapıldı harita");
    router.push("/destekol/destekol_ekibekatil");
  };

  return (
    <div className="relative z-10 overflow-hidden py-20 lg:py-[120px]">
      <div className="flex items-center justify-center mt-48">
        <div className="w-52 grid gap-3 grid-rows-2">
          <div>
            <FormAction
              handleSubmit={handleSubmit_evinipaylaş}
              text="Evini Paylaş"
              action="Button"
            />
          </div>
          <div>
            <FormAction
              handleSubmit={handleSubmit_mazleme}
              text="Malzeme Bağışla"
              action="Button"
            />
          </div>
        </div>
        <div className="w-52 grid gap-3 grid-rows-2 ml-5">
          <div>
            <FormAction
              handleSubmit={handleSubmit_yardımet}
              text="Afet bölgesine gidecek ekibe yardım et"
              action="Button"
            />
          </div>
          <div>
            <FormAction
              handleSubmit={handleSubmit_ekibekatil}
              text="Afet bölgesine gidecek ekibe katıl"
              action="Button"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default index;
