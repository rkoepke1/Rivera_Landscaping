import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav
`
    background:  #D0DB61;
    height: 40px;
    margin-top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
   
    @media screen and (max-width: 960px){
        transition: 08s all ease;
    }

    @media screen and (max-width: 480px){
        display: none;
    }
`

export const NavbarContainer = styled.div
`
    display: flex;
    justify-content: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100fpx
`

export const NavLogo = styled(LinkR)
`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center:
    margin-left: 24px;
    font-width: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div
`
    display: none;

    @media screen and (max-width: 480px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`
export const NavMenu = styled.ul
`
    display: flex;
    justify-items: center;
    align-itmes: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    padding-top: 20px;

    @media screen and (max-width: 480px) {
        display: none;
    } 
`

export const NavItem = styled.li
`
    justify-items: center;
    height: 40px;
`

export const NavLinks = styled(LinkS)
`
    color: #000;
    display: flex;
    align-items: center;
    padding-top: 40px;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-weight: bold;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        box-shadow: 2px 2px 2px 2px #000;
        background: #006400;
        color: #fff;
    }
`;
