/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import FormAction from "@/components/FormAction";
import { Router, useRouter } from "next/router";
import Harita from "@/components/Harita";

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
    <div className="relative z-10 overflow-hidden py-5 lg:py-[60px]">
      <div className="flex items-center justify-center mt-0">
        <div className="flex">
          <div className="mr-5">
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
        
      </div>
      <div className="relative mt-16 w-full h-full">
      <Harita />
      </div>
    </div>
  );
}