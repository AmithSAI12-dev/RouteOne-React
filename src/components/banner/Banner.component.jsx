import React from 'react'
import Button from '../button/Button.component'

function Banner({height, image,subTitle, title, button, nocontainer, color}) {
    return (
        <div className='banner d-flex align-items-center' style={{ backgroundImage: `url(${image})`, height: height}}>
            <div className={`banner__content ${!nocontainer ? 'container--sm' :'p-60'} ${color}`}>
                <h2 className="title--sm">{subTitle}</h2>
                <h1 className='title--xl mb-45'>{title}</h1>
                {/* BUTTON COMPONENT */}
                <Button text={button}></Button>
            </div>
        </div>
    )
}

export default Banner
