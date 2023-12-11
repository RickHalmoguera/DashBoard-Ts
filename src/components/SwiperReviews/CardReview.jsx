import { CardReviewStyled, CardReviewUserContainer, CommentText, ReviewTime, UserImg, UserName } from "./CardReviewStyled";
import { XCircleStyledIcon } from "../Icons/IconsStyled";

import { useState } from "react";
import { ModalReviews } from "../Modal/ModalReviews";



export const CardReview = ({comment})=>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const givenDateString = comment.date;
    const givenDate = new Date(givenDateString);
    let elapsedTime = 0;
    const currentDate = new Date();
    const timeDifference = currentDate - givenDate;
    const minutes = Math.floor(timeDifference / (1000 * 60));
    const days = Math.floor(minutes / (24 * 60));

    if (days > 0) {
    elapsedTime= `${days} days ago`;
    } else {
    elapsedTime=`${minutes} minutes ago`;
    }
    
    const openModal = () => {
        setIsModalOpen(true);
        console.log("hola")
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

    return(
        <>
            <ModalReviews 
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                title={comment.title}
                text={comment.text}
            />
            <CardReviewStyled>
                
                <CommentText onClick={openModal} >
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
