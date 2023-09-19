import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllConditions } from "../../../managers/ConditionManager";
import { getConsoleCollectionById, updateConsoleCollection } from "../../../managers/ConsoleCollectionManager";

export const ConsoleCollectionUpdateForm = () => {
    const navigate = useNavigate();
    const { collectionId } = useParams()
    const [consoleData, setConsoleData] = useState([]);
    const [selectedCondition, setSelectedCondition] = useState("");
    const [conditions, setConditions] = useState([]);

    useEffect(() => {
        getConsoleCollectionById(collectionId)
        .then((response) => {
            setConsoleData(response);
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


        const updateConsole = {
            condition: parseInt(selectedCondition, 10),
        };

        updateConsoleCollection(collectionId, updateConsole)
            .then(() => {
                navigate(`/consolecollections/${collectionId}`);
            })
    };

    return (
        <div>
                <div key={consoleData.id}>
                    <h1>Edit Controller Collection</h1>
                    <form onSubmit={handleSubmit}>
                    <img src={consoleData?.console.img} alt={consoleData?.console.name} />
                        <p>Title: {consoleData?.console.name}</p>
                        <p>Title: {consoleData?.console.description}</p>
                        <p>Title: {consoleData?.console.releaseDate}</p>
                        <label>
                            Condition:
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
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
        </div>
    );
};
