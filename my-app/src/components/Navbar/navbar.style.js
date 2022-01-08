import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 5;
    
    #nav_black{
        background-color: #141414;
    }
`;

export const Content = styled.div`

    transition-timing-function: ease-in;
    transition: all 1s;

    #navbar{
        display: flex;
        align-items: center;
        padding: 8px;
        height: 52px;
    }
    #logo img{
        width: 120px;
        padding: 44px;
        margin-top: 5px;
    }
    .pro img{
        width: 45px;
        height: 45px;
        border-radius: 5px;
        position: absolute;
        top: 12px;
        right: 44px;
    }
    a{
        padding-right: 30px;
        color: whitesmoke;
        text-decoration: none;
        font-family: var(--font3);
        letter-spacing: 0.4px;
        text-shadow: white 0.6px 0.1px;
    }

    @media screen and (max-width: 700px){
        #navbar{
            padding: 5px;
        }
        #logo img{
            width: 100px;
            padding-left: 30px;
            padding-right: 20px;
        }
        .pro img{
            width: 40px;
            height: 40px;
            border-radius: 4px;
            position: absolute;
            top: 10px;
            right: 30px;
        }
        a{
            padding-right: 20px;
        }
    }

    @media screen and (max-width: 360px) {
        #navbar{
            padding: 3px 0px;
            height: 32px;
        }
        #logo img{
            width: 60px;
            padding-left: 10px;
            padding-right: 5px;
        }
        .pro img{
            width: 25px;
            height: 25px;
            border-radius: 3px;
            position: absolute;
            top: 8px;
            right: 10px;
        }
        a{
            padding-right: 7px;
            font-size: .7rem;
            text-shadow: white 0.2px 0.05px;
        }
    }
`;