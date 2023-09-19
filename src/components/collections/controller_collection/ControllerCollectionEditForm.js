import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllConditions } from "../../../managers/ConditionManager";
import { getControllerCollectionById, updateControllerCollection } from "../../../managers/ControllerCollectionManager";

export const ControllerCollectionUpdateForm = () => {
    const navigate = useNavigate();
    const { collectionId } = useParams()
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
        <div>
                <div key={controllerData.id}>
                    <h1>Edit Controller Collection</h1>
                    <form onSubmit={handleSubmit}>
                    <img src={controllerData?.controller?.img} alt={controllerData?.controller?.name} />
                        <p>Title: {controllerData?.controller?.name}</p>
                        <p>Title: {controllerData?.controller?.description}</p>
                        <p>Title: {controllerData?.controller?.releaseDate}</p>
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
