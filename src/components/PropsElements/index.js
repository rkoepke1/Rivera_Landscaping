import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElement.js'
import {
    PropsContainer,
    PropsBg,
    VideoBg,
    PropsH1,
    PropsContent,
    PropsP,
    PropsBtnWrapper,
    ArrowForward,
    ArrowRight
} from './PropsElements'

const Props = () => {

    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <PropsContainer>
            <PropsBg>
                <VideoBg autoPlay loop muted src=
                {Video} type='video/mp4'/>
            </PropsBg>
            <PropsContent>
                <PropsH1>Lawn & Tree Care Services <br/>
                 located in the DMV</PropsH1>
                <PropsP>
                Trust the professionals at Rivera's Lanscaping Services to take care of your residential or comercial grounds.
                </PropsP>
                <PropsP>
                    Let us customize your plan.
                </PropsP>
                <PropsBtnWrapper>
                    <Button to='quote' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' padding='false'>
                        Click to call: +1 240 644 2801 {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </PropsBtnWrapper>
            </PropsContent>
        </PropsContainer>
    )
}

export default Props
