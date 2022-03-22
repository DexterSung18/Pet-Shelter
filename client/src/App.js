import './App.css';
import { Router } from "@reach/router";
import PetForm from './components/PetForm';
import DisplayAll from './components/DisplayAll';
import DisplayOne from './components/DisplayOne';
import UpdatePet from './components/UpdatePet';
import VetForm from './components/VetForm';
import DisplayOneVet from './components/DisplayOneVet';
import DisplayDog from './components/DisplayDog';
import DisplayGoldenRetriever from './components/DisplayGoldenRetriever';
import DisplayCat from './components/DisplayCat';
import DisplayGermanShepherd from './components/DisplayGermanShepherd';
import DisplayAkita from './components/DisplayAkita';
import DisplayPug from './components/DisplayPug';
import DisplayBoxer from './components/DisplayBoxer';
import DisplayRagdoll from './components/DisplayRagdoll';
import DisplayAmericanShorthair from './components/DisplayAmericanShorthair';
import DisplayAmericanWirehair from './components/DisplayAmericanWirehair';
import DisplayPersian from './components/DisplayPersian';
import DisplaySiamese from './components/DisplaySiamese';

function App() {
  return (
    <div className="App">
      <Router>
        <DisplaySiamese path="/pet/catbreeds/Siamese" />
        <DisplayPersian path="/pet/catbreeds/Persian" />
        <DisplayAmericanWirehair path="/pet/catbreeds/Americanwirehair" />
        <DisplayAmericanShorthair path="/pet/catbreeds/Americanshorthair" />
        <DisplayRagdoll path="/pet/catbreeds/Ragdoll" />
        <DisplayBoxer path="/pet/dogbreeds/Boxer" />
        <DisplayPug path="/pet/dogbreeds/Pug" />
        <DisplayAkita path="/pet/dogbreeds/Akita" />
        <DisplayGermanShepherd path="/pet/dogbreeds/GermanShepherd" />
        <DisplayCat path="/pet/catbreeds" />
        <DisplayGoldenRetriever path="/pet/dogbreeds/GoldenRetriever" />
        <DisplayDog path="/pet/dogbreeds" />
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
