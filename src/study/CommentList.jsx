import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이름 1",
        comment : "댓글 1",
    },
    {
        name: "이름 2",
        comment : "댓글 2",
    },
    {
        name: "이름 3",
        comment : "댓글 3",
    },
];

function CommentList(){
    return (
        <div>
            {comments.map((comment)=>{
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;