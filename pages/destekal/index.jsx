import { useState } from "react";
import yenikayitFields from "@/constants/yenikayitFields";
import FormAction from "@/components/FormAction";
import Input from "@/components/Input";
import { Router, useRouter } from "next/router";
import Header from "@/components/layout/destekal";
import axios from "axios";

const fields = yenikayitFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
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
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/destekal/destekal?adsoyad=${bilgi.adsoyad}&tcno=${bilgi.tcno}&telefon=${bilgi.telefon}&adres=${bilgi.adres}&konu=${bilgi.aciklama}&tarih=${todayDate}`
    );
  };

  return (
    <div className="relative z-10 overflow-hiddenlg:py-[120px]">
      <div className=" flex items-center justify-center">
      <div className="max-w-md w-80 space-y-8">
      <Header heading={"Destek Al"} />
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
      <FormAction handleSubmit={handleSubmit} tur="form" text="Kaydet ve ilet" />
    </form>
      </div>
    </div>
    </div>
  );
}