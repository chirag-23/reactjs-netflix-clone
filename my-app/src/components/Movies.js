import React from "react";

// Components
import Row from "./row";
import Requests from "../request";
import Banner from "./Banner";
import Navbar from "./Navbar";

const Movies = () =>{
    
    return(
        <>
            <Navbar/>
            <Banner ReqUrl={Requests.fetchTopRated} />
            <Row title={'Top Rated Movies'} fetchUrl={Requests.fetchTopRated} backdrop/>
            <Row title={'Action Movies'} fetchUrl={Requests.fetchActionMovies} backdrop/>
            <Row title={'Romantic Movies'} fetchUrl={Requests.fetchRomanticMovies} backdrop/>
            <Row title={'Comedy Movies'} fetchUrl={Requests.fetchComedyMovies} backdrop/>
            <Row title={'Horror Movies'} fetchUrl={Requests.fetchHorrorMovies} backdrop/>
            <Row title={'Upcoming Movies'} fetchUrl={Requests.fetchUpcomingMovies} backdrop/>
        </>
    )
}

export default Movies;