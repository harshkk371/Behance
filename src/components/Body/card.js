import React from 'react'

export default function Card(props) {
    let CardName = `color_bg ${props.alt}`
    let bg_img = `url(${props.images})`
    let { title,tagg } = props
    return (

        <div className="card">
            <div className="wrapper">
                <div className={CardName}></div>
                <div className="card_img" ></div>
                <div className="heart">
                    <svg xmlns="<http://www.w3.org/2000/svg>" viewBox="0 0 64 64">
                        <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z">
                        </path>
                    </svg> 
                </div>
                <div className="cardInfo">
                    <h1>{title}</h1>
                    <p className="tagg">{tagg}</p>
                    <div className="action">
                        
                        
                      
                    </div>
                </div>
            </div>
        </div>

      
    )
}

