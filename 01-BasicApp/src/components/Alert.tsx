import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-danger">{children}</div>;
};

export default Alert;

/*
Tentang ReactNode 
kita masukin props berupa nah ini adalah variable ,nah jika g kita pasing adalah content maka 
INI TAK BISA MAKA TYPE DATA HARUS ReactNode 
contoh diatas kita passing misalkan content : <h1> Hello WOrld !!</h1>




*/
