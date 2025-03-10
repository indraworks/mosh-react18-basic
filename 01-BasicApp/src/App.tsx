import React from "react";
import ListGroup from "./components/ListGroup";

const App = () => {
  let Items = ["New York", "San jose", "Alphine", "TOkyo", "Jakarta"];
  let Title = "Cities";
  const SelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <ListGroup
      propItems={Items}
      propTitle={Title}
      fnSelectedItem={SelectedItem}
    />
  );
};

export default App;
