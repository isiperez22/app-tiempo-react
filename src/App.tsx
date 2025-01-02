import useTiempo from "./hooks/useTiempo"
import Resultado from "./components/Resultado"
import Formulario from "./components/Formulario"

function App() {

  const { fetchTiempo,
    notFound,
    tiempoCiudad,
    hasData } = useTiempo()

  return (
    <>
      <header>
        <h2>Buscador de tiempo</h2>
      </header>
      <section className="container">
        <Formulario
          fetchTiempo={fetchTiempo}
          notFound={notFound}
        />
        


        {hasData &&
          <Resultado
            ciudad={tiempoCiudad}
          />
        }
      </section>
    </>
  )
}

export default App
