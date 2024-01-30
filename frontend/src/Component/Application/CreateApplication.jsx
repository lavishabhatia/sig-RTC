import React from "react";
import config from "../../config/app.config";
import { Heading } from "../ui/ui-prop/Heading";
import { InputField } from "../ui/ui-prop/Inputs";
import { PrimaryButton } from "../ui/ui-prop/Buttons";

const types = [
  config.appType.auth,
  config.appType.message,
  config.appType.signaling,
];

const CreateApplication = () => {
  return (
    <>
      <div className="w-full h-screen lg:max-w-[900px] mx-auto flex items-center justify-center">
        <div className="flex flex-col p-12 rounded-md md:w-[800px] bg-secoundary text-white">
          <Heading title={"Create your application"} />
          <InputField title={"App Name"} type={"text"} className={"mt-4"} />
          <label className="text-zinc-100 text-sm font-medium leading-normal tracking-wide mt-6">
            App Type
          </label>
          <div className="w-full grid grid-cols-5 gap-3 mt-4">
            {types?.map((data, i) => {
              return (
                <div className="h-10 px-4 py-2 bg-white bg-opacity-10 rounded-md justify-start items-start gap-2 inline-flex">
                  <div className=" grow shrink basis-0 h-6 text-white text-opacity-60 text-base font-normal font-['Inter'] leading-normal tracking-wide">
                    {data}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="lg:w-[400px] mt-8">
            <PrimaryButton title={"Create App"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateApplication;
