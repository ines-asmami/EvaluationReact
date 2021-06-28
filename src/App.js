import React from "react";
import Recherche from "./components/Recherche";
import shows from './shows.json'



export default function App(props) {
  const { show } = props;
   const tags = show.genres.map(genre => <span key={genre}className="genre">{genre}</span>);
    
    
  return (
    <div className="App">
      <header>
        <h1>Plateforme NETFLI</h1>
      </header>
      <main>
      <Recherche />
      <section className>
         <div className="banniere">
        <img src={show.images.banner} alt="banniere"></img>
        <h1>
          {show.title} ({show.creation})
        </h1>
        </div>
       <div><img src={show.images.poster} alt="poster"></img></div>
       <div><p>{show.description}</p></div>
       <div>
         <div>
           {tags}
           <div>
           </div>
         </div>
       </div>
       </section>

      </main>
    </div>
  );
}