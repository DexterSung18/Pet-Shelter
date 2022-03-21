import { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import "../App.css";
import { Link } from "@reach/router";

const VetForm = () => {
    const [name, setName] = useState("");
    const [license, setLicense] = useState("");
    const [areacode, setAreacode] = useState("");
    const [three, setThree] = useState("");
    const [four, setFour] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/vet", {
            name,
            license,
            areacode,
            three,
            four,
            street,
            city,
            state,
            zip
        })
        .then(response => {
            console.log(response);
            navigate("/");
        })
        .catch((err) => {
            console.log(err.reponse.data.errors);
            setErrors(err.response.data.errors);
        });
    };

    return (
        <div>
            <div className="top-bar">
            <h1 className="pet-shelter-form">Pet Shelter</h1>
            <Link className="back-to-home-link" to={"/"}>back to home</Link>
            </div>
            <p className="pet-need-home">Add a Vet</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-container-vet">
                <div className="left-side-form">
                <p>Name:</p>
                <label htmlFor="name"></label>
                    <input 
                    type="text" 
                    id="name" 
                    onChange={(e) => setName(e.target.value)} 
                    />
                    {errors.name ? <p>{errors.name.message}</p> : null}
                <p>License:</p>
                <label htmlFor="license"></label>
                <input 
                type="text" 
                id="license" 
                onChange={(e) => setLicense(e.target.value)} 
                />
                {errors.license ? <p>{errors.license.message}</p> : null}
                <p>Phone:</p>
                <label htmlFor="areacode">(</label>
                <input 
                type="text" 
                id="areacode"
                className="area-code" 
                onChange={(e) => setAreacode(e.target.value)} 
                />
                {errors.areacode ? <p>{errors.areacode.message}</p> : null}
                <label htmlFor="three">)</label>
                <input 
                type="text" 
                id="three"
                className="phone-three" 
                onChange={(e) => setThree(e.target.value)} 
                />
                {errors.three ? <p>{errors.three.message}</p> : null}
                <label htmlFor="four">-</label>
                <input 
                type="text" 
                id="three"
                className="phone-four" 
                onChange={(e) => setFour(e.target.value)} 
                />
                {errors.four ? <p>{errors.four.message}</p> : null}
                <p>Address:</p>
                <label htmlFor="street">Street:</label>
                <input 
                type="text" 
                id="street" 
                className="address-street"
                onChange={(e) => setStreet(e.target.value)} 
                />
                {errors.street ? <p>{errors.street.message}</p> : null}
                <label htmlFor="city">City:</label>
                <input 
                type="text" 
                id="city" 
                className="address-city"
                onChange={(e) => setCity(e.target.value)} 
                />
                {errors.city ? <p>{errors.city.message}</p> : null}
                <label htmlFor="state">State:</label>
                <select 
                type="text" 
                id="state" 
                className="address-state"
                onChange={(e) => setState(e.target.value)} 
                >
                    <option value="">---------</option>
                    <option value="AL">AL</option>
                    <option value="AK">AK</option>
                    <option value="AZ">AZ</option>
                    <option value="AR">AR</option>
                    <option value="CA">CA</option>
                    <option value="CO">CO</option>
                    <option value="CT">CT</option>
                    <option value="DE">DE</option>
                    <option value="FL">FL</option>
                    <option value="GA">GA</option>
                    <option value="HI">HI</option>
                    <option value="ID">ID</option>
                    <option value="IL">IL</option>
                    <option value="IA">IA</option>
                    <option value="KS">KS</option>
                    <option value="KY">KY</option>
                    <option value="LA">LA</option>
                    <option value="ME">ME</option>
                    <option value="MD">MD</option>
                    <option value="MA">MA</option>
                    <option value="MI">MI</option>
                    <option value="MN">MN</option>
                    <option value="MS">MS</option>
                    <option value="MO">MO</option>
                    <option value="MT">MT</option>
                    <option value="NE">NE</option>
                    <option value="NV">NV</option>
                    <option value="NH">NH</option>
                    <option value="NJ">NJ</option>
                    <option value="NM">NM</option>
                    <option value="NY">NY</option>
                    <option value="NC">NC</option>
                    <option value="ND">ND</option>
                    <option value="OH">OH</option>
                    <option value="OK">OK</option>
                    <option value="OR">OR</option>
                    <option value="PA">PA</option>
                    <option value="RI">RI</option>
                    <option value="SC">SC</option>
                    <option value="SD">SD</option>
                    <option value="TN">TN</option>
                    <option value="TX">TX</option>
                    <option value="UT">UT</option>
                    <option value="VT">VT</option>
                    <option value="VA">VA</option>
                    <option value="WA">WA</option>
                    <option value="WV">WV</option>
                    <option value="WI">WI</option>
                    <option value="WY">WY</option>
                </select>
                <label htmlFor="zip">Zip:</label>
                <input 
                type="text" 
                id="zip" 
                className="address-zip"
                onChange={(e) => setZip(e.target.value)} 
                />
                {errors.zip ? <p>{errors.zip.message}</p> : null}
                <button className="add-pet-button" type="submit">Submit</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default VetForm;
