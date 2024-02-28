import React from "react";
import Comment from "./comment/Comment";
import Image1 from "../assets/images/199-128x128.jpg";
import Image2 from "../assets/images/302-128x128.jpg";
import Image3 from "../assets/images/574-128x128.jpg";

const userList = [
    {
        id: 1,
        userpic: Image1,
        username: "Alex",
        content: "Hello, React!",
        createdAt: "February 21, 2024 5:01 PM" 
    },
    {
        id: 2,
        userpic: Image2,
        username: "Brian",
        content: "Highly recommending this library.",
        createdAt: "February 21, 2024 5:20 PM" 
    },
    {
        id: 3,
        userpic: Image3,
        username: "Carol",
        content: "Reusability all the way!",
        createdAt: "February 22, 2024 3:00 PM" 
    }
];

function Test() {
    const isLoggedIn = true;

    return (
        <div>
            <h1>Welcome { isLoggedIn ? "User" : "Guest" }</h1>
            <div id="comments">
                {userList.map((user, index) => (
                    <Comment key={index} user={user}/>
                ))}
            </div>
        </div>
    );
}

export default Test;