import NavBar from './Components/NavBar/NavBar.jsx'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'

//
function App(){
  const saludo = "Bienvenidos"
  return (
    <>
    <NavBar />
      <ItemListContainer greeting={saludo}/>
    </>    
  )
}

export default App;