import styled from "styled-components";

export const Wrapper = styled.div`
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    object-fit: contain;
    height: 680px;
    position: relative;
    
    .grad{
        height: 680px;
        background-image: linear-gradient(180deg, transparent, rgba(37,37,37,0.1), #141414);
    }
    @media screen and (max-width:700px){
        height: 400px;
        .grad{
            height: 400px;
        }
    }
    @media screen and (max-width:360px){
        height: 250px;
        .grad{
            height: 250px;
        }
    }
`;

export const Content = styled.div`
    color: white;
    margin-left: 44px;
    max-width: 40%;
    position: absolute;
    bottom: 80px;
    font-family: var(--font3);
    h1{
        font-family: var(--font1);
        letter-spacing: 5px;
        font-size: 3.2rem;
    }
    p{
        font-size: 1.15rem;
        font-family: var(--font3);

    }
    button{
        padding: 8px 25px 8px 17px;
        font-family: var(--font5);
        letter-spacing: 0.7px;
        font-size: 1.45rem;
        font-weight: 500;
        margin-right: 10px;
        outline: none;
        cursor: pointer;
        margin-bottom: 10px;
        margin-top: 30px;
    }
    .play{
        background: white;
        color: black;
        border: none;
        border-radius:5px;

        i{
            font-size: 1.6rem;
        }
        
        :hover{
            background: rgb(212, 212, 212);
        }
    }
    .info{
        background-color: rgba(206, 206, 206, 0.3);
        color: white;
        border: none;
        border-radius: 5px;
        padding: 11px 18px 9px 18px;
        i{
            margin-right: 3px;
        }
        :hover{
            background-color: rgba(206, 206, 206, 0.1);
        }
    }

    @media screen and (max-width:750px){
        margin-left: 20px;
        max-width: 75%;
        bottom: 30px;
        h1{
            font-size: 2.5rem;
        }
        p{
            font-size: 1rem;
        }
        button{
            padding: 5px 12px 5px 8px;
            font-family: sans-serif;
            font-size: 1.2rem;
            margin-right: 10px;
            outline: none;
            cursor: pointer;
            margin-bottom: 0px;
            margin-top: 20px;
        }
        .play i{
            font-size: 1.3rem;
        }
        .info{
            background-color: rgba(206, 206, 206, 0.3);
            color: white;
            border: none;
            border-radius: 5px;
            padding: 6px 10px 6px 10px;
            i{
                font-size: 1rem;
            }
            :hover{
                background-color: rgba(206, 206, 206, 0.1);
            }
        }
    }

    @media screen and (max-width:360px){
        margin-left: 10px;
        bottom: 6px;
        h1{
            font-size: 1.5rem;
        }
        p{
            font-size: 0.6rem;
            display: none;
        }
        button{
            padding: 3px 8px 3px 5px;
            font-family:sans-serif;
            font-size: 1rem;
            margin-right: 10px;
            outline: none;
            cursor: pointer;
            margin-bottom: 0px;
            margin-top: 10px;
        }
        .play{
            border-radius: 3px;
        }
        .play i{
            font-size: 1.15rem;
            padding: 0;
        }
        .info{
            background-color: rgba(206, 206, 206, 0.3);
            color: white;
            border: none;
            border-radius: 3px;
            padding: 5px 8px 5px 8px;
            i{
                font-size: 0.9rem;
            }
            :hover{
                background-color: rgba(206, 206, 206, 0.1);
            }
        }
    }
`;