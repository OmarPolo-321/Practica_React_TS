import { useState } from "react"

interface props {
    text:string
    num: number
}

export const Contador = ({ text, num }: props) => {

    const [contar, setcontar] = useState(num)

    const handleClick = () => {
        setcontar(contar + 1)
    }

    return (
        <>
            <p>{text} {contar}👌</p>
            <button onClick={handleClick}>Presiona btn</button>
        </>

    )
}