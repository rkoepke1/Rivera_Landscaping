import img from "../../images/logo2.png"
import {FaBars} from 'react-icons/fa'
import {Button} from '../ButtonElement'
import {
    HeaderContainer, 
    HeaderLogo,
    NavBtn,
    NavBtnLink,
    Phone,
    ImgWrap,
    MobileIcon,
    Img
} from './HeaderElements'

const Header = ({toggle}) => {
    return (
        <>
            <HeaderContainer id="home">
                <MobileIcon  onClick={toggle}> 
                        <FaBars />
                </MobileIcon>
                <NavBtn to='quote'>
                    <Button to='quote' background={false} padding='true' color='true' font-size='true'>
                        Request a Free Consultation
                    </Button>
                </NavBtn>
                <HeaderLogo to='home'>
                    <ImgWrap>
                        <Img src={img} alt="Loading..."/>
                    </ImgWrap>
                </HeaderLogo>
                <Phone to='quote'>
                    
                     For a free estimate call or text:
                     <br/>
                     (240) 644 2801
                    
                </Phone>
            </HeaderContainer>
        </>
    )
}

export default Header
