import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './Country';
import Pagination from './Pagination';

function App() {
  const[countrys,setCountrys]=useState([])
  const [loading,setLoading]=useState(false) 
  const [currentPage,setCurrentpage]=useState(1)
  const[limit,setLimit]=useState(10)
  useEffect(()=>{
    setLoading(true)
    fetch('https://countriesnow.space/api/v0.1/countries/capital')
      .then(response => response.json())
      .then(json => {
        console.log(json.data)
       setCountrys(json.data)
        setLoading(false)
        
      })


  },[])

  
      const indexOfLastCountry = currentPage * limit;
      const indexOfFirstCountry = indexOfLastCountry-limit;
      const currentCountry =countrys.slice(indexOfFirstCountry, indexOfLastCountry);

      const paginate = pageNumber => setCurrentpage(pageNumber);
      const nextPage=()=>setCurrentpage(prev=>prev+1)
      const prevPage=()=>setCurrentpage(next=>next-1)
         
        return(<>
        <div className='container mt-3'>
      
        <Country countrys={currentCountry} loading={loading}/>
        <Pagination   limit={limit}
        totalCountrys={countrys.length}
        paginate={paginate}/> 
        <button className="btn btn-primary" onClick={prevPage}>Prev Page</button>
        <button className="btn btn-primary ms-2" onClick={nextPage}>Next Page</button>
        </div>
        </>)
   
  
}

export default App;
