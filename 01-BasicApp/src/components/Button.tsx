import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  prOnClick: () => void;
  color?: "primary" | "secondary" | "danger" | undefined;
}

const Button = ({ children, prOnClick, color = "danger" }: Props) => {
  //onClick sbelah kiri adalwah bawaan tuap2 component tag utk event
  //yg dalam kurung sblah kanan adalah param dari APp.tsx atau parent !
  return (
    <button onClick={prOnClick} className={"btn btn-" + color}>
      {children}
    </button>
  );
};

export default Button;
