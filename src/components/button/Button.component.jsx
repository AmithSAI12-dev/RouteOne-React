import React from 'react'

function Button({text, type, hover}) {
    return (
        <a href="/" className='button text--uppercase'>{text}</a>
    )
}

export default Button
