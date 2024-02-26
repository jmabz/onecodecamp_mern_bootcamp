import React from "react";
import "./Comment.css";

function Comment(props) {
    const {user} = props;
    return (
        <div className="comment">
            <div className="comment__userpic-container">
                <img src={user.userpic} alt={user.username} className="comment__userpic"></img>
            </div>
            <div className="comment__body">
                <span className="comment__username">{user.username}</span>
                <span className="comment__created-at">{user.createdAt}</span>
                <br/>
                <p className="comment__content">{user.content}</p>
            </div>
        </div>
    );
}

export default Comment;