import React, { useEffect, useRef } from "react";

type props = React.InputHTMLAttributes<HTMLInputElement> &
  React.InputHTMLAttributes<HTMLTextAreaElement> & {
    value?: string;
    textArea?: boolean;
    row?: number;
  };

const Input = ({ value, textArea, row = 1, ...rest }: props) => {
  const base = "input";
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (textArea && textAreaRef.current) {
      const textarea = textAreaRef.current;

      const updateHeight = () => {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      };

      updateHeight();

      textarea.addEventListener("input", updateHeight);

      return () => {
        textarea.removeEventListener("input", updateHeight);
      };
    }
  }, [textArea, value]);

  return (
    <div className={base}>
      <div className={`${base}__container`}>
        {textArea ? (
          <textarea
            {...rest}
            ref={textAreaRef}
            rows={row}
            placeholder={rest.placeholder || "Введите текст"}
            value={value ?? ""}
            onChange={(e) => {
              rest.onChange && rest.onChange(e);
            }}
            className={`${base}__input`}
          />
        ) : (
          <input
            {...rest}
            placeholder={rest.placeholder || "Введите текст"}
            value={value ?? ""}
            onChange={(e) => {
              rest.onChange && rest.onChange(e);
            }}
            className={`${base}__input`}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
