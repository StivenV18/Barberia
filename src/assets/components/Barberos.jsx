import Header from "../ayudas/Header"
import dato from "../dato.json"


const Barberos = () => {
  return (
    <main>
      <Header />
      <section className="container">
      {
            dato.map((dato)=>(
              // eslint-disable-next-line react/jsx-key
                <section className="card">
                  <img src={dato.img}></img>
                    <p>{dato.nombre}</p>
                    <p>{dato.servicios}</p>
                    <p>{dato.direccion}</p>
                    <p>{dato.ciudad}</p>
                </section>
            ))
        }
      </section>
    </main>
  )
}

export default Barberos