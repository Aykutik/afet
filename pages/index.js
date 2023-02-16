/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import FormAction from "@/components/FormAction";
import { Router, useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleSubmit_destekal = () => {
    console.log("Giriş Yapıldı yeni kayıt");
    router.push("/destekal");
  };

  const handleSubmit_destekol = () => {
    console.log("Giriş Yapıldı liste");
    router.push("/destekol");
  };

  const handleSubmit_harita = () => {
    console.log("Giriş Yapıldı harita");
    router.push("/harita");
  };

  const handleSubmit_bilgiler = () => {
    console.log("Giriş Yapıldı harita");
    router.push("/onemlibilgiler");
  };

  return (
    <div className="relative z-10 overflow-hidden py-20 lg:py-[120px]">
      <div className="flex items-center justify-center mt-48">
        <div className="w-44 grid gap-3 grid-rows-2">
          <div>
            <FormAction
              handleSubmit={handleSubmit_destekal}
              text="Destek Al"
              action="Button"
            />
          </div>
          <div>
            <FormAction
              handleSubmit={handleSubmit_destekol}
              text="Destek Ol"
              action="Button"
            />
          </div>
        </div>
        <div className="w-52 grid gap-3 grid-rows-2 ml-5">
          <div>
            <FormAction
              handleSubmit={handleSubmit_harita}
              text="Çankırı Bilgi Haritası"
              action="Button"
            />
          </div>
          <div>
            <FormAction
              handleSubmit={handleSubmit_bilgiler}
              text="Önemli Bilgiler"
              action="Button"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
