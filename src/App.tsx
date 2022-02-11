import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from "./components/Header";
import Main from './components/Main';
import Footer from './components/Footer';
import { Data, FetchedData } from "./interfaces/propsInterface";


function App() {
  const [data, setData] = useState<Data>({ fruit: "" });
  const [resolvedData, setResolvedData] = useState<FetchedData>([]);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name
    const value = e.currentTarget.value
    const newData = {...data, [name]:value}
    setData(newData)
  }

  const handleSubmit =  async(e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      const response = await fetch("https://ok-starter.herokuapp.com/fruit", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
      })
      setData({fruit:''})
  }

  const handleFetch = async() => {
    const response = await fetch("https://ok-starter.herokuapp.com/fruit");
    const result = await response.json()
    setResolvedData(result.data)
  }

  console.log(data)
  return (
    <>
      <Navbar />
      <div className="App">
        <Header data={data} handleChange={handleChange} handleSubmit={handleSubmit}/>
        <Main resolvedData={resolvedData} handleFetch={handleFetch} data={data}/>
      </div>
      <Footer />
    </>
  );
}

export default App;
