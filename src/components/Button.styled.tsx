import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    primary?: boolean
    outlined?: boolean
}
export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    //background-color: #e22bdf;
        //background-color: ${props => props.color || "#e22bdf"};
    padding: 10px 20px;
    //color: white;
    //font-size: 2rem;
    font-size: ${props => props.fontSize || "2rem"};
    font-weight: bold;

    &:hover {
        background-color: #6f4ee2;
    }

    &:last-child {
        background-color: #25e27c;
    }

    ${props => props.outlined && css<StyledBtnPropsType>`
        border: 2px solid ${props => props.color || "#e22bdf"};
        color: ${props => props.color || "#e22bdf"};
        background-color: transporent;
        
        &:hover {
            border-color: blue;
        }
    `} 
            
    ${props => props.primary && css<StyledBtnPropsType>`
        background-color: ${props => props.color || "#e22bdf"};
        color: white;
    `}        
    

`

export const SuperBtn = styled(StyledBtn)`
    border-radius: 5px;
    background-color: #e8ef12;
    color: dimgray;

    &:hover {
        animation: ${MyAnimation} 2s ease-in-out infinite;
    }
`