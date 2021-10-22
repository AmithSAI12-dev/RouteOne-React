import React from 'react'
import Button from '../button/Button.component'

function Banner({height, image,subTitle, title, button}) {
    return (
        <div className='banner d-flex align-items-center' style={{ backgroundImage: `url(${image})`, height: height}}>
            <div className="banner__content container--sm">
                <h2 className="title--sm">{subTitle}</h2>
                <h1 className='title--xl mb-45'>{title}</h1>
                <Button text={button}></Button>
            </div>
        </div>
    )
}

export default Banner
