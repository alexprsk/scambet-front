import ScambetLogo from '../../assets/ScambetLogo.jpg'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { HandleLogout } from './http';
import refreshBalance from './Auth.api/refreshBalance';

export default function NavBar({ onLoginClick, onRegistrationClick }) {

  const authenticated = useSelector((state) => state.auth.authenticated);
  const balance = useSelector((state) => state.auth.balance);
  const dispatch = useDispatch();

  const handleLogoutClick = async () => {
    await HandleLogout();             // Delete cookies
    console.log(authenticated)    // Update Redux state
  };

  const handleRefreshClick = async () => {
    const updatedBalance = await refreshBalance();
    console.log("Updated balance from API:", updatedBalance);
    if (updatedBalance !== null) {
      dispatch({ type: "SET_BALANCE", payload: updatedBalance });
    } else {
      console.error("Failed to refresh balance");
    }
  };
  return (

    <nav className="bg-gray-900 text-emerald-400">
      <div className="relative flex h-12 items-center justify-between px-4">

        {/* Logo and Navigation Links */}
        <div className="flex items-center space-x-4">
          <Link to="/upcoming-events">
            <img
              src={ScambetLogo}
              alt="Scambet logo"
              className="h-10" // Adjust size as needed
            />
          </Link>
          <div id="NavPages" className="flex items-center space-x-6 text-white text-xl pt-1">
            <Link
              to="/upcoming-events"
              className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Casino
            </Link>

            <Link
              to="/prelive"
              className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Pre-Live
            </Link>

            <Link
              to="/upcoming-events"
              className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Live Betting
            </Link>

            <Link
              to="/upcoming-events"
              className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Poker
            </Link>


          </div>
        </div>

        {/* Right Side: Buttons and Icon */}
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="black"
            className="size-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>

          <div className={`${authenticated ? "" : "hidden"} cursor-pointer`} onClick={handleRefreshClick}>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4" />
            </svg>

          </div>
          
          <button
            type="button"
            id="userAuthenticatedBalance"
            className={`${authenticated ? "" : "hidden"} bg-transparent hover:bg-transparent text-white py-2 pr-4 rounded transition duration-300 cursor-pointer`}
          >
            <p>{Number(balance).toFixed(2)}$C</p>
          </button>



          <button
            onClick={onRegistrationClick}
            type="button"
            id="registerBtn"
            className={`${authenticated ? "hidden" : ""} text-sm px-4 py-2 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition duration-200 cursor-pointer`}
          >
            Register
          </button>

          <button
            onClick={onLoginClick}
            type="button"
            id="loginBtn"
            className={`${authenticated ? "hidden" : ""} text-sm px-4 py-2 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition duration-200 cursor-pointer`}
          >
            Login
          </button>

          <button
            onClick={handleLogoutClick}
            type="button"
            id="logoutBtn"
            className={`${authenticated ? "" : "hidden"}  text-sm px-4 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition duration-200 cursor-pointer`}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>

  );
}
