import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { getAllControllers } from "../../managers/ControllerManager"


export const ControllerList = () => {

  const [controllers, setController] = useState([])


  useEffect(
    () => {
      getAllControllers().then((controllerData) => setController(controllerData))
    },
    []
  )

  return (
    <div className="container">
      <h1 className="controller-title">Controllers</h1>
      <article className="">
        {controllers.map(
          (controllerObject) => {
            return <div className="controller" key={controllerObject.id}  >
              <div className="title"><Link to={`/controllers/${controllerObject.id}`} key={controllerObject.id}>{controllerObject.name}</Link></div>
              <section className="" >
                <img src={controllerObject.img} alt={controllerObject.name} />
              </section>
            </div>
          })}
      </article >
    </div >
  )
}

