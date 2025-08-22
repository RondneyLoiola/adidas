import styled from "styled-components";

export const Container = styled.section`
    width: 100%;  
    display: flex;
    flex-direction: column;
    padding-left: 16rem;
    padding-bottom: 5rem;
`

export const Box = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 450px);
    gap: 50px;
    margin: 0px 0px 18px;
`

export const Content = styled.div`
    font-size: 38px;
    border-bottom: 1px solid black;
    font-weight: 900;
    margin: 0px 48px -1px 0px;
    cursor: pointer;
`

export const Title = styled.h3`
    font-size: 32px;
    padding-bottom: 4rem;
    display: flex;
`
