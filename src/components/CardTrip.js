import React from 'react'

const CardTrip = ({ columnSize, trip }) => {
    const { title, thumbnail } = trip
    return (
        <div className={`column is-full-mobile ${columnSize}`}>
            <div className={'trip-card-image'}>
                <img className={'image'} src={thumbnail.url} alt={thumbnail.fileName} />
                <div>
                    <p className={'has-text-light subtitle is-3'}>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default CardTrip