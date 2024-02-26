import React from "react";

function ChildComponent(props) {
    return (
        <div>
            {props.greeting}
        </div>
    );
}

export default ChildComponent;