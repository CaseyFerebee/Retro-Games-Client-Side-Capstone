import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllConditions } from "../../../managers/ConditionManager";
import { getControllerCollectionById, updateControllerCollection } from "../../../managers/ControllerCollectionManager";

export const ControllerCollectionUpdateForm = () => {
    const navigate = useNavigate();
    const { collectionId } = useParams();
    const [controllerData, setControllerData] = useState([]);
    const [selectedCondition, setSelectedCondition] = useState("");
    const [conditions, setConditions] = useState([]);

    useEffect(() => {
        getControllerCollectionById(collectionId)
        .then((response) => {
            setControllerData(response);
            setSelectedCondition(response?.condition?.label)
        })
        
        getAllConditions()
        .then((response) => {
            setConditions(response); 
        })
        }, [collectionId]);

    const handleConditionChange = (e) => {
        setSelectedCondition(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updateController = {
            condition: parseInt(selectedCondition, 10),
        };

        updateControllerCollection(collectionId, updateController)
            .then(() => {
                navigate(`/controllercollections/${collectionId}`);
            })
    };

    return (
        <div className="container">
            <section className="hero is-medium is-primary">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <img
                            src={controllerData?.controller?.img}
                            alt={controllerData?.controller?.name}
                            className="game-image is-large"
                        />
                        <h1 className="title is-1">Edit Controller Collection</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="content">
                                <p className="subtitle">Controller Name: {controllerData?.controller?.name}</p>
                                <p>Description: {controllerData?.controller?.description}</p>
                                <p>Release Date: {controllerData?.controller?.releaseDate}</p>
                            </div>
                            <div className="field">
                                <label className="label">Edit Condition of Controller:</label>
                                <div className="control">
                                    <div className="select">
                                        <select
                                            value={selectedCondition}
                                            onChange={handleConditionChange}
                                            required
                                        >
                                            <option value="">Select a condition</option>
                                            {conditions.map((condition) => (
                                                <option key={condition.id} value={condition.id}>
                                                    {condition.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button
                                        type="submit"
                                        className="button is-info is-fullwidth add-game-button"
                                    >
                                        Update Controller Collection
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};