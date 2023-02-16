/* eslint-disable react-hooks/rules-of-hooks */
//client side
'use client';
import React from "react";
// useeffect hook ekleyeceğim
import { useState } from "react";
import { getSession, signIn, useSession } from "next-auth/react";

export default function login() {
  const { data: session } = useSession();
  console.log(session);

  const [pertcno, setPertcno] = useState("");
  
  const onSubmit = async () => {
    console.log("onsubmit'e geldi");
    const pertcno = 36130164992;
    let options = { redirect: true, pertcno };
    try {
      const res = await signIn("credentials", options);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="relative top-[150px] left-56 text-white h-full py-20">
          <span className="left-10 text-3xl font-bold">Personel Girişi</span>
          <form className="flex flex-col space-y-4" onSubmit={onSubmit}>
            <div className="py-10">
              <div className="relative content-start pr-4 py-2 text-xxl font-bold">
                TC Kimlik No:
              </div>
              <div>
                <input
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  type="text"
                  placeholder="TC Kimlik No yazınız..."
                  name="pertcno"
                  onChange={(e) => setPertcno(e.target.value)}
                ></input>
              </div>
              <div className="py-4">
                <input
                  type="button"
                  value="Giriş"
                  onClick={() => onSubmit()}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded"
                ></input>
              </div>
            </div>
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
        destination: "/",
        permanent: false,
        
      },
    };
  }

  return {
    props: {},
  };
}