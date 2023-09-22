import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getCurrentOwnerControllerCollection } from "../../../managers/ControllerCollectionManager";
import "./ControllerCollectionDetails.css";


export const ControllerCollectionList = () => {
    const [controllerCollections, setControllerCollections] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        getCurrentOwnerControllerCollection().then((controllerData) =>
            setControllerCollections(controllerData)
        );
    }, []);

    const filteredControllers = controllerCollections.filter((controllerObject) =>
        controllerObject.controller.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container">
            <div className="has-text-centered">
                <h1 className="title is-1 has-text-white">Controller Collection</h1>

                <div className="field" style={{ maxWidth: "300px", margin: "0 auto" }}>
                    <input
                        type="text"
                        className="input search-input"
                        placeholder="Search for controllers "
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="columns is-multiline">
                    {filteredControllers.map((controllerObject) => (
                        <div className="column is-one-third" key={controllerObject.id}>
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src={controllerObject?.controller?.img} alt={controllerObject?.controller?.name} />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <p className="title is-4">
                                        <Link to={`/controllercollections/${controllerObject.id}`}>
                                            {controllerObject?.controller?.name}
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
