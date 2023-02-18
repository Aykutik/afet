/* eslint-disable react-hooks/rules-of-hooks */
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function outh() {
  const { push } = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      signOut();
    } else {
      push("/");
    }
  }, [session]);

  return <div className="text-3xl font-bold underline">ÇIKIŞ YAPILIYOR</div>;
}
