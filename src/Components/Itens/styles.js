import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding-left: 16rem;
    display: flex;
`

export const Content = styled.div`
    width: 320px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding: 5rem 0;

    h4 {
        font-size: 15px;
        text-transform: uppercase;
        margin-bottom: 10px;
        font-weight: 900;
    }

    ul li{
        list-style: none;
        margin: 25px 0;
    }

    li:hover {
        text-decoration: underline;
    }
`