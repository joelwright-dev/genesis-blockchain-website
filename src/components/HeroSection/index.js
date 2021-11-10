import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight } from './HeroElements'
import { Button } from '../ButtonElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay muted loop src={Video} type="video/mp4"/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Open Blockchain</HeroH1>
                <HeroP>The open source blockchain project made for you to create.</HeroP>
                <HeroBtnWrapper>
                    <Button to="documentation" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">Read The Docs {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
