import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { getAllConsoles } from "../../managers/ConsoleManager"


export const ConsoleList = () => {

  const [consoles, setConsole] = useState([])


  useEffect(
    () => {
      getAllConsoles().then((consoleData) => setConsole(consoleData))
    },
    []
  )

  return (
    <div className="container">
      <h1 className="console-title">Consoles</h1>
      <article className="">
        {consoles.map(
          (consoleObject) => {
            return <div className="console" key={consoleObject.id}  >
              <div className="title"><Link to={`/consoles/${consoleObject.id}`} key={consoleObject.id}>{consoleObject.name}</Link></div>
              <section className="" >
                <img src={consoleObject.img} alt={consoleObject.name} />
              </section>
            </div>
          })}
      </article >
    </div >
  )
}

