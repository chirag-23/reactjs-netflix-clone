import React,{useState,useEffect} from "react";

import { Wrapper,Content } from "./banner.style";
import axios from "../../axios";
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original/';

const Banner = ({ ReqUrl }) =>{

    const [movie,setMovie] = useState([]);

    useEffect(() =>{
        async function fetchData() {
            const req = await axios.get(ReqUrl);
            const random = (Math.floor(Math.random() * req.data.results.length)- 1);
            setMovie(req.data.results[random]);
            return req;
        }
        fetchData();
    },[ReqUrl]);

    function desc(str, n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }

    return(
        <Wrapper style={{backgroundImage: `url("${IMG_BASE_URL}${movie?.backdrop_path}")`}}>
            <Content>
                <h1>{movie?.title || movie?.name}</h1>
                <p>{desc(`${movie?.overview}`, 240)}</p>
                <div className="btns">
                    <button className="play"><i className="bi bi-play-fill lg"></i>Play</button>
                    <button className="info"><i className="bi bi-info-circle"></i>More Info</button>
                </div>
            </Content>
            <div className="grad"/>
        </Wrapper>
    )
}

export default Banner;