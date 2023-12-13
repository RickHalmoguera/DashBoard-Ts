import { CardReviewStyled, CardReviewUserContainer, CommentText, ReviewTime, UserImg, UserName } from "./CardReviewStyled"
import { XCircleStyledIcon } from "../Icons/IconsStyled"
import {useDispatch} from "react-redux"
import { useState } from "react"
import { Modal } from "../Modal/Modal"
import { setModalCommentId } from "../../features/comments/commentsSlice"



export const CardReview = ({comment})=>{
    const dispatch = useDispatch()
    const givenDateString = comment.date;
    const givenDate = new Date(givenDateString)
    let elapsedTime = 0;
    const currentDate = new Date();
    const timeDifference = currentDate - givenDate;
    const minutes = Math.floor(timeDifference / (1000 * 60))
    const days = Math.floor(minutes / (24 * 60))

    if (days > 0) {
    elapsedTime= `${days} days ago`;
    } else {
    elapsedTime=`${minutes} minutes ago`;
    }
    
    const openModal = (commentId) => {
        dispatch(setModalCommentId(commentId))
        
    };
    

    return(
        <>
      
            <CardReviewStyled>
                
                <CommentText onClick={()=>openModal(comment.id)} >
                    {comment.text}
                </CommentText>
                
                <CardReviewUserContainer >
                    <UserImg src={comment.photo} alt="Profile pic" />
                    <UserName>{comment.name} <br /><ReviewTime>{elapsedTime}</ReviewTime></UserName>
                    <XCircleStyledIcon />
                </CardReviewUserContainer>
                

            </CardReviewStyled>
        
        </>
    )
}
