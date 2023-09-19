import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { getCurrentOwnerControllerCollection } from "../../../managers/ControllerCollectionManager"

export const ControllerCollectionList = () => {

    const [controllerCollections, setControllerCollections] = useState([])


    useEffect(
        () => {
            getCurrentOwnerControllerCollection().then((controllerData) => setControllerCollections(controllerData))
        },
        []
    )

    return (
        <div className="container">
            <h1 className="controller-collection-title">Controller Collection</h1>
            <article className="">
                {controllerCollections.map(
                    (controllerObject) => {
                        return <div className="controller" key={controllerObject.id}  >
                            <div className="title"><Link to={`/controllercollections/${controllerObject.id}`} key={controllerObject.id}>{controllerObject?.controller?.name}</Link></div>
                            <section className="" >
                                <img src={controllerObject?.controller?.img} alt={controllerObject?.controller?.name} />
                            </section>
                        </div>
                    })}
            </article >
        </div >
    )
}
