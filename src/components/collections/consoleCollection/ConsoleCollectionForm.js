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
        getSingleConsole(id)
        .then((response) => {
            setConsoleData(response);
        })

        getAllConditions()
        .then((response) => {
            setConditions(response); 
        })
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

        addConsoleCollection(createConsoleCollection)
            .then(() => {
                navigate(`/consolecollections`);
            })
    };

    return (
        <div>
            <h1>Edit Console Collection</h1>
            <form onSubmit={handleSubmit}>
            <img src={consoleData.img} alt={consoleData.name} />
                <p>Title: {consoleData.name}</p>
                <p>Title: {consoleData.description}</p>
                <p>Title: {consoleData.releaseDate}</p>
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
    );
};
