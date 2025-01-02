import { FormEvent, useState } from 'react'
import { BuscarType } from '../types'
import Alerta from './Alerta'

type FormProps = {
  fetchTiempo: (ciudad: BuscarType) => Promise<void>
  notFound?: boolean
}


export default function Formulario({ fetchTiempo, notFound }: FormProps) {

  const [buscar, setBuscar] = useState<BuscarType>({
    ciudad: ''
  })

  const handeChange = (e: FormEvent<HTMLInputElement>) => {
    setBuscar({
      ...buscar,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetchTiempo(buscar)
  }

  return (
    <section
      className='formulario'
    >
      <form
        action=""
        onSubmit={handleSubmit}
      >
        <label htmlFor="ciudad">Nombre de la ciudad: </label>
        <input type="text" name="ciudad" onChange={handeChange} />
        {notFound && <Alerta>Ciudad no encontrada</Alerta>}
        <button type="submit">Buscar</button>
      </form>
    </section>

  )
}
