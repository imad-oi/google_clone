import React , { useState , CreateContext , useContext, createContext} from "react";

const ResultContext = CreateContext() ;
const baseUrl = 'https://google-search72.p.rapidapi.com/' ;

export const ContextResultProvider = ({ children}) => {
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
                    'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
                  }
            }) ; 
            const data  = response.json() ; 
            setResults(data) ; 
            setIsLoading(false)   ; 
            // console.log(data) ; 
        }
        
        // console.log(isLoading) ; 
return (
    <ResultContext.Provider value={ { getResults   , searchTerm , setSearchTerm , isLoading , results }}>
        {children}
    </ResultContext.Provider>
        )} ; 



 export const useResultContext = ()=> useContext(ResultContext) ; 