import { useState } from "react";
import yenikayitFields from "@/constants/yenikayitFields";
import FormAction from "@/components/FormAction";
import Input from "@/components/Input";
import { Router, useRouter } from "next/router";
import Header from "@/components/layout/destekal";

const fields = yenikayitFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
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
            value={loginState[field.id]}
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