import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { Wrapper,Content } from "./navbar.style";


const Navbar = () =>{

    const [show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 50){
                handleShow(true);
            }else{
                handleShow(false);
            }

            return() =>{
                window.removeEventListener('scroll');
            }
        })
    }, []);

    return(
        <Wrapper>
            <Content id={`${show && 'nav_black'}`}>
                <nav id="navbar">
                    <div id="logo">
                        <NavLink to={"/"}><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo"/></NavLink>
                    </div>
                    <div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/TVshow">TV Shows</NavLink>
                    <NavLink to="/movies">Movies</NavLink>
                    </div>
                    <div className="pro">
                        <NavLink to={'/profile'}> <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="logopro"/></NavLink>
                    </div>
                </nav>
            </Content>
        </Wrapper>
    )
}

export default Navbar;