import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { getCurrentOwnerConsoleCollection } from "../../../managers/ConsoleCollectionManager"

export const ConsoleCollectionList = () => {

  const [consoleCollections, setConsoleCollections] = useState([])


  useEffect(
    () => {
      getCurrentOwnerConsoleCollection().then((consoleData) => setConsoleCollections(consoleData))
    },
    []
  )

  return (
    <div className="container">
      <h1 className="console-collection-title">Console Collection</h1>
      <article className="">
        {consoleCollections.map(
          (consoleObject) => {
            return <div className="console" key={consoleObject.id}  >
              <div className="title"><Link to={`/consolecollections/${consoleObject.id}`} key={consoleObject.id}>{consoleObject?.console?.name}</Link></div>
              <section className="" >
                <img src={consoleObject?.console?.img} alt={consoleObject?.console?.name} />
              </section>
            </div>
          })}
      </article >
    </div >
  )
}

