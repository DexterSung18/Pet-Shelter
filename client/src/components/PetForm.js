import { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import "../App.css";
import { Link } from "@reach/router";
import breeds from './breeds/breeds'

const PetForm = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [breed, setBreed] = useState("");
    const [description, setDescription] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [vetname, setVetname] = useState("");
    const [errors, setErrors] = useState({});
    const [vets, setVets] = useState([]);
    const addVetToPet = (id) => {
        console.log(id);
        setVetname(id);
    }
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/vet")
        .then((response) => {
            console.log(response.data);
            setVets(response.data);
        })
        .catch((err) => console.log(err.response));
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pet", {
            name,
            type,
            breed,
            description,
            age,
            weight,
            vetname
        })
        .then(response => {
            console.log(response);
            navigate("/");
        })
        .catch((err) => {
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors);
        });
    };
    console.log('checking breeds')
    console.log(breeds[type])
    return (
        <div>
            <div className="top-bar">
            <h1 className="pet-shelter-form">Pet Shelter</h1>
            <Link className="back-to-home-link" to={"/"}>back to home</Link>
            </div>
            <p className="pet-need-home">Know a pet needing a home?</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-container-pet">
                    <div className="left-side-form">
                    <label htmlFor="name">Name:</label>
                    <input 
                    type="text" 
                    id="name" 
                    onChange={(e) => setName(e.target.value)} 
                    />
                    {errors.name ? <p>{errors.name.message}</p> : null}
                    <label htmlFor="type">Type:</label>
                    <select 
                    type="text" 
                    id="type"
                    className = "pet-type" 
                    onChange={(e) => setType(e.target.value)} 
                    >
                        <option value="">------</option>
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
                    id="description" 
                    rows="5"
                    columns="10"
                    onChange={(e) => setDescription(e.target.value)} 
                    />
                    {errors.description ? <p>{errors.description.message}</p> : null}
                    <label htmlFor="age">Age:</label>
                    <select
                    type="text" 
                    id="age" 
                    className = "pet-age"
                    onChange={(e) => setAge(e.target.value)} 
                    >
                        <option value="">-----------</option>
                        <option value="Baby">Baby</option>
                        <option value="Young">Young</option>
                        <option value="Adult">Adult</option>
                        <option value="Senior">Senior</option>
                    </select>
                    {errors.age ? <p>{errors.age.message}</p> : null}
                    <label htmlFor="weight">Weight (lbs):</label>
                    <input 
                    type="text" 
                    id="weight" 
                    onChange={(e) => setWeight(e.target.value)} 
                    />
                    {errors.weight ? <p>{errors.weight.message}</p> : null}
                    <button className="add-pet-button" type="submit">Submit</button>
                    </div>
                    <div className="right-side-form">
                    <label htmlFor="vetname">Vet Name:</label>
                    <select 
                    type="text" 
                    id="vetname" 
                    onChange={(e) => addVetToPet(e.target.value)} 
                    >
                        <option>--------</option>
                        {vets.map((vet) => {
                        return (
                            <option key={vet._id} value={vet._id}>{vet.name}</option>
                        )
                    })}
                    </select>
                    {errors.vetname ? <p>{errors.vetname.message}</p> : null}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PetForm;