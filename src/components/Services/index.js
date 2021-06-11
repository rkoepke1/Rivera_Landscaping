import React from 'react'
import {Button} from '../ButtonElement.js'

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Column2,
    ImgWrap,
    Img,
    LogoImg
} from './ServicesElements'

const InfoSection = () => {
    return (
        <>
            <InfoContainer id="services">
              <InfoWrapper>
                <Heading >
                    <LogoImg src={require("../../images/logo2.png").default}/>
                    <TextWrapper>
                        Hello
                    </TextWrapper>
                </Heading>
                  <InfoRow>
                  <Column2>
                        <ImgWrap>
                            <Img src={require("../../images/serviceArea.png").default} alt="...loading" />
                        </ImgWrap>
                    </Column2>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Topline</TopLine>
                            <Subtitle>Subtitle</Subtitle>
                        </TextWrapper>
                        <BtnWrap>
                                <Button to='quote'>label</Button>
                        </BtnWrap>
                    </Column1>

                  </InfoRow>
              </InfoWrapper>
            </InfoContainer>  
        </>
    )
}

export default InfoSection
