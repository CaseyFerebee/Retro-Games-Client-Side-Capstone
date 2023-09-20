import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllConditions } from "../../../managers/ConditionManager";
import { getConsoleCollectionById, updateConsoleCollection } from "../../../managers/ConsoleCollectionManager";

export const ConsoleCollectionUpdateForm = () => {
    const navigate = useNavigate();
    const { collectionId } = useParams();
    const [consoleData, setConsoleData] = useState({});
    const [selectedCondition, setSelectedCondition] = useState("");
    const [conditions, setConditions] = useState([]);

    useEffect(() => {
        getConsoleCollectionById(collectionId).then((response) => {
            setConsoleData(response);
            setSelectedCondition(response?.condition?.label);
        });

        getAllConditions().then((response) => {
            setConditions(response);
        });
    }, [collectionId]);

    const handleConditionChange = (e) => {
        setSelectedCondition(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updateConsole = {
            condition: parseInt(selectedCondition, 10),
        };

        updateConsoleCollection(collectionId, updateConsole).then(() => {
            navigate(`/consolecollections/${collectionId}`);
        });
    };

    return (
        <div className="container">
            <section className="hero is-medium is-primary">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <img
                            src={consoleData?.console?.img}
                            alt={consoleData?.console?.name}
                            className="game-image is-large"
                        />
                        <h1 className="title is-1">{consoleData?.console?.name}</h1>
                        <p className="subtitle">{consoleData?.console?.description}</p>
                        <p className="subtitle">Release Date: {consoleData?.console?.releaseDate}</p>
                        <div className="field">
                            <label className="label">Edit Condition of Console:</label>
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
                                    Update Console Collection
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};