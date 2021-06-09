import React from 'react'
import {Button} from '../ButtonElement.js'
import {
        ServiceContainer, 
        ServiceRow, 
        ServiceWrapper,
        Column1, 
        Column2, 
        TextWrapper,
        InfoWrapper,
        LogoImg,
        LogoText,
        ImgWrap, 
        Img,
        ListWrapper,
        List,
        TopHeading,
        TopLine,
        BtnWrap
    } from './ServicesElements'

    
const Services = () => {
    return (
        <>
            <ServiceContainer id="services">
                <InfoWrapper>
                    <TopHeading >
                        <LogoImg src={require("../../images/logo2.png").default}/>
                        <LogoText>
                            Services
                        </LogoText>
                    </TopHeading>
                <ServiceWrapper>
                    <ServiceRow>
                        <Column1>
                        <BtnWrap>
                            <Button to="quote">
                                Get Started Now!
                            </Button>
                        </BtnWrap>
                            <TextWrapper> 
                                Our Services 
                            </TextWrapper>
                            <ListWrapper>
                                <List>
                                    <li>Lawn Maintenance </li>
                                    <li>Turf Management</li>
                                    <li>Landscape Installstion</li>
                                    </List>
                                    <List>
                                    <li>Aeration and Seeding</li>
                                    <li>Tree and Shrub</li>
                                    <li>Irrigation</li>
                                    <li>Drainage Enhancement</li>
                                </List>  
                            </ListWrapper>
                        </Column1>
                        <Column2>
                            <TopLine>
                                    We are proud to offer a variety proffesional landscaping services around Maryland and Virginia.
                            </TopLine>
                            <ImgWrap>
                                <Img src={require("../../images/serviceArea.png").default} alt="loading..." />
                            </ImgWrap>
                        </Column2>
                    </ServiceRow>
                </ServiceWrapper>
                </InfoWrapper>
            </ServiceContainer>
        </>
    )
}

export default Services
