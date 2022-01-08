import React from "react";

// Components
import Row from "./row";
import Requests from "../request";
import Banner from "./Banner";
import Navbar from "./Navbar";

const TV = () =>{
    
    return(
        <>
            <Navbar/>
            <Banner ReqUrl={Requests.fetchTopRatedTV} />
            <Row title={'Top Rated TV'} fetchUrl={Requests.fetchTopRatedTV} backdrop/>
            <Row title={'Comedy TV'} fetchUrl={Requests.fetchComedyTV} backdrop/>
            <Row title={'Romantic TV'} fetchUrl={Requests.fetchRomanticTV} backdrop/>
            <Row title={'Popular TV'} fetchUrl={Requests.fetchTVPopular} backdrop/>
        </>
    )
}

export default TV;