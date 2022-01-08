import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #141414;
    color: white;
    padding-top: 120px;
    padding-bottom: 50px;
    @media screen and (max-width: 500px){
        padding-top: 80px;
    }
`;

export const Content = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 44px;

    img{
        padding-right: 40px;
    }

    h1{
        font-family: var(--font1);
        letter-spacing: 3px;
        font-size: 3rem;
        padding: 10px;
        word-spacing: 5px;
    }

    p,label,a{
        font-style: var(--font3);
        letter-spacing: 0.4px;
        word-spacing: 2px;
        font-size: 1.4rem;
        padding: 10px;
    }

    .link{
        padding-top: 20px;
    }

    .insta, .insta:hover{
    color: #8a3ab9;
    text-decoration: none;
    padding-left: 5px;
    padding-right: 1px;
    }

    .github, .github:hover{
    color: whitesmoke;
    text-decoration: none;
    padding-left: 5px;
    padding-right: 1px;
    }
    .ln, .ln:hover{
    color: #0077b5;
    text-decoration: none;
    padding-left: 5px;
    }

    @media screen and (max-width: 815px){
        img{
            padding-right: 10px;
            width: 250px;
            height: 250px;
        }
        h1{
            font-size: 2rem;
        }
        p,label,a{
            font-size: 1.2rem;
        }
    }
    @media screen and (max-width: 650px){
        flex-wrap: wrap;
        flex-direction: row;
        padding: 0px 6px;
        img{
            padding-right: 0px;
            width: 180px;
            height: 180px;
            padding-bottom: 20px;
        }
        div{
            text-align: center;
        }
        h1{
            font-size: 1.5rem;
            padding: 5px;
        }
        p,label,a{
            font-size: 1.1rem;
            padding: 3px;
            word-spacing: 1px;
        }
    }
`;