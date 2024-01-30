import React from "react";
import { Heading } from "../ui/ui-prop/Heading";
import { InputField } from "../ui/ui-prop/Inputs";
import { InfoLoginButton, PrimaryButton } from "../ui/ui-prop/Buttons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { data } from "autoprefixer";
import { login } from "../../api/repository/Authentication";
import { useNavigate } from "react-router-dom";

const authSchema = yup.object({
  email: yup.string().required("Required"),
  password: yup.string().required("Required"),
});

const Login = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(authSchema),
  });

  const navigate = useNavigate()

  const authLogin = async (data) => {
    const res = await login(data);
    if (res?.success === false) {
      const callBack = falilureCallback[res?.errorType];
      callBack(res?.message?.message);
      return;
    } else {
      localStorage.setItem("token", res?.data?.jwt);
      // SuccessAlert("Welcome");
      navigate("/create");
    }
  };
  
  return (
    <>
      <div className="w-full h-screen lg:max-w-[900px]  mx-auto flex items-center justify-center">
        <div className="flex flex-col  p-6 rounded-md md:w-[600px] bg-secoundary text-white">
          <Heading title={"Log In"} />
          <form
            onSubmit={handleSubmit(authLogin)}
            className="flex flex-col gap-4"
          >
            <div className="w-full flex flex-col mt-4  gap-3">
              <InputField
                title={"Email"}
                type={"email"}
                register={() => {
                  return { ...register("email") };
                }}
                error={errors.email?.message}
              />
              <InputField
                title={"Password"}
                type={"password"}
                register={() => {
                  return { ...register("password") };
                }}
                error={errors.password?.message}
              />
            </div>
            <PrimaryButton title={"Log In"} />
            <InfoLoginButton />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
