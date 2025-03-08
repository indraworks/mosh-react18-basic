import React from "react";

const ListGroup = () => {
  let items = ["New York", "San jose", "Alphine", "TOkyo", "Jakarta"];
  items = [];
  return (
    <>
      <h1>List:</h1>
      <ul className="list-group">
        {/* ingat jika didalam part jsx maka javascript harus 
           smua tulisan harus didahuli dgn {} kurung kurawal!
        */}
        {items.length === 0 && <h2>no list Item SHow</h2>}
        {items.map((item) => (
          //utk dibagian li kita harus masukan key karena harus ada index
          //atau harus unix utk masing2 item kita bisa masukan key=item  krn gak sama tiap2
          //element item dari array items diatas!
          <li key={item}>{item}</li>
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
*/
