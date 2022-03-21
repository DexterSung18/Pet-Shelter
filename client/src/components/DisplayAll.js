import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import { navigate } from "@reach/router";
import "../App.css";

const DisplayAll = () => {
    const [pets, setPets] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/pet")
        .then((response) => {
            console.log('===================')
            console.log(response.data);
            setPets(response.data);
        })
        .catch((err) => console.log(err.response));
    }, []);
    return (
        <div>
        <div className="top-bar">
            <h1 className="pet-shelter-form">Pet Shelter</h1>
            <Link className="back-to-home-link" to={"/pets/new"}>add a pet</Link>
            <Link to={"/vets/new"}>add a vet</Link>
            </div>
            <p className="pet-need-home">Please add a Vet first.</p>
            <p className="pet-need-home">These pets are looking for a good home</p>
            <table border = "2" className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Breed</th>
                        <th scope="col">Description</th>
                        <th scope="col">Age</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Actions</th>
                        <th scope="col">Vet Name</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pet) => {
                        return (
                            <tr key={pet._id}>
                                <td scope="row">{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>{pet.breed}</td>
                                <td>{pet.description}</td>
                                <td>{pet.age}</td>
                                <td>{pet.weight} lbs</td>
                                <td>
                                    <Link className="details-link" to={`/pet/${pet._id}`}>details</Link>
                                    |
                                    <Link className="edit-link" to={`/pet/${pet._id}/edit`}>edit</Link>
                                </td>
                                <td>
                                    {pet.vetname ? <Link to={`/vet/${pet.vetname._id}`}>{pet.vetname.name}</Link> : ""}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayAll;
