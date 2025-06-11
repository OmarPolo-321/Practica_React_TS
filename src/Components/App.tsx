
interface props{
  name:string
  age ?:number
}


export const App = ({name,age}:props) => {
  let mensaje=""
  if(age == undefined){
    mensaje= `Hola ${name}`
  }else{
    mensaje =`Hola ${name}, Tienes ${age} años `
  }
  return (
    <>
      <h1>{mensaje}</h1>
    </>
  )
}

