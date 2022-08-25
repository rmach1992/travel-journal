import React from 'react'

export default function Card(prop) {
    return (
        <section>
            <img src={prop.item.image} />
            <div className="section--main">
                <div>
                    <img src="./images/Location.png"/>
                    <span>{prop.item.location}</span>
                    <a href={prop.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{prop.item.title}</h2>
                <p className="section--date">{prop.item.startDate} - {prop.item.endDate}</p>
                <p className="section--description">{prop.item.description}</p>
            </div>
        </section>
    )
}