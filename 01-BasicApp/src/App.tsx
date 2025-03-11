import Alert from "./components/Alert";

const App = () => {
  return <Alert>{<h2>Hello My WOrld COnntent!!!</h2>} </Alert>;
};

export default App;

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
