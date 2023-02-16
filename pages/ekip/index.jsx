/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import FormAction from "@/components/FormAction";
import { Router, useRouter } from "next/router";

export default function admin() {
  const router = useRouter();

  const handleSubmit_destekal = () => {
    console.log("Giriş Yapıldı yeni kayıt");
    router.push("/ekip/destekal");
  };

  const handleSubmit_destekol = () => {
    console.log("Giriş Yapıldı liste");
    router.push("/ekip/destekol");
  };

  return (
    <div className="relative z-10 overflow-hidden py-20 lg:py-[120px]">
      <div className="flex items-center justify-center mt-48">
        <div className="w-44 grid gap-3 grid-rows-2">
          <div>
            <FormAction
              handleSubmit={handleSubmit_destekal}
              text="Destek Talepleri"
              action="Button"
            />
          </div>
          <div>
            <FormAction
              handleSubmit={handleSubmit_destekol}
              text="Destek olanlar"
              action="Button"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
