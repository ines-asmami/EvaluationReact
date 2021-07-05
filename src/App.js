import React from "react";
import Recherche from "./Recherche";
import Shows from "./Shows";
import './App.css'
import { useState, useEffect } from "react";



export default function App() {


  const [showsData, setShowsData] = useState([])
    
  useEffect (() => {
  fetch ('http://localhost:4000/rest/shows') 
  .then(response=> response.json())
  .then(show=>setShowsData(show))
  }, [])
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Plateforme NETFLI</h1>
      <Recherche />
      </header>
      <main>
      <section>
      <Shows shows={showsData} />
       </section>
      </main>
      <footer>Evaluation REACT</footer>
    </div>
  );
}