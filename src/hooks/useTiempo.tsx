import { useMemo, useState } from 'react'
import { BuscarType } from '../types'
import { Tiempo, tiempoSchema } from '../schemas'


const initialState = {
  name: '',
  main: {
    temp: 0,
    temp_max: 0,
    temp_min: 0
  }
}

export default function useTiempo() {


  const [notFound, setNotFound] = useState(false)
  const [tiempoCiudad, setTiempoCiudad] = useState<Tiempo>(initialState)
  const appId = import.meta.env.VITE_API_KEY


  const fetchTiempo = async (ciudad: BuscarType) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad.ciudad}&appid=${appId}`
      const response = await fetch(url)
      const rawData = await response.json()

      if (!response.ok) {
        setNotFound(true)
        return
      }
      const data = tiempoSchema.parse(rawData)
      setTiempoCiudad(data)
      setNotFound(false);
    } catch (error) {
      console.error(error)
    }
  }

  const hasData = useMemo(()=> tiempoCiudad.name, [tiempoCiudad])
  return {
    fetchTiempo,
    notFound,
    tiempoCiudad,
    hasData
  }
}
