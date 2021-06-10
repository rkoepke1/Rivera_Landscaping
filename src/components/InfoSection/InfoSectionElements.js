import styled from 'styled-components'

export const InfoContainer = styled.div
`
    color: #fff;
    height: 750px;
    display:flex;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#FF853F')};

    @media screen and (max-width: 480px) {
        padding: 100px 0;
    }
`
export const LogoImg = styled.img
`
    justify-content: center;
    align-content: center;
    height: 100px;

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
export const InfoRow = styled.div
`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col2 col1'`)};

    @media screen and (max-width: 480px) {
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
export const TopLine = styled.div
`
    color: black;
    font-size: 32px;
    line-height: 32px;
    font-weight: 700;
    letter-spaceing: 1.4px;
    padding-bottom: 30px;
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
export const Subtitle = styled.div
`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`
export const BtnWrap = styled.div
`
    display: flex;
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