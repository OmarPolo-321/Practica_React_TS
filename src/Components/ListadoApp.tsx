import { useState } from "react"
import { InputTask } from "./input_listaApp"

interface ItemProps {
    nombre: string
    estado: boolean
    className?: string
}

const Item = ({ nombre, estado, className }: ItemProps) => {
    return (
        <li className={className}>
            {nombre} - {estado ? "✅" : "⛔"}
        </li>
    )
}
interface ListaAppProps {
    ListSeccions: ItemProps[]
}
export const ListaApp = ({ ListSeccions }: ListaAppProps) => {
    const [arreglo, setArreglo] = useState(ListSeccions)
    const [inputValue, setInputValue] = useState("")
    
    const AddTask = () => {
        if (inputValue.trim() === "") return
        setArreglo([...arreglo, { nombre: inputValue, estado: false }])
        setInputValue("")
    }
    // console.log(ListSeccions)

    return (
        <>
            <h1>Lista de Tareas</h1>
            <InputTask value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={AddTask}>Agregar Tarea</button>
            <ol>
                {arreglo.map((tarea, index) => (
                    <Item className={index.toString()} key={index} nombre={tarea.nombre} estado={tarea.estado}></Item>
                ))}
            </ol>

        </>
    )
}