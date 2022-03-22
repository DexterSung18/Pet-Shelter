import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { navigate } from "@reach/router";
import { Link } from "@reach/router";

const DisplayOneVet = (props) => {
    const {id} = props
    const [vetData, setVetData] = useState({})
    // const [petData, setPetData] = useState([])
    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/vet/${id}`)
        .then((response) => {
            console.log(response);
            setVetData(response.data);
        })
        .catch((err) => console.log(err.response));
    }, [])
    // useEffect(() => {
    //     axios
    //     .get(`http://localhost:8000/api/pets/${name2}`)
    //     .then((response) => {
    //         console.log(response);
    //         setPetData(response.data);
    //     })
    //     .catch((err) => console.log(err.response));
    // }, [])
const handleDeleteVet = (idFromBelow) => {
    axios.delete(`http://localhost:8000/api/vet/${idFromBelow}`)
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
            <p className="vet-need-home">Details about: {vetData.name}</p>
            <button onClick={() => handleDeleteVet(vetData._id)} className="vet-adopt-button">Delete {vetData.name}</button>
            </div>
            <div className="vet-details-container">
                <p><span className="bold">License:</span> <span className="pet-details-type">{vetData.license}</span> </p>
                <p><span className="bold">Phone:</span> <span className="pet-breed">({vetData.areacode}) {vetData.three}-{vetData.four}</span> </p>
                <p><span className="bold">Address:</span> <span className="description-name">{vetData.street}, {vetData.city}, {vetData.state} {vetData.zip}</span></p>
            </div>
        </div>
)
}

export default DisplayOneVet;

