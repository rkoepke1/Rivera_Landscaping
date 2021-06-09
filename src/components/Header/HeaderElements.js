import styled from 'styled-components'
import { Link as LinkR } from 'react-scroll'

export const Phone = styled.text
`
    display: flex;
    text-align: left;
    font-size: 20px;
    font-weight: bold;

    @media screen and (max-width: 768px) {
        display: none;
    }  
`
export const HeaderContainer = styled.div
`
    background: #800000;
    position: sticky;
    height: 175px; 
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
    max-width: 0fpx
    position:fixed;

    @media screen and (max-width: 768px) {
        justify-items: start;
        align-items: center;
        justify-content: space-between;
    }  
`
export const HeaderLogo = styled(LinkR)
`
cursor: pointer;
@media screen and (max-width: 768px) {
    justify-content: start;
} 
`

export const NavBtn = styled.nav 
`
    display: flex;
    flex-direction: column;
    align-items: center;

     @media screen and (max-width: 768px) {
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
    @media screen and (max-width: 768px) {
        display: flex;
        position: fixed;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
        z-index: 1;
    }
`

export const ImgWrap = styled.div
`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img
`
    height: 175px;
    width: 500px;
`