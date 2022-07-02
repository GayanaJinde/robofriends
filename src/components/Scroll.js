import React from "react";

const Scroll = (props) =>{
    return(
        <div style={{overflowY: 'scroll', border: '3px solid turquoise', height: '340px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;