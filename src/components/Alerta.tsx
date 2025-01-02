
export default function Alerta({children} : {children: string}) {
  return (
    <div className="error">{children}</div>
  )
}
