import React from 'react'

const Title =  ({children}) => {
    const textLength = children.length
    const firsText = children.slice(0,15)
    const lastText = children.slice(15,textLength)

    return(
        <h2 className={'title is-4 mt-6'}><span className={'underline'}>{firsText}</span>{lastText}</h2>
    )
}
export default Title