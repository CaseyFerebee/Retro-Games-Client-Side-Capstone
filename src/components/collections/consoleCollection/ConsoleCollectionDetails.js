import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getConsoleCollectionById, deleteConsoleCollectionById } from "../../../managers/ConsoleCollectionManager";
import "./ConsoleCollectionDetails.css";

export const ConsoleCollectionDetails = () => {
    const [collectionConsole, setCollectionConsole] = useState([]);
    const { collectionId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getConsoleCollectionById(collectionId).then(setCollectionConsole);
    }, [collectionId]);

    const handleDelete = () => {
        deleteConsoleCollectionById(collectionId).then(() => {
            navigate(`/consolecollections`);
        });
    };

    return (
        <div className="container">
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <img
                            src={collectionConsole?.console?.img}
                            alt={collectionConsole?.console?.name}
                            className="game-image is-large"
                        />
                        <h1 className="title is-1">{collectionConsole?.console?.name}</h1>
                        <p className="subtitle">{collectionConsole?.console?.description}</p>
                        <div className="columns">
                            <div className="column">
                                <p>
                                    <strong>Release Date:</strong> {collectionConsole?.console?.releaseDate}
                                </p>
                            </div>
                            <div className="column">
                                <p>
                                    <strong>Condition of Console:</strong> {collectionConsole?.condition?.label}
                                </p>
                            </div>
                        </div>
                        <button
                            className="button is-info is-fullwidth add-game-button"
                            onClick={() => { navigate(`/consolecollections/${collectionId}/edit`); }}
                        >
                            Edit Console in Collection
                        </button>
                        <button
                            className="button is-danger is-fullwidth add-game-button"
                            onClick={() => { handleDelete(); }}
                        >
                            Delete Console from Collection
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};
