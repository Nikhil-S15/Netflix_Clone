import React ,{useEffect,useState} from "react";
import "./RowPost.css";
import { imageURL} from '../../constants/constants'
import axios from '../../Axios';


function RowPost(props) {
    const [movie, setMovie] = useState([])
    useEffect(()=>
    {
    axios.get(props.url).then((response)=>
      {
        console.log(response.data.results[0],'++++');
        setMovie(response.data.results)
      })
    },[props.url])
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
            {movie.map((obj)=>(<img className={props.isSmall ? 'smallPoster':'poster' }src={`${imageURL+obj.backdrop_path}`} alt="poster"/>)
    )}
            </div>
        </div>
    )
}

export default RowPost