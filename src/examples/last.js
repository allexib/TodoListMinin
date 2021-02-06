import React, {useState,useEffect} from 'react'

function useLogger(value) {
    useEffect(() => {
        console.log('value changed' , value)
    }, [value])
}

function useInput(initialValue) {
    const [value,setValue] = useState(initialValue)

    const onChange = event => {
        setValue(event.target.value)
    }

    const clear = () => setValue('')


    return {
        bind: {value, onChange},
        value,
        clear
    }
}

function App() {
    // const [name, setName] = useState('')>>>>>>>>
    //
    // const changeHandler = event => {
    //     setName(event.target.value)
    // }

    const input = useInput('')

    useLogger(input.value)

    return (
        <div className={'container pt-3'}>
            <input type='text'{...input.bind}/>
            <button className="btn-warning" onClick={() => input.clear()}>Очистит</button>
            <hr/>
            <h1>{input.value}</h1>

        </div>
    )
}


export default App