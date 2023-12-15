import React from "react"
import { Outlet } from "react-router-dom"
import { RootStyled } from "../components/Root/RootStyled"
import { TopBar } from "../components/TopBar/TopBar"
import { FlexColumnStyled } from "../components/Root/FlexColumnStyled"
import { useState } from "react";
import { SideMenu } from "../components/SideMenu/SideMenu"
import { Modal } from "../components/Modal/Modal"
import { useDispatch, useSelector } from "react-redux"
import { getCommentId } from "../features/comments/commentsSlice";

export const RootPage = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(true)
    const modalOpen = useSelector(getCommentId)
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }


    return(
        <RootStyled>
            {modalOpen != undefined? <Modal/> : ""}
            <SideMenu isVisible={isMenuOpen}/>
            <FlexColumnStyled>
                <TopBar onToggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>
                <Outlet/>
            </FlexColumnStyled>
        </RootStyled>
    )
}