import React from 'react'

function IntroText({subTitle, title}) {
    return (
        <div className='text--right'>
            <h2 className="title--sm">{subTitle}</h2>
            <h1 className='title--xl mb-45'>{title}</h1>
        </div>
    )
}

export default IntroText
