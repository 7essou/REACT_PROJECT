import NavBar from "./NavBar";
import Accules from "./Accules";
import Artists from "./Artists";
import DetailArtist from "./DetailArtist";
import {Route,Routes} from "react-router-dom"
import Footer from "./footer";
import Profile from "./Profile";
import LoginForm from "./login";
import SignupForm from "./signup";
import ArtistNotifications from "./resartiste";
import ReservationClient from "./reservation";
import BecomeArtistForm from "./becomeArtist";
import PaymentForm from "./payement";
import AllImages from "./AllImages";
import AllReviews from "./AllReviews";

export default function App(){
   
    return<div className=""> 
    <Routes>
        <Route path="" element={<Accules/>}/ >
        <Route path="/:iduser" element={<Accules/>}/ >
        <Route path="/artists/" element={<Artists/>}/ >
        <Route path="/artists/categorie/:categ" element={<Artists/>}/ >
        <Route path="/artists/user/:iduser/categorie/:categ/page/:nbpage" element={<Artists/>}/ >
        <Route path="/artists/user/:iduser" element={<Artists/>}/ >
        <Route path="/artists/user/:iduser/page/:nbpage" element={<Artists/>}/ >
        <Route path="/artists/page/:nbpage" element={<Artists/>}/ >
        <Route path="/detailArtist/:idArtist/user/:iduser" element={<DetailArtist/>}/ >
        <Route path="/profile/:iduser" element={<Profile/>}/ >
        <Route path="/login" element={<LoginForm/>}/ >
        <Route path="/signin" element={<SignupForm/>}/ >
        <Route path="/notifications/:iduser" element={<ArtistNotifications/>}/ >
        <Route path="/reservations/:iduser" element={<ReservationClient/>}/ >
        <Route path="/FormArtiste/:iduser" element={<BecomeArtistForm/>}/ >
        <Route path="/FormArtiste/formpay/:iduser" element={<PaymentForm/>}/ >
        <Route path="/detailArtist/:idArtist/user/:iduser/AllImages" element={<AllImages/>}/>
        <Route path="/detailArtist/:idArtist/user/:iduser/AllReviews" element={<AllReviews/>}/>
    </Routes>

    </div>
}