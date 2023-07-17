import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieNewReleases.css';

const API_NEWRELEASES = "https://api.themoviedb.org/3/movie/now_playing?api_key=b917a3eef0264a55d4e587b607f7f58b";

const API_POSTER_IMG = "https://image.tmdb.org/t/p/w342/";

const API_BACKDROP_IMG = "https://image.tmdb.org/t/p/w780/";


function MovieNewReleases(){

    const [newMovies, setNewMovies] = useState([]);
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);



    useEffect(() =>{
      fetch(API_NEWRELEASES)
      .then(res =>res.json())
      .then(data =>{
        console.log(data);
        setNewMovies(data.results);
      });
    }, []); 


    const handleMovieNavigation = (index) => {
        setCurrentMovieIndex(index);
      };

    if(newMovies.length === 0){
        return <div>Loading...</div>
    }

    const currentMovie = newMovies[currentMovieIndex];

    return(
        <div>
           <h1 className="new-releases-title">New Releases
           <span role="img" aria-label="Popcorn Emoji">🍿</span></h1>         
           <div className="container">
        <div className="backdrop-container">
          <img src={API_BACKDROP_IMG + currentMovie.backdrop_path} alt={currentMovie.title} />
           <div className="poster-container">
            <img src={API_POSTER_IMG + currentMovie.poster_path} alt={currentMovie.title} />
            <div className="poster-details">
              <h3>{currentMovie.title}</h3>
              <h6>{currentMovie.vote_average}⭐</h6>
              <p>{currentMovie.overview}</p>
              </div>
          </div>
          <hr></hr>
        </div>
      </div>
      <div className="bullet-navigation">
        {newMovies.map((movie, index) => (
          <button
            key={movie.id}
            className={`bullet-button ${index === currentMovieIndex ? 'active' : ''}`}
            onClick={() => handleMovieNavigation(index)}
          ></button>
        ))}
      </div>
      <div className="move-up"></div>
    </div>
  );
}

export default MovieNewReleases;