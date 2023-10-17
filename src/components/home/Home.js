import React from 'react';
import './home.css'; 

export const Home = () => {
    return (
        <div className="home-container">
            <h1 className="centered">Retro Games</h1>
            <div className="text-container">
                <div className="image-left">
                    <img className="smaller-image" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Nintendo_64_Logo.svg/1200px-Nintendo_64_Logo.svg.png" alt="Nintendo 64 Symbol" />
                </div>
                <div className="paragraph">
                    <p>The Nintendo 64, released in 1996, marked a pivotal moment in gaming history. It was Nintendo's first 64-bit console, enabling 3D graphics and more complex games. The console introduced innovations like the analog stick and trigger button on its unique controller, fostering a new era of gameplay. Notable titles such as "Super Mario 64," "The Legend of Zelda: Ocarina of Time," and "GoldenEye 007" became iconic classics, influencing the industry. Despite some challenges, like the use of cartridges limiting storage, the N64 left a lasting legacy, known for its strong multiplayer games, beloved by gamers of all generations. It played a significant role in the transition to 3D gaming and is fondly remembered as a cornerstone of gaming history.</p>
                </div>
                <div className="image-right">
                    <img className="smaller-image" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Nintendo_64_Logo.svg/1200px-Nintendo_64_Logo.svg.png" alt="Nintendo 64 Symbol" />
                </div>
            </div>
            <h2 className="centered bigger-h2">Get to Collecting</h2>
        </div>
    );
};