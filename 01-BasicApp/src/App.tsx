import React from "react";
import ListGroup from "./components/ListGroup";

const App = () => {
  let Items = ["New York", "San jose", "Alphine", "TOkyo", "Jakarta"];
  let Title = "Cities";
  return <ListGroup propItems={Items} propTitle={Title} />;
};

export default App;
