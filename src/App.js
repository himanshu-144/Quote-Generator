
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[quote, setQuote]  = useState([]);
   
  const handleClick=()=>{
  setQuote([...quote])

  }
   const fetchAdice=()=>{
       axios.get('https://api.adviceslip.com/advice')
       .then((response)=>{
             const {advice} = response.data.slip;
             setQuote(advice)
             console.log(advice);
       })
       .catch((error)=>{
            console.log(error);
       })
 

   }
  useEffect(()=>{
    fetchAdice();
  },[quote])
  return (
    <div className="App">
    
          <h1>{quote}</h1>
          <button onClick={()=>handleClick()}>Give Me Advice!</button>
    
       
    </div>
  );
}

export default App;
