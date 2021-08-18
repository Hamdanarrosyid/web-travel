import React from 'react'

const CardPost = ({ post }) => {
    const { title, thumbnail, body, total_comments, total_likes } = post
    console.log(post)
    return (
        <div className={`column is-one-third-desktop is-half-tablet is-full-mobile`}>
            <div className={'post-card-image'}>
                <img className={'image'} src={thumbnail.url} alt={thumbnail.fileName} />
                <div className={'post-card-content'}>
                    <div className={'card-text'}>
                        <p>{title}</p>
                        <div>
                            <p className={'mx-2'}>{total_likes ?? 0} &hearts;</p>
                            <p>{total_comments ?? 0} 💬</p>
                        </div>
                    </div>
                </div>
            </div>
            <p>
                {body?.text}
            </p>
        </div>
    )
}

export default CardPost