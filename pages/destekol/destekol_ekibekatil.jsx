/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState } from "react";
import FormAction from "@/components/FormAction";
import Input from "@/components/Input";
import { Router, useRouter } from "next/router";
import Header from "@/components/layout/destekal";
import ekibekatilFields from "@/constants/destekol/ekibekatilFields";
import { toast } from "react-toastify";

const fields = ekibekatilFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

function destekol_evinipaylas() {
  const router = useRouter();

  const [bilgi, setBilgi] = useState(fieldsState);

  const handleChange = (e) => {
    setBilgi({ ...bilgi, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPersonel();
  };

  //bugünün tarihini yazdıracağız:
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  const todayDate = yyyy + "-" + mm + "-" + dd;

  const getPersonel = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/destekol/destekol?adsoyad=${bilgi.adsoyad}&telefon=${bilgi.telefon}&yas=${bilgi.yas}&aciklama=${bilgi.aciklama}&tarih=${todayDate}&konu=katil&meslek=${bilgi.meslek}&isyeri=&yas=`
      );
      toast.success(
        "Talebiniz Alındı. En Kısa Sürede İletişime Geçilecektir.",
        { autoClose: 1000 }
      );
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Talebiniz Alınamadı. Lütfen Tekrar Deneyiniz.", {
        autoClose: 1000,
      });
    }
  };

  return (
    <div className="relative z-10 overflow-hiddenlg:py-[120px]">
      <div className="flex items-center justify-center">
        <div className="max-w-md w-80 space-y-8">
          <Header heading={"Ekibe katıl"} />
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              {fields.map((field) => (
                <Input
                  key={field.id}
                  handleChange={handleChange}
                  value={bilgi[field.id]}
                  labelText={field.labelText}
                  labelFor={field.labelFor}
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  isRequired={field.isRequired}
                  placeholder={field.placeholder}
                />
              ))}
            </div>
            <FormAction
              handleSubmit={handleSubmit}
              tur="form"
              text="Kaydet ve ilet"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default destekol_evinipaylas;
