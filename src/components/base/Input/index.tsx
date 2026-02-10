import React from "react";

type props = React.InputHTMLAttributes<HTMLInputElement> & {
  value?: string;
  ref?: React.RefObject<HTMLInputElement>;
};

const Input = ({ value, ...rest }: props) => {
  const base = "input";

  return (
    <div className={base}>
      <div className={`${base}__container`}>
        <input
          {...rest}
          placeholder={rest.placeholder || "Введите текст"}
          value={value ?? ""}
          onChange={(e) => {
            rest.onChange && rest.onChange(e);
          }}
          className={`${base}__input`}
        />
      </div>
    </div>
  );
};

export default Input;
