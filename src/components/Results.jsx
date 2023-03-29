import { Location, useLocation } from "react-router-dom";
import { useState , useEffect } from "react";

const baseUrl = 'https://google-web-search1.p.rapidapi.com/' ;

const Results = () => {

  const [results, setResults] = useState([]) ; 
  const [isLoading, setIsLoading] = useState(false) ;
  const [searchTerm, setSearchTerm] = useState('') ;

  const getResults = async (type)=> {
    setIsLoading(true) ; 
    // type = /search or /imagesearch
    const response = await fetch(`${baseUrl}${type}`,{ 
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '1aabc9467cmshd0be18d587bddcfp130452jsn51b26441d0d2',
          'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com'
        }
    }) ; 
    const data  = await response.json() ; 
    console.log(data) ; 
    // setResults(data) ; 
    setIsLoading(false)   ; 
  }
useEffect(()=>{
  getResults('q=react&limit=10');
},[]); 

  const location = useLocation() ; 
  // console.log(location.pathname) ; 

  if (location.pathname =='/search')
  return(
    <div>
        /search
    </div>
      )
    else return (
      <div>
        /images
      </div>
    )
  

  return (
    <div className='results'>
        Results
    </div>
  )
}

export default Results ; 