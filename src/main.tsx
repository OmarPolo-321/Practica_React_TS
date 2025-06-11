import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './Components/App.tsx'
import { Contador } from './Components/Contador'
import { ListaApp } from './Components/ListadoApp'
import { ToDo } from './Components/ToDo.tsx'
import './styles/styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App name="Juan" age={20} />
    <Contador text = "Este es el contador:" num= {20} />
    <ListaApp 
      ListSeccions={[
        {nombre: "Tarea 1", estado: true},
        {nombre: "Tarea 2", estado: true},
        {nombre: "Tarea 3", estado: true},
        {nombre: "Tarea 4", estado: false},
        {nombre: "Tarea 5", estado: true},
        {nombre: "Tarea 6", estado: true},
        {nombre: "Tarea 7", estado: false},
      ]}
    />
    <ToDo />
  </StrictMode>,
)
