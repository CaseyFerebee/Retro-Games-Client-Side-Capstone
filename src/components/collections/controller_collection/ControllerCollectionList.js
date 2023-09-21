import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getCurrentOwnerControllerCollection } from "../../../managers/ControllerCollectionManager";
import "./ControllerCollectionDetails.css"; 


export const ControllerCollectionList = () => {
    const [controllerCollections, setControllerCollections] = useState([]);

    useEffect(() => {
        getCurrentOwnerControllerCollection().then((controllerData) => setControllerCollections(controllerData))
    }, []);

    return (
        <div className="container">
            <h1 className="title is-1  has-text-white">Controller Collection</h1>
            <div className="columns is-multiline">
                {controllerCollections.map((controllerObject) => (
                    <div className="column is-one-third" key={controllerObject.id}>
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src={controllerObject?.controller?.img} alt={controllerObject?.controller?.name} />
                                </figure>
                            </div>
                            <div className="card-content">
                                <p className="title is-4">
                                    <Link to={`/controllercollections/${controllerObject.id}`} className="has-text-centered">
                                        {controllerObject?.controller?.name}
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

