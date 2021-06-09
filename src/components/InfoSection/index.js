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
} from './InfoSectionElements'

const InfoSection = ({img, id, description, alt, headLine, topLine, buttonLabel}) => {
    return (
        <>
            <InfoContainer id={id}>
              <InfoWrapper>
                <Heading >
                    <LogoImg src={require("../../images/logo2.png").default}/>
                    <TextWrapper>
                        {headLine}
                    </TextWrapper>
                </Heading>
                  <InfoRow>
                  
                    <Column1>-
                    <TextWrapper>
                        <TopLine>{description}</TopLine>
                        <Subtitle>{topLine}</Subtitle>
                        <BtnWrap>
                            <Button to='quote'>{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                  </InfoRow>
              </InfoWrapper>
            </InfoContainer>  
        </>
    )
}

export default InfoSection
