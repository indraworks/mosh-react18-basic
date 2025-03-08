import React from "react";

const ListGroup = () => {
  const items = ["New York", "San jose", "Alphine", "TOkyo", "Jakarta"];
  return (
    <>
      <h1>List:</h1>
      <ul className="list-group">
        {/* ingat jika didalam part jsx maka javascript harus 
           smua tulisan harus didahuli dgn {} kurung kurawal!
        */}
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
