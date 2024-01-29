import React from "react";

export const PrimaryButton = ({ title }) => {
  return (
    <button
      
      className="mt-7 grow shrink basis-0 px-4 py-2 bg-violet-500 rounded-md justify-center items-center gap-2 flex text-zinc-100 text-base font-medium tracking-wide "
    >
      {title}
    </button>
  );
};

export const InfoLoginButton = () => {
  return (
    <div className="text-center py-3 font-['Inter']">
      <span className="text-zinc-100 text-base font-semibold  leading-relaxed tracking-wide">
        Create account or{" "}
      </span>
      <span className="text-zinc-100 text-base font-semibold  underline leading-relaxed tracking-wide">
        Login with Github
      </span>
    </div>
  );
};
