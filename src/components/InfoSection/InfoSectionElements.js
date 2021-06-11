import styled from 'styled-components'

export const InfoContainer = styled.div
`
    color: #fff;
    height: 750px;
    display:flex;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#F8F0C6')};

    @media screen and (max-width: 480px) {
        padding-top: 100px;

        height: 100%;
    }
`
export const InfoWrapper = styled.div
`
    display: grid;
    height: 700px;
    width: 100%;
    margin-right: auto;
    margin-left: auto; 
    padding: 0 24px;
    justify-content: center;
`
export const Heading = styled.div
`
    width: 100%;
    display: flex;
    margin-top: 125px;
    height: 0rem;
    align-items:center;
    justify-content: center;
    position: flex;
    top: 0;
    @media screen and (max-width: 480px) {
        margin-top: -50px;
    };
`
export const LogoImg = styled.img
`
    justify-content: center;
    align-content: center;
    height: 100px;
    @media screen and (max-width: 480px) {
        height: 50px;
    }

`
export const TextWrapper = styled.div
`
    padding-top: 0;
    color: black;
    font-size: 36px;
    line-height: 16px;
    font-weight: 700;
    align-items: center;
    justify-items: center;

    @media screen and (max-width: 768px){
        line-height: 24px;
        font-size: 30px;
    }
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

export const TopLine = styled.div
`
    color: black;
    font-size: 32px;
    line-height: 32px;
    font-weight: 700;
    letter-spaceing: 1.4px;
    padding-bottom: 30px;
`

export const Subtitle = styled.div
`
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`
export const BtnWrap = styled.div
`
    display: flex;


`

export const ImgWrap = styled.div
`
    width: 100%;
    display: flex;

    height: 100%;
    justify-content: center;
    
`

export const Img = styled.img
`
    width: 100%;
    margin-top: 50px;
    margin: 0 0 10pz 0;
    padding-right: 0;
    @media screen and (max-width: 768px) {
        width: 100%;
        justify-content: center;
    }
`