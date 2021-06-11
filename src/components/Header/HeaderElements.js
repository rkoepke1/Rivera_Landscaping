import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Phone = styled(LinkR)
`
    display: flex;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: black;

    @media screen and (max-width: 480px) {
        display: none;
    }  
`
export const HeaderContainer = styled.div
`
    background: #F6E8B1;
    position: sticky;
    height: 175px; 
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
    max-width: 100px
    position:fixed;

    @media screen and (max-width: 480px) {
        height: 100px; 
        justify-items: start;
        align-items: center;
    }  
`
export const HeaderLogo = styled(LinkS)
`
    cursor: pointer;
    @media screen and (max-width: 480px) {
        justify-content: start;
    } 
`

export const NavBtn = styled.nav 
`
    display: flex;
    flex-direction: column;
    align-items: center;

     @media screen and (max-width: 480px) {
         display: none;
     }  
`

export const NavBtnLink = styled(LinkR)
`
     display: flex;
     border: 50px;
     background: #013220;
     white-space: nowrap;
     padding: 10px 30px;
     color: #fff;
     font-size: 20px;
     outline: solid;
     border: none;
     cursor: pointer;
     transition: all 0.2s ease-in-out;
     text-decoration: none;

     &:hover {
         transition: all 0.2s ease-in-out;
         background: #fff;
         color: #000;
     }
 `

 
export const MobileIcon = styled.div
`
    display: none;
    position: fixed;
    @media screen and (max-width: 480px) {
        display: flex;
        position: flex;
        top: 10px;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #000;
        z-index: 20;
    }
`

export const ImgWrap = styled.div
`

    display: flex;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
`

export const Img = styled.img
`
    height: 175px;
    width: 500px;
    @media screen and (max-width: 480px){
        height: 100px;
        width: 300px;
        margin: 0 0 10pz 0;
        padding-right: 0;
    }
`