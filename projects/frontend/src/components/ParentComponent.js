import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
    const message = "Hello, child component!";

    return (
        <div>
            <ChildComponent greeting={message}></ChildComponent>
        </div>
    );
}

export default ParentComponent;