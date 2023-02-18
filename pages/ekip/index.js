/* eslint-disable react-hooks/rules-of-hooks */
//client side
"use client";
import React from "react";
// useeffect hook ekleyeceğim
import { useState } from "react";
import { getSession, signIn, useSession } from "next-auth/react";
import Header from "@/components/layout/destekal";
import FormAction from "@/components/FormAction";
import Input from "@/components/Input";
import ekipgirisFields from "@/constants/ekipgirisFields";
import { useRouter } from "next/router";

const fields = ekipgirisFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function login() {
  const { data: session } = useSession();
  console.log(session);

  const router = useRouter();

  const [bilgi, setBilgi] = useState(fieldsState);

  const handleChange = (e) => {
    setBilgi({ ...bilgi, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log("onsubmit'e geldi");
    const kullaniciadi = bilgi.kullaniciadi;
    const password = bilgi.parola;
    let options = { redirect: true, kullaniciadi, password };
    try {
      const res = await signIn("credentials", options);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="relative z-10 overflow-hiddenlg:py-[120px]">
      <div className=" flex items-center justify-center">
        <div className="max-w-md w-80 space-y-8">
          <Header heading={"Ekip Girişi"} />
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
              tur="fosrm"
              text="Giriş Yap"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  console.log("session: ", session?.user);

  // const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  // const user = res.data?.find((user) => user.email === session?.user.email);
  if (session) {
    return {
      redirect: {
        destination: "/ekip/admin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
