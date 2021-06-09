import React, {useState} from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Props from '../components/PropsElements'
import Services from '../components/Services'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Header toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar  toggle={toggle}/>
            <Props />
            <InfoSection {...homeObjOne}/>
            <Services />
        </>
    )
}

export default Home
