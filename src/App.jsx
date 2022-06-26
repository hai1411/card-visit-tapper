import React from "react";
import useFetch from "./fetchAPI/useFetch";
import loading from "./components/loading";

function App() {
  const { data, isLoading, error } = useFetch(
    "https://cardvistittapproject-default-rtdb.asia-southeast1.firebasedatabase.app/CardVisitTap/User/2.json"
  );

  if (isLoading) return loading();

  if (error) return (<div><h1>ERROR...</h1></div>);
  
  return (
    <div className="App" id="mainScreen">
       {data.name}
    </div>
  );
}

export default App;
