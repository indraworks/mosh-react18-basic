//kita perlu import MouseEvnet utk param event di functon onClcik dan sejenisnya
import { useState } from "react";

interface Props {
  propItems: string[];
  propTitle: string;
  fnSelectedItem: (item: string) => void;
}

const ListGroup: React.FC<Props> = ({
  propItems,
  propTitle,
  fnSelectedItem,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(0);
  //const handleClick = (event: MouseEvent) => console.log(event);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <h1>{propTitle}</h1>
      <ul className="list-group">
        {/* ingat jika didalam part jsx maka javascript harus 
           smua tulisan harus didahuli dgn {} kurung kurawal!
           jang lupa pada param slain item kita masukan index 
        */}
        {propItems.length === 0 && <h2>no list Item SHow</h2>}
        {propItems.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              handleClick(index);
              fnSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;

/*
BEDA PROPS DAN STATE :

jadi beda props dan state 

-props sama spetti variable argument yg lewat function 
-utk props kita berlakukan sbgai imutable ( tidak dapat di change ) 
  
  
 -utk state dia adalah variable local yg ada di component ( re-use component) 
 -jdai bersifat sprti local variable biasa 
 - bersifat mutable/bisa diubah langsung 
 -nah state d declare di local re-use component dgn hoook mis  cons [state,setState] = useState(bla bla  )



*/

/*
 diatas ada 2 functuon 
 1.locak yg handleClick dimana merupakan event ketika saat dicklick dia update index lewat functuon SelectedItem hook
 2.functiuon yg berasal dari App.tsx atau parent jadi ini lwat props  sbgai param jadi mesti didaftarkan 
   dimana yg di daftarkan di interface adlaah "NAMA VARIABEL FUNCTION " DAN TIYPE DARI VARIABLE INI DIMANA 
   VARIABLE INI DALAH  BERTYPE FUNCTION  SBB : ()=>void 
   jadi nama_variabel :type_variable 
   fnSelectedItem:()=> void



*/

/*
kalau mau buat sesuatu atau iternati atau rendering yg dinamy memang dibutuhkan itenary function 
conton :
kita pakai && jika statmemnt true maka akan pasti ditentder contoh 
{items.length == 0 && <h1>No Item found</h1>}
sbab kalau pakai console bisa test 
> true && <h1>show true</h1> maka hasilnya adalah <h1>show true</h1 
 > true && 1 <wnter>  hasil di console  1 
  jika false && 1 hasil false 
  jadi sprti diatas pakai &&  kalau mau kita buat utk itenari function 
  
  Janglupa INDEX nah di param utk map kita beri index utk beritahu idx tiap element 
  yg ada di array tsb 


*/

/*EVENT 
utk stiap function ada paramter yg masuk di function tsb 
nah jika dia adalah sbuah event misalkan onCLicke= {(param)=>bla bla}
nah tipe param ini adalah event biasanya adalah eventdari browserHTML 
(event:React.mouseEven<HTMLElement,MouseEvent)
nah kalau dia dalam tag html gak perlu kita tulis tapi 
jika kita tulis diatas return atau jadi sbuah nama function maka kita perlu 
menulis type dari param tsb sperti diatas ! 



*/
