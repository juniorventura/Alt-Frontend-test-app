import React, { ReactNode } from 'react';

const Button = ({
  children,
  type,
  onClick
}: {
  children: ReactNode | ReactNode[],
  type?: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick} type={type ? type : "button"} className={`rounded-full bg-black text-white py-[10px] px-[15px] hover:bg-slate-400`}>
      {children}
    </button>
  )
};

export default Button;