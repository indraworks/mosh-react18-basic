import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
const tulisan: string = "Submit";
const App = () => {
  const [makeVisible, setMakeVisible] = useState(false);
  function handleClick() {
    setMakeVisible(true);
  }
  function onClose() {
    setMakeVisible(false);
    //atau bisa langsung dibawah functon nya Alert  onClick={()=>setMakeVisible(false)}
  }

  return (
    <div className="p-5 ">
      {makeVisible && (
        <Alert prpOnClose={onClose}>
          <h3>Hello Iam Alert!</h3>
        </Alert>
      )}

      <Button prOnClick={handleClick} color="danger">
        {tulisan}
      </Button>
    </div>
  );
};

export default App;

/*
mengenai functuon hide dan show maka harus gunakan state !  leat && component Anak!
nah hide dan show dari component anak dipicu dari tombol button maka nnti kita buat oncCLick 
supaya pasing ke interface ./anak button param function tsb !


*/

/*
menfenai Button




*/

/*
Kalau pasing RFeactNode type gak bisa kayak gini!!
 <Alert
     
      propChild={<h1>Hello My WOrld COnntent!!!</h1>}
    />
DIA SI VARIABLE PARAM HARUS DIAPIT TAG RE-USE COMPONENT SEPERTI INI :
dan langsung tulis TANPA HARUS PAKAI prop = {variabeReactNode } 
nah VARIABLENODENYA DALAM INTERFACE WAJIB BERNAMA children! 

TAPI SEPERTI INI ! :
 <Alert>
  <h1>Hello ini React Node Contoh Ya!!??</h1>
 </Alert>

 nah pada Alert.tsx 
 maka wajib dia bernama children:ReactNode 

 sehingga lansung saja <div>{children}</div>
*/
