import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { navigate } from "@reach/router";
import { Link } from "@reach/router";

const DisplayOne = (props) => {
    const {id} = props
    const [petData, setPetData] = useState({})
    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/pet/${id}`)
        .then((response) => {
            console.log(response);
            setPetData(response.data);
        })
        .catch((err) => console.log(err.response));
    }, [])
    const handleDeletePet = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/pet/${idFromBelow}`)
        .then((response) => {
            console.log(response);
            navigate("/");
        })
        .catch((err) => {
            console.log(err.response);
        })
    };
    return (
        <div>
        <div className="top-bar">
            <h1 className="pet-shelter-form">Pet Shelter</h1>
            <Link className="back-to-home-link" to={"/"}>back to home</Link>
            </div>
            <div className="details-adopt-bar">
            <p className="pet-need-home">Details about: {petData.name}</p>
            <button onClick={() => handleDeletePet(petData._id)} className="adopt-button">Adopt {petData.name}</button>
            </div>
            <div className="details-container">
                <p><span className="bold">Type:</span> <span className="pet-details-type">{petData.type}</span> </p>
                <p><span className="bold">Breed:</span> <span className="pet-breed">{petData.breed}</span> </p>
                <p><span className="bold">Description:</span> <span className="description-name">{petData.description}</span></p>
                <p><span className="bold">Age:</span> <span className="pet-details-age">{petData.age}</span></p>
                <p><span className="bold">Weight:</span> <span className="pet-weight">{petData.weight} lbs</span></p>
                <p><span className="bold">Vet Name:</span> <span className="pet-vet-name">{petData.vetname}</span> </p>
            </div>
        </div>
    )
}

export default DisplayOne;