import React from 'react';
import { useState,useEffect } from 'react';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

import axios from '../../axios';  //I have default import here so i can rename variable

import { Wrapper,Content } from './Row.style';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original/';

function Row({ title,fetchUrl,backdrop }) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(()=>{
        // const fetchMovie = async() =>{ }
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    },[fetchUrl]);

    // Options for trailer
    const opts = {
        height: "420px",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }

    // For Trailer
    const handleClick = (movie) =>{
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.name || movie?.title || '')
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((error) => console.log(error))
        }
        console.log(movie.id)
    };

    return(
        <Wrapper>
            <h2>{title}</h2>

            <Content>
                {movies.map(movie => (
                    <img src={`${IMG_BASE_URL}${backdrop? movie.backdrop_path : movie.poster_path}`} alt={movie.name} key={movie.id} className={`${backdrop && 'large'}`} onClick={()=> handleClick(movie)} style={{cursor:'pointer'}}/>
                ))}
            </Content>
            <div className='box'>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} className='video'/>}
            </div>
        </Wrapper>
    )
}

export default Row;