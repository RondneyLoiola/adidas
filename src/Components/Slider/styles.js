import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 20px;
    //background-color: blue;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    h2 {
        color: #000;
        font-size: 2rem;
        text-transform: uppercase;
        margin-bottom: 5px;
    }
`


export const Img = styled.img`
    width: 344px;
    height: 344px;
    object-fit: cover;
`

export const CategoryWrapper = styled.div`
    margin-bottom: 5rem;
`
