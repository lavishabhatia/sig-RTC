import React from "react";

export const InputField = ({
  title,
  className,
  type,
  register,
  defaultValue,
  error,
  ...props
}) => {
  return (
    <div className={`w-full flex flex-col gap-2 ${className} `}>
      <label className="text-zinc-100 text-sm font-medium leading-normal tracking-wide">
        {title}
      </label>
      <input
        type={type}
        {...(typeof register === "function" && { ...register() })}
        {...props}
        defaultValue={defaultValue}
        className="px-4 py-2 bg-white bg-opacity-10 rounded-md "
      />
      {error && <p className=" text-xs text-red-500">{error}</p>}
    </div>
  );
};
