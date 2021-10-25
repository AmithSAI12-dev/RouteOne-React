import React from "react";

function Brand({image, name}) {
    return (
        <a href="/">
            <img src={image} alt={name} />
        </a>
    );
}

export default Brand;
