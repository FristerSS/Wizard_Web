import { styled } from "styled-components"


const ButtonPrimary = styled.button`
    position: relative;
    padding: 10px;
    padding-inline: 20px;
    background: none;
    border-radius: 1rem;
    overflow: hidden;

    border: none;
    color: white;
    
    box-shadow: 0 0 4px 0.1px white;

    transition: .3s;

    &::before
    {
        position: absolute;
        content: '';
        inset: 0;

        background: black;
        opacity: 0.4;
        filter: blur(1px);
        z-index: -1;

        
        transition: .3s;
    }

    &:hover
    {
        scale: 1.1;
    }

    &:hover::before
    {
        opacity: 0.6;
    }

    &:active
    {
        scale: 0.7;
    }

    @media screen and (max-width: 768px)
    {
       padding: 6px;
       padding-inline: 13px;

    }


`

const InputPrimary = styled.input`
    position: relative;
    padding: 5px;

    outline: none;
    border: none;
    background: none;
    color: white;

    box-shadow: 0 0 5px 1px rgb(200, 100, 255);
    z-index: 10;
    letter-spacing: 2px;
    transition: 0.3;
    

    &:focus
    {
        scale: 1.1;
    }

    @media screen and (max-width: 768px)
    {
        width: 150px;
        height: 20px;
        font-size: 1.1rem;

    }

    @media screen and (max-width: 512px)
    {
        width: 100px;
        height: 20px;
        font-size: 0.8rem;
    }

`


export {ButtonPrimary, InputPrimary}