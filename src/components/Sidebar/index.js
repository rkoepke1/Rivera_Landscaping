import React from 'react'
import {
        SidebarContainer, 
        Icon, 
        CloseIcon, 
        SidebarWrapper, 
        SidebarMenu, 
        SidebarLink, 
        SideBtnWrap, 
        SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to='home'>Home</SidebarLink>
                    <SidebarLink onClick={toggle} to='about'>About</SidebarLink>
                    <SidebarLink onClick={toggle} to='services'>services</SidebarLink>
                    <SidebarLink onClick={toggle} to='serviceArea'>serviceArea</SidebarLink>
                    <SidebarLink onClick={toggle} to='contact'>contact</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='quote'>Click to Call +1 240 644 2801</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar