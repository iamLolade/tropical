import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from "./components/Header";
import Main from './components/Main';
import Footer from './components/Footer';
import { Data, FetchedData } from "./interfaces/propsInterface";


function App() {
  const [data, setData] = useState<Data>({ fruit: "" });
  const [resolvedData, setResolvedData] = useState<FetchedData>([]);
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const [err, setErr] = useState(false)

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name
    const value = e.currentTarget.value
    const newData = {...data, [name]:value}
    setData(newData)
  }

  const handleSubmit =  async(e: React.FormEvent) => {
      e.preventDefault();
      if(!data.fruit){
        setErr(true)
        setTimeout(()=>setErr(false),5000)
      }
      const response = await fetch("https://ok-starter.herokuapp.com/fruit", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
      })
      setData({fruit:''})
  }

  const handleDelete = async (id:string)=>{
    const response = await fetch(`https://ok-starter.herokuapp.com/${id}/fruit`, {
      method: "DELETE",  
    })
    setIsClicked(!isClicked)
  }

  const handleFetch = async() => {
    const response = await fetch("https://ok-starter.herokuapp.com/fruit");
    const result = await response.json()
    setResolvedData(result.data)
  }
  
  return (
    <>
      <Navbar />
      <div className="App">
        <Header data={data} handleChange={handleChange} handleSubmit={handleSubmit}/>
        {err && <p className="validate">Input cannot be empty</p>}
        <Main resolvedData={resolvedData} handleFetch={handleFetch} data={data} handleDelete={handleDelete} isClicked={isClicked}/>
      </div>
      <Footer />
    </>
  );
}

export default App;
