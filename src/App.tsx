import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn, SuperBtn} from './components/Button.styled';
import {Link} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";
import {myTheme} from "./styles/Theme.styled";

function App() {
    return (
        <div className="App">
            <Menu>
                <ul>
                    <li><a href="">menu item 1</a></li>
                    <li><a href="">menu item 2</a></li>
                    <li><a href="">menu item 3</a></li>
                </ul>
            </Menu>
            <Box>
                <StyledBtn as='a' href={'#'}>Link</StyledBtn>
                <StyledBtn as={Link} href={'#'}>LinkComponent</StyledBtn>
                <StyledBtn color={"red"} fontSize={"30px"}>Hello</StyledBtn>
                <StyledBtn color={"green"} fontSize={"20px"}>Hello</StyledBtn>
                <StyledBtn  color={myTheme.colors.primary} primary>Hello</StyledBtn>
                <StyledBtn color={myTheme.colors.secondary} outlined>Hello</StyledBtn>
                <SuperBtn>Super Button</SuperBtn>
            </Box>
        </div>
    );
}

export default App;


const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
    button {
        cursor: pointer;
    }
    
    ${Link} {
        cursor: zoom-in;
    }
    
    @media ${myTheme.media.tablet} {
        flex-direction: column;
    }
`

