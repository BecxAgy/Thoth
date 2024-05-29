import UserAuthForm from "@/components/user_auth_form";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className=" ">
      <div className="mx-auto py-14 flex flex-col justify-center space-y-6 md:w-[500px] w-[340px] p-2">
        <div className="flex flex-col space-y-2 justify-center items-center text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Entre em sua conta
          </h1>
          <p className="text-sm text-muted-foreground">
            Insira seu email e senha. Não tem uma conta?{" "}
            <Link
              href="/auth/signup"
              className="underline underline-offset-4 hover:text-primary"
            >
              Cadastre-se
            </Link>
            .
          </p>
        </div>
        <UserAuthForm />
      </div>
    </div>
  );
};
export default LoginPage;
