import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllConditions } from "../../../managers/ConditionManager";
import { getSingleConsole } from "../../../managers/ConsoleManager";
import { addConsoleCollection } from "../../../managers/ConsoleCollectionManager";

export const ConsoleCollectionForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = location.state;
    const [consoleData, setConsoleData] = useState({});
    const [selectedCondition, setSelectedCondition] = useState("");
    const [conditions, setConditions] = useState([]);

    useEffect(() => {
        getSingleConsole(id).then((response) => {
            setConsoleData(response);
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

        const createConsoleCollection = {
            console: parseInt(consoleData.id, 10),
            condition: parseInt(selectedCondition, 10),
        };

        addConsoleCollection(createConsoleCollection).then(() => {
            window.alert("Console added to your collection successfully");
            navigate(`/consolecollections`);
        });
    };

    return (
        <div className="container">
            <section className="hero is-medium" style={{ backgroundColor: 'black' }}>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <img
                            src={consoleData.img}
                            alt={consoleData.name}
                            className="game-image is-large"
                        />
                        <h1 className="title is-1 has-text-white">{consoleData.name}</h1>
                        <p className="subtitle has-text-white">{consoleData.description}</p>
                        <form onSubmit={handleSubmit}>
                            <div className="field">
                                <label className="label has-text-white">Condition of Console:</label>
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
                                        Add this Console to your Collection
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