import styled from 'styled-components'

export const ServiceContainer = styled.div
`
    color: #fff;
    height: 750px;
    display:flex;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#EB712F')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`
export const InfoWrapper = styled.div
`
    display: grid;
    z-index: 1;
    height: 700px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto; 
    padding: 0 24px;
    justify-content: center;
`
export const TopHeading = styled.div
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
export const LogoImg = styled.img
`
    justify-content: center;
    align-content: center;
    height: 100px;

`
export const ServiceWrapper = styled.div
`
    display: grid;
    z-index: 1;
    height: 700px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto; 
    padding: 0 24px;
    justify-content: center;
`
export const ServiceRow = styled.div
`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col2 col1'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col' 'col2'` : `'col1 col1' 
        'col2 col2'`)};

    }
`
export const Column1 = styled.div
`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

`
export const Column2 = styled.div
`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    
`
export const LogoText = styled.div
`
    padding-top: 0;
    color: black;
    font-size: 48px;
    line-height: 16px;
    font-weight: 700;
    align-items: center;
    justify-items: center;
`
export const TextWrapper = styled.div
`
    margin-top: -50px;
    color: black;
    font-size: 48px;
    line-height: 16px;
    font-weight: 700;
    align-items: center;
    justify-items: center;

    @media screen and (max-width: 768px) {
        justify-content: left;
        align-items: center;
        font-size: 24px;
    } 

`

export const TopLine = styled.div
`
    padding-bottom: 30px;
    color: black;
    font-size: 24px;
    line-height: 16px;
    font-weight: 700;
    align-items: center;
    justify-items: center;
    text-align: left;
    line-height: 30px;

    @media screen and (max-width: 768px) {
        justify-content: left;
        align-items: center;
        font-size: 24px;
    } 

`

export const List = styled.div
`
    
`
export const ListWrapper= styled.div
`
    display: flex;
    position: flex;
    margin-top: 50px;
    color: black;
    align-items:left;
    justify-content: space-evenly;
    z-index: 1;

    @media screen and (max-width: 768px) {
        margin-top: 25px;
        justify-items: start;
        align-items: center;
        margin-bottom: 100px;
    } 
`
export const BtnWrap = styled.div
`
    display: flex;
    margin-bottom: 200px;
    justify-content: flex-start;
`

export const ImgWrap = styled.div
`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img
`
    width: 100%;
    margin: 0 0 10pz 0;
    padding-right: 0;
`