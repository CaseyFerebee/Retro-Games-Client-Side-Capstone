import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getConsoleCollectionById, deleteConsoleCollectionById } from "../../../managers/ConsoleCollectionManager";


export const ConsoleCollectionDetails = () => {
    const [collectionConsole, setCollectionConsole] = useState([]);
    const { collectionId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getConsoleCollectionById(collectionId).then(setCollectionConsole);
    }, [collectionId]);

    const handleDelete = () => {
        deleteConsoleCollectionById(collectionId)
            .then(() => {
                navigate(`/consolecollections`);
            })
    }

    return (
        <div>
            <section className="game">
                <img src={collectionConsole?.console?.img} alt={collectionConsole?.console?.name} />
                <h3 className="game__title">{collectionConsole?.console?.name}</h3>
                <div className="game__skill-level">{collectionConsole?.console?.description}</div>
                <div className="game__players-needed">{collectionConsole?.console?.releaseDate}</div>
                <div className="game__type">{collectionConsole?.condition?.label}</div>
            </section>
            <button onClick={() => { navigate(`/consolecollections/${collectionId}/edit`); }}>Edit</button>
            <button onClick={() => {handleDelete()}}>Delete</button>
        </div>
    );
};
