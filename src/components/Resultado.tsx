import { Tiempo } from "../schemas"
import { kelvinToCelsius } from "../utils"

type ResultadoProps = {
  ciudad: Tiempo
}

export default function Resultado({ciudad} : ResultadoProps) {
  return (
    <section className="resultado">
      <header>
        <h3>{ciudad.name}</h3>
      </header>
      <section>
        <p>Temperatura actual: <span>{kelvinToCelsius(ciudad.main.temp)}º</span></p>
        <p>Temperatura maxima: <span>{kelvinToCelsius(ciudad.main.temp_max)}º</span></p>
        <p>Temperatura minima: <span>{kelvinToCelsius(ciudad.main.temp_min)}º</span></p>
      </section>
      
    </section>
  )
}
