import React from "react";

function IntroText({ subTitle, title, align }) {
    return (
        <div className={align === "right" ? `text--right` : `text-left`}>
            <h2 className="title--sm">{subTitle}</h2>
            <h1 className="title--xl mb-45">{title}</h1>
        </div>
    );
}

export default IntroText;
