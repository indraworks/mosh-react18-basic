import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  prpOnClose: () => void;
}

const Alert = ({ children, prpOnClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible ">
      {children}
      {/* tambahkan button agar bisa di click */}
      <button
        onClick={prpOnClose}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;

/*
Tentang ReactNode 
kita masukin props berupa nah ini adalah variable ,nah jika g kita pasing adalah content maka 
INI TAK BISA MAKA TYPE DATA HARUS ReactNode 
contoh diatas kita passing misalkan content : <h1> Hello WOrld !!</h1>




*/
