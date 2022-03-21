import './App.css';
import { Router } from "@reach/router";
import PetForm from './components/PetForm';
import DisplayAll from './components/DisplayAll';
import DisplayOne from './components/DisplayOne';
import UpdatePet from './components/UpdatePet';
import VetForm from './components/VetForm';
import DisplayOneVet from './components/DisplayOneVet';

function App() {
  return (
    <div className="App">
      <Router>
        <UpdatePet path="/pet/:id/edit" />
        <DisplayOne path="/pet/:id" />
        <DisplayOneVet path="/vet/:id" />
        <DisplayAll path="/" />
        <VetForm path="/vets/new" />
        <PetForm path="/pets/new" />
      </Router>
    </div>
  );
}

export default App;
