import {useEffect, useState} from "react";
import './App.css';
import Actor from "./ResultCard/Actor";
import Show from "./ResultCard/Show";


function App() {
const [type, setType]=useState("");
const [searchString, setSearchString]=useState("");
const [searchResults, setSearchResults]=useState([]);
const [isLoading, setIsLoading]=useState(false);
const notfound='https://png.pngtree.com/png-clipart/20200225/original/pngtree-error-page-not-found-concept-illustration-flat-design-with-people-this-png-image_5276232.jpg';

useEffect(()=>{
  getSearchResults();
}, [type,searchString]);

const getSearchResults=async () =>{
  if (type==="" || searchString===""){
    return;
  }
 


   setIsLoading(true);
  const response =await fetch(
     `https://api.tvmaze.com/search/${type}?q=${searchString}`
  );
  const data = await response.json();
  setIsLoading(false);
  setSearchResults(data);
};

const onActorChange=()=>{
  setType("people");
};
const onShowsChange=()=>{
  setType("shows");
};
const onSearchChange=(event)=>{
  setSearchString(event.target.value);


}






  return (
    <div className="wrapper">
    <div className="grey-container">
      <h1>TVmaze</h1>
      <h2>Search your favourite shows</h2>
      <input type="radio" id="actor" name="type" checked={type==="people"} onChange={onActorChange}/>
      <label htmlFor="actor">Actor</label>
      <input type="radio" id="shows" name="type" checked={type==="shows"} onChange={onShowsChange}/>
      <label htmlFor="shows">Shows</label><br />
      <div className="input-wrapper">
      < input placeholder="eg Friends..." value={searchString} onChange={onSearchChange} />
      </div>
      {isLoading && <div className="Loader">Loading...</div>  }
      {searchResults.length===0 && (<div className="no-results">No results found</div>  )}
      <div className="result-container">
      {searchResults.map((result)=>(
       <Actor
       key={result?.person?.id}
       imageUrl={result?.person?.image?.medium || notfound} 
       name={result?.person?.name}
      // description={result?.actor?.summary}
       //rating={result?.actor?.rating?.average}
       />
       ))}
       {searchResults.map((result)=>(
       <Show
       key={result?.show?.id}
       imageUrl={result?.show?.image?.medium || notfound}
       name={result?.show?.name}
        description={result?.show?.summary}
       rating={result?.show?.rating?.average}
       
       
       />
      ))}
      </div>
      
    </div>
    
    </div>
  );
}

export default App;
