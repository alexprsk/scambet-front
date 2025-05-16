import { useState } from "react";
import NavBar from "./NavBar";
import Registration from "./Registration";
import Login from "./Login";



export default function AuthWrapper() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegistrationModal, setShowRegistrationModal] = useState(false)

    function handleLoginClick() {
        setShowLoginModal(true);
    };

    function handleCloseLogin() {
        setShowLoginModal(false);
    };

    function handleRegistrationClick() {
        setShowRegistrationModal(true)
    }

    function handleRegistrationClose() {
        setShowRegistrationModal(false)
    }


    return (
        <>
      <NavBar onLoginClick={handleLoginClick} onRegistrationClick={handleRegistrationClick}/>
      <Login show={showLoginModal} Hide={handleCloseLogin}/>
      <Registration show={showRegistrationModal} Hide={handleRegistrationClose}/>
      
      </>
    );



}