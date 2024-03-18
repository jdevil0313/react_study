import React from "react";
import Comment from "./Comment";

const commnets = [
    {
        name: "이민재", 
        comment: "안녕하세요. 소플입니다."
    },
    {
        name: "유재석", 
        comment: "리액트 존잼"
    },
    {
        name: "강민경", 
        comment: "저도 링개트 배워보고 싶어영"
    },
    {
        name: "아이유", 
        comment: "내가 짱이지"
    }
]

function CommentList(props) {
    return (
        <div>
            {commnets.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                )
            })}
        </div>
    )
}

export default CommentList;