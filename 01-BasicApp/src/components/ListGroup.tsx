//kita perlu import MouseEvnet utk param event di functon onClcik dan sejenisnya
import { MouseEvent, useState } from "react";

const ListGroup = () => {
  let items = ["New York", "San jose", "Alphine", "TOkyo", "Jakarta"];
  //let selectedIndex = 0; //angka -1 artinya tak dipilih
  //   items = [];
  //ahrus buat state
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(0);
  //const handleClick = (event: MouseEvent) => console.log(event);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <h1>List:</h1>
      <ul className="list-group">
        {/* ingat jika didalam part jsx maka javascript harus 
           smua tulisan harus didahuli dgn {} kurung kurawal!
           jang lupa pada param slain item kita masukan index 
        */}
        {items.length === 0 && <h2>no list Item SHow</h2>}
        {items.map((item, index) => (
          //utk dibagian li kita harus masukan key karena harus ada index
          //atau harus unix utk masing2 item kita bisa masukan key=item  krn gak sama tiap2
          //element item dari array items diatas!
          <li
            // className="list-group-item active"
            //kita buat itenarinya dulu apakah sama dgn index diatas jika sama maka activekan  active property di className tsb!
            //nah dibawah ini gak kerja kita harus guna state karena gak akan update ke UI nya kalau dibawah ini !
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => handleClick(index)}
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
