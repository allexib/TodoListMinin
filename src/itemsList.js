import React, {useEffect, useState} from 'react'

export default function ItemsList({getItems}) {
    const [irems, setItems] = useState([])

    useEffect(() => {
        const newItems = getItems(42)
        setItems(newItems)
    }, [getItems])

    return (
        <ul>
            {irems.map(i =>  <li key={i}>{i}</li>)}
        </ul>
    )
}