
interface InputTaskProps{
    value:string
    onChange: (e:React.ChangeEvent<HTMLInputElement>)=> void
}
export const InputTask = ({value, onChange}:InputTaskProps) => {
    
    return (
        <input type="text" placeholder="Nueva Tarea" value={value} onChange={onChange}/>
    )
} 