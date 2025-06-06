
interface props{
  titulo:string
  dato:number
}


export const App = ({titulo,dato}:props) => {
  return (
    <>
      <h2>{titulo}</h2>
      <h1>{dato}</h1>
    </>
  )
}

