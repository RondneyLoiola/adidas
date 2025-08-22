import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fff;
`

export const Header = styled.div`
    padding: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    
    ul {
        display: flex;
        gap: 35px;
        position: relative;
        top: 1rem;

        li {
            list-style: none;
            font-weight: 300;
        }

         .bold {
            font-weight: 900;
         }

         .bold-red {
            font-weight: 900;
            color: red;
         }
    }

    img {
        width: 90px;
        position: absolute;
        left: 1rem;
    }
`

export const InputHeader = styled.input`
    background-color: #E9ECEF;
    padding: 7px;
    padding-left: 10px;
    border: none;
    font-size: 15px;
    width: 220px;
    position: absolute;
    right: 130px;
    bottom: .8rem;

    &::placeholder {
        color: black;
    }
`
