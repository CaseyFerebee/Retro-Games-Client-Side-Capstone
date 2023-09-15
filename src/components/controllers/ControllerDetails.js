import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleController } from "../../managers/ControllerManager";


export const ControllerDetails = () => {
    const [controller, setController] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getSingleController(id).then(setController);
    }, [id]);


    return (
        <section className="controllers">
            <img src={controller.img} alt={controller.name} />
            <h3 className="controller__name">{controller.name}</h3>
            <div className="controller__releaseDate">{controller.releaseDate}</div>
            <div className="controller__description">{controller.description}</div>
        </section>
    );
};
