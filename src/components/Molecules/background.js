import React from "react";
import bluePlanet from "../../assets/background/bluePlanet.png"
import purplePlanet from "../../assets/background/purplePlanet.png"
import redPlanet from "../../assets/background/redPlanet.png"
import meteor1 from "../../assets/background/meteor1.png"
import meteor2 from "../../assets/background/meteor2.png"
import meteor3 from "../../assets/background/meteor3.png"
import Planet from "../Atoms/SpaceUnits/Planet";
import Meteor from "../Atoms/SpaceUnits/Meteor";
import Stars from "../Atoms/SpaceUnits/Stars";

const Background = () => {
    return (
        <div id="scene">
            <Planet
                x="70vw"
                y="15vh"
                src= {bluePlanet}
                alt="Blue_Planet"
                duration="3s"
                vertical="20"
                size="150"
                fixed={true}
            />
            <Planet
                x="10vw"
                y="50vh"
                src= {redPlanet}
                alt="Red_Planet"
                duration="2.5s"
                vertical="15"
                size="25"
                fixed={true}
            />
            <Planet
                x="-30px"
                y="85vh"
                size="100"
                src= {purplePlanet}
                alt="Purple_Planet"
                duration="10s"
                onTop = {true}
            />
            <Meteor
                x="-10px"
                y="10vh"
                size="150"
                src= {meteor1}
                alt="Meteor1"
            />
            <Meteor
                x="40vw"
                y="60vh"
                size="200"
                src= {meteor2}
                alt="Meteor2"
            />
            <Meteor
                x="5vw"
                y="65vh"
                size="100"
                src= {meteor3}
                alt="Meteor3"
            />
            <Stars />
        </div>

    );
};

export default Background;
