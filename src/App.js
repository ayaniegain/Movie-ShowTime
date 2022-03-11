import React,{useState,useEffect} from 'react'
import Movie from './components/Movie'

/////////api


const API_KEY=`4929c780ab2517d7f236e250fcffdecd`

const API_LINK= `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`
// console.log(API_LINK);
// const API_IMG=`https://image.tmdb.org/t/p/w1280`

const API_SEARCH=`https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`

//////////api

function App() {
  const [moviedata, setMoviedata] = useState([])
  const [search, setSearch] = useState("")

// console.log(moviedata);
  useEffect(() => {
    const fetchdata=async ()=>{
     let response =await fetch(API_LINK)
     let responseJdata= await(response.json())
     setMoviedata(responseJdata.results)
    }
    fetchdata()
    
   
  }, [])



const handleChange =(e)=>{
  setSearch(e.target.value)
  
}
const handleClick=(e)=>{
e.preventDefault()

if (search) {
  
  
  
  const searchdata=async ()=>{
    let response =await fetch(API_SEARCH+search)
    let responseJdata= await(response.json())
    console.log(responseJdata);
    setMoviedata(responseJdata.results)
  }
  searchdata()
  
  setSearch('')
  
}else{
  alert("Enter some movie Name")
}
 
}










  return (
    <>
    <div className='wholecontainer'>

    <h2 style={{textAlign:"center", marginTop:"20px"}}>THE MOVIE APPLICATION</h2>
    <div className='container'>
            <h4 className='head'>MOVIE NAME</h4>
              
                <form className="d-flex search " onSubmit={handleClick}>
                    <input className="form-control me-3 reds " type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleChange} />
                    <button className="btn btn-dark" type="submit">Search</button>
                </form>
            </div>

      {moviedata.length>0 &&
        moviedata.map((itemval,index)=>{
          return(
    <Movie key={index} {...itemval}/>

          
        )})
     
      }

   
      
        </div>
    </>
  )
}

export default App