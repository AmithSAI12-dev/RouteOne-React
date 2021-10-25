import React from "react";
import Button from "../../button/Button.component";


function Collection({routeTo, displayText, image}) {
    return (
        <a href={routeTo} className="featuredCollection" style={{backgroundImage: `url(${image})`}}>
            <div className="featuredCollection__overlay"></div>
            <div className="featuredCollection__txt">
                <h4>{displayText}</h4>
            </div>
            <div className="featuredCollection__txt hover-only">
                <h4>{displayText}</h4>
            </div>
            <div className="featuredCollection__button">
                <Button text="discover" type="button--secondary"></Button>
            </div>
        </a>
    );
}

export default Collection;
