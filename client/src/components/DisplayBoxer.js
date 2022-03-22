import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import "../App.css";

const DisplayBoxer = () => {
    const [responseData, setResponseData] = useState([]);
    useEffect(() => {
        axios.
        get(`https://api.thedogapi.com/v1/breeds/55`)
        .then(response=> {
            console.log(response);
            setResponseData(response.data);
        })
        .catch((err) => console.log(err.response));
    }, []);
    return (
        <div>
        <div className="top-bar-breeds">
            <h1 className="pet-shelter-form">Pet Shelter</h1>
            <Link className="back-to-home-link" to={"/"}>back to home</Link>
            </div>
            <div className="details-adopt-bar">
            <p className="pet-need-home">Details about: {responseData.name}s</p>
            </div>
            <div className="details-container">
                <p><span className="bold">Lifespan: </span> <span className="pet-breed-lifespan">{responseData.life_span}</span> </p>
                <p><span className="bold">Weight: </span> <span className="pet-breed-weight">{responseData.weight?.imperial} lbs</span> </p>
                <p><span className="bold">Height: </span> <span className="pet-breed-height">{responseData.height?.imperial} inches</span> </p>
                <p><span className="bold">Bred for: </span> <span className="pet-breed-bred-for">{responseData.bred_for}</span> </p>
                <p><span className="bold">Breeding Group: </span> <span className="pet-breed-breeding-group">{responseData.breed_group}</span> </p>
                <p><span className="bold">Temperament:</span> <span className="pet-breed-temperament">{responseData.temperament}</span> </p>
            </div>
        </div>
    )
}

export default DisplayBoxer;