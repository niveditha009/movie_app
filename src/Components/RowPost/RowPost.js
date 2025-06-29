import React ,{useState,useEffect} from 'react'
import axios from '../../axios'
import { imageUrl,API_KEY} from "../../constants/constants"
import "./RowPost.css"
import Youtube from "react-youtube"

function RowPost(props) {
  const [movies, setMovies] = useState([]); // State to hold fetched posters
  const [urlId,seturlId]=useState("")
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results); // Save results in state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const opts = {
    height: '390',
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
           console.log(id)
           axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            console.log(response.data)
            if(response.data.results.length!==0){
              seturlId(response.data.results[0])
            }
           })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        
       {movies.map((obj)=>
                <img 
                onClick={() => handleMovie(obj.id)} 
                className={props.isSmall ? "smallPoster" : "poster"} 
                alt="posters" 
                src={`${imageUrl + obj.backdrop_path}`} 
              />
              
       )}
        
      </div>
     {urlId && <Youtube  videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost
