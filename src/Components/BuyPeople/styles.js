import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const Box = styled.div`
    width: 260px;
    height: 270px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: none;
    
    img {
        width: 240px;
        object-fit: cover;
        display: flex;
        justify-content: center;
    }

    h4 {
        position: relative;
        bottom: 40px;
        right: 60px;
        font-size: 14px;
        text-transform: uppercase;
        
        
    }

    &:hover {
        border: 1px solid black;
    }
`

export const BoxContent = styled.div`
    display: flex;
    justify-content: center;
`

export const Title = styled.h2 `
    display: flex;
    justify-content: center;
    margin: 40px 0;
    font-size: 38px;
    text-transform: uppercase;
    
`