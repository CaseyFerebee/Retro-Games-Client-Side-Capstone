import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteControllerCollectionById, getControllerCollectionById } from "../../../managers/ControllerCollectionManager";


export const ControllerCollectionDetails = () => {
    const [collectionController, setCollectionController] = useState([]);
    const { collectionId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getControllerCollectionById(collectionId).then(setCollectionController);
    }, [collectionId]);

    const handleDelete = () => {
        deleteControllerCollectionById(collectionId)
            .then(() => {
                navigate(`/controllercollections`);
            })
    }

    return (
        <div>
            <section className="game">
                <img src={collectionController?.controller?.img} alt={collectionController?.controller?.name} />
                <h3 className="game__title">{collectionController?.controller?.name}</h3>
                <div className="game__skill-level">{collectionController?.controller?.description}</div>
                <div className="game__players-needed">{collectionController?.controller?.releaseDate}</div>
                <div className="game__type">{collectionController?.condition?.label}</div>
            </section>
            <button onClick={() => { navigate(`/controllercollections/${collectionId}/edit`); }}>Edit</button>
            <button onClick={() => {handleDelete()}}>Delete</button>
        </div>
    );
};
