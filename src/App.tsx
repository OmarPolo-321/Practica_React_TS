import { useState } from "react";
import { Button } from "./Components";


// import { Contador } from './Components/ContadorEj/Contador.tsx'
// import { ListaApp } from './Components/ListadoApp/ListadoApp.tsx'
// import { ToDo } from './Components/ToDo/ToDo.tsx'
// import { Example } from './Components/ejemplo/example.tsx'
//Esta es la mejor forma al realizar las importaciones react y Vite nos ayuda en esto
import { Contador, ListaApp, ToDo, Example } from './Components';

export const App = () => {
  const [count, setCount] = useState(0)

  const countMore = () => {
    setCount((count) => count + 1)
  }
  return (
    <>
      <Button label={`Count is ${count}`} parentMethod={countMore}/>
      <Example name="Juan" age={20} />
      <Contador text="Este es el contador:" num={20} />
      <ListaApp
        ListSeccions={[
          { nombre: "Tarea 1", estado: true },
          { nombre: "Tarea 2", estado: true },
          { nombre: "Tarea 3", estado: true },
          { nombre: "Tarea 4", estado: false },
          { nombre: "Tarea 5", estado: true },
          { nombre: "Tarea 6", estado: true },
          { nombre: "Tarea 7", estado: false },
        ]}
      />
      <ToDo />
    </>
  )
}

