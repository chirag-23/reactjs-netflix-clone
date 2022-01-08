import React from "react";

// Components
import Row from "./row";
import Requests from "../request";
import Banner from "./Banner";
import Navbar from "./Navbar";

const Home = () =>{
    
    return(
        <>
            <Navbar/>
            <Banner ReqUrl={Requests.fetchNetflixOriginals} />
            <Row title={'NETFLIX ORIGINALS'} fetchUrl={Requests.fetchNetflixOriginals}/>
            <Row title={'Trending Now'} fetchUrl={Requests.fetchTrendings} backdrop/>
            <Row title={'Top Rated'} fetchUrl={Requests.fetchTopRated} backdrop/>
            <Row title={'Documentaries'} fetchUrl={Requests.fetchDocumentaries} backdrop/>
            <Row title={'Upcoming Movies'} fetchUrl={Requests.fetchUpcomingMovies} backdrop/>
        </>
    )
}

export default Home;