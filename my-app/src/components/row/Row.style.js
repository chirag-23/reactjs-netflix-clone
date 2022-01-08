import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #141414;
    padding-left: 30px;

    h2{
        margin-left: 14px;
        font-family: var(--font3);
        letter-spacing: .7px;
        font-weight: bolder;
        font-size: 1.4rem;
        color: whitesmoke;
        padding-top: 25px;
    }
    .box{
        margin:0 144px 0 100px;
        .video{
            padding-bottom: 15px;
        }
    }
    @media screen and (max-width: 700px){
        h2{
            font-size: 1.2rem;
            padding-top: 20px;
            margin-left: 0px;
        }
        .box{
            margin:0 75px 0 50px ;
            .video{
                height: 240px;
                padding-bottom: 10px;
            }
        }
        padding-left: 20px;
    }
    @media screen and (max-width: 360px){
        h2{
            font-size: 1.1rem;
            padding-top: 15px;
            margin-left: 0px;
        }
        .box{
            margin:0 10px 0 0px ;
            .video{
                height: 160px;
                padding-bottom: 6px;
            }
        }
        padding-left: 10px;
    }
`;

export const Content = styled.div`

    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 14px;

    ::-webkit-scrollbar{
        display: none;
    }

    .large{
        max-height: 150px;
        transition: transform 250ms;
        :hover{
            transform: scale(1.08);
        }
    }
    
    img{
        object-fit: contain;
        width:100%;
        max-height: 300px;
        margin-right: 14px;
        border-radius: 3px;
        
        transition: transform 280ms;
        :hover{
            transform: scale(1.09);
        }
    }
    @media screen and (max-width: 700px) {
        img{
            max-height: 200px;
        }
        .large{
            max-height: 100px;
        }
        padding-left: 0;
    }
    @media screen and (max-width: 360px) {
        img{
            max-height: 160px;
        }
        .large{
            max-height: 75px;
        }
        padding-left: 0px;
    }
`;