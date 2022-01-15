import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    

`;


export const Images = styled.div`
    display: flex;
    position: absolute;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: 100%;

`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    h1 {
        margin-top: 20px;
        letter-spacing: 20px ;
        font-size: 7rem;
    }
    span {
        color: crimson;
    }
    @media screen and (max-width: 768px) {
        h1 {
            font-size: 5rem;
        }
    }

`; 


export const Projects = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-right: 5%;
    padding-left: 5%;
  
    img { 
        width: 60%;
    }

    div {
        width: 40%;
        padding-left: 20px;
        padding-top: 20px;
        text-align: left;
        aling-content: left;
        color: #0000;

        h1{
            font-size: 5rem;
            font-weight: 700;
            margin-bottom: 5px;
        }
        p {
            font-weight: 600;
            font-size: 1.8rem;
        }
       
    }

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        img {
            width: 80%;
        }

        div {
            width: 80%;
        }
    }
    
`;

    
export const LeftArrow = styled.div`
    position: absolute;
    width: 80px;
    height: 80px;
    font-size: 70px;
    color: rgba(0,0,0,0.6);
    padding-top: 5px;
    display: flex;
    justify-content: center;
    z-index: 1;
    left: 20px;
    border-radius: 30px;
    background-color: rgba(211, 211, 211, 0.5); 
    transition: all .3s ease-in-out;
    cursor: pointer;
    user-select: none;

    :hover {
        background-color: rgba(211, 211, 211, .7); 
        color: rgba(0,0,0,0.8);
    }
`;
export const RightArrow = styled.div`
    position: absolute;
    width: 80px;
    height: 80px;
    font-size: 70px;
    color: rgba(0,0,0,0.6);
    padding-top: 5px;
    display: flex;
    justify-content: center;
    right: 20px;
    z-index: 1;
    border-radius: 30px;
    background-color: rgba(211, 211, 211, 0.5);
    transition: all .3s ease-in-out; 
    cursor: pointer;
    user-select: none;

    :hover {
        background-color: rgba(211, 211, 211, .7); 
        color: rgba(0,0,0,0.8);


`;