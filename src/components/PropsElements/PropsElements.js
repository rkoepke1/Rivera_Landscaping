import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const PropsContainer = styled.div
`
    background: ##FF853F;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const PropsBg = styled.div 
`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video
`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: black;
`

export const PropsContent = styled.div
`
    height: 700px;
    z-index: 3;
    max-width: 1000px;
    postition; absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PropsH1 = styled.h1
`
    color: #fff;
    font-size: 36px;
    text-align: center;
    white-space: pre-wrap;

    @media screen and (max-width: 768px) {
        font-size: 40px;
     }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const PropsP = styled.p
`
    margin-top: 24px;
    color #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
     }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const PropsBtnWrapper = styled.div
`
    margin-top: 32px;
    border: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ArrowForward = styled(MdArrowForward)
`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)
`
    marigin-left: 8px;
    font-size: 20px
`

export const LogoImg = styled.img
`
    justify-content: center;
    align-content: center;
    height: 100px;

`
export const TextWrapper = styled.div
`
    padding-top: 0;
    color: black;
    font-size: 48px;
    line-height: 16px;
    font-weight: 700;
    align-items: center;
    justify-items: center;
`
export const Heading = styled.div
`
    width: 100%;
    display: flex;
    margin-top: 100px;
    height: 0rem;
    align-items:center;
    justify-content: center;
    position: flex;
    top: 0;
    z-index: 1;
`
