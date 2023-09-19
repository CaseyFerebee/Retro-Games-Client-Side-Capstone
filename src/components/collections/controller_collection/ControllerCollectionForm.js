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
        getSingleController(id)
        .then((response) => {
            setControllerData(response);
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

        const createControllerCollection = {
            controller: parseInt(controllerData.id, 10),
            condition: parseInt(selectedCondition, 10),
        };

        addControllerCollection(createControllerCollection)
            .then(() => {
                navigate(`/controllercollections`);
            })
    };

    return (
        <div>
            <h1>Edit Controller Collection</h1>
            <form onSubmit={handleSubmit}>
            <img src={controllerData.img} alt={controllerData.name} />
                <p>Title: {controllerData.name}</p>
                <p>Title: {controllerData.description}</p>
                <p>Title: {controllerData.releaseDate}</p>
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
