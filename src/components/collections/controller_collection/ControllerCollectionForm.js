import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllConditions } from "../../../managers/ConditionManager";
import { getSingleController } from "../../../managers/ControllerManager";
import { addControllerCollection } from "../../../managers/ControllerCollectionManager";

export const ControllerCollectionForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = location.state;
    const [controllerData, setControllerData] = useState({});
    const [selectedCondition, setSelectedCondition] = useState("");
    const [conditions, setConditions] = useState([]);

    useEffect(() => {
        getSingleController(id).then((response) => {
            setControllerData(response);
        });

        getAllConditions().then((response) => {
            setConditions(response);
        });
    }, [id]);

    const handleConditionChange = (e) => {
        setSelectedCondition(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const createControllerCollection = {
            controller: parseInt(controllerData.id, 10),
            condition: parseInt(selectedCondition, 10),
        };

        addControllerCollection(createControllerCollection).then(() => {
            window.alert("Controller added to your collection successfully");
            navigate(`/controllercollections`);
        });
    };

    return (
        <div className="container">
            <section className="hero is-medium" style={{ backgroundColor: 'black' }}>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <img
                            src={controllerData.img}
                            alt={controllerData.name}
                            className="game-image is-large"
                        />
                        <h1 className="title is-1 has-text-white">{controllerData.name}</h1>
                        <p className="subtitle has-text-white">{controllerData.description}</p>
                        <div className="field">
                            <label className="label has-text-white">Condition of Controller:</label>
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
                                    onClick={handleSubmit}
                                >
                                    Add this Controller to your Collection
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};