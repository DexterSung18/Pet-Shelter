import { navigate } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";
import { Link } from "@reach/router";
import breeds from './breeds/breeds'

const UpdatePet = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [breed, setBreed] = useState("");
    const [description, setDescription] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [vetname, setVetname] = useState("");
    const [vets, setVets] = useState([]);
    const [errors, setErrors] = useState({}); 
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/vet")
        .then((response) => {
            console.log(response.data);
            setVets(response.data);
        })
        .catch((err) => console.log(err.response));
    }, []);
    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/pet/${props.id}`)
        .then((response) => {
            console.log(response);
            setName(response.data.name);
            setType(response.data.type);
            setBreed(response.data.breed);
            setDescription(response.data.description);
            setAge(response.data.age);
            setWeight(response.data.weight);
            setVetname(response.data.vetname)
        })
        .catch((err) => console.log(err.response));
    }, [])
    const handleUpdatePet = (e) => {
        e.preventDefault();
        console.log('====checking vetname======')
        console.log(vetname)
        axios
        .put(`http://localhost:8000/api/pet/${props.id}`, {
            name,
            type,
            breed,
            description,
            age,
            weight,
            vetname
        })
        .then((response) => {
            console.log(response);
            navigate("/");
        })
        .catch((err) => {
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors)
        });
    }

    return (
        <div>
            <div className="top-bar">
            <h1 className="pet-shelter-form">Pet Shelter</h1>
            <Link className="back-to-home-link" to={"/"}>back to home</Link>
            </div>
            <p className="pet-need-home">Know a pet needing a home?</p>
            <form onSubmit={(e) => handleUpdatePet(e)}>
                <div className="form-container-pet">
                    <div className="left-side-form">
                    <label htmlFor="name">Name:</label>
                    <input 
                    type="text" 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    />
                    {errors.name ? <p>{errors.name.message}</p> : null}
                    <label htmlFor="type">Type:</label>
                    <select 
                    type="text" 
                    id="type" 
                    value={type}
                    onChange={(e) => setType(e.target.value)} 
                    >
                        <option value="">-----------------------</option>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                    </select>
                    {errors.type ? <p>{errors.type.message}</p> : null}
                    <label htmlFor="breed">Pet Breed:</label>
                    <select
                    type="text" 
                    id="breed" 
                    onChange={(e) => setBreed(e.target.value)} 
                    >
                        {type ? breeds[type].map((breed, index) => <option key={index} value={breed}>{breed}</option>): ''}
                    </select>
                    <label htmlFor="description">Description:</label>
                    <textarea 
                    rows="5"
                    columns="10"
                    type="text" 
                    value={description}
                    id="description" 
                    onChange={(e) => setDescription(e.target.value)} 
                    />
                    {errors.description ? <p>{errors.description.message}</p> : null}
                    <label htmlFor="age">Age:</label>
                    <input 
                    type="text" 
                    value={age}
                    id="age" 
                    onChange={(e) => setAge(e.target.value)} 
                    />
                    {errors.age ? <p>{errors.age.message}</p> : null}
                    <label htmlFor="weight">Weight (lbs):</label>
                    <input 
                    type="text" 
                    value={weight}
                    id="weight" 
                    onChange={(e) => setWeight(e.target.value)} 
                    />
                    {errors.weight ? <p>{errors.weight.message}</p> : null}
                    <button className="add-pet-button" type="submit">Edit Pet</button>
                    </div>
                    <div className="right-side-form">
                    <label htmlFor="vetname">Vet Name:</label>
                    <select 
                    type="text" 
                    id="vetname" 
                    value={vetname}
                    onChange={(e) => setVetname(e.target.value)} 
                    >
                        {vets.map((vet) => {
                        return (
                            <option key={vet._id} value={vet._id}>{vet.name}</option>
                        )
                    })}
                    </select>
                    </div>
                </div>
            </form>
        </div>
    )   
}

export default UpdatePet;

