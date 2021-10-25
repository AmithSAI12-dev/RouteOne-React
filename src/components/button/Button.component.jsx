import React from 'react'

function Button({text, type, hover}) {
    return (
        <a href="/" className={`button text--uppercase ${type}`}>{text}</a>
    )
}

export default Button
