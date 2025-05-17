import ScambetLogo from '../../assets/ScambetLogo1.png'

export default function NavBar({ onLoginClick, onRegistrationClick }) {
  return (
<nav className="bg-gradient-to-r from-gray-800 to-dark-gray-800 border-b border-lime-300 shadow-lg shadow-green-500/20">
  <div className="relative flex h-12 items-center justify-between px-4">
    
    {/* Logo and Navigation Links */}
    <div className="flex items-center space-x-6">
      <a href="/">
        <img
          src={ScambetLogo}
          alt="Scambet logo"
          className="h-12" // Adjust size as needed
        />
      </a>
      <div id="NavPages" className="flex items-center space-x-6 text-white text-xl pt-1">
        <a href="/casino">Casino</a>
        <a href="/Live-Betting">Live Betting</a>
        <a href="/Live-Betting">Poker</a>
        
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

      <button
        type="button"
        id="userAuthenticatedBalance"
        className="hidden bg-transparent hover:bg-transparent text-white py-2 px-4 rounded transition duration-300"
      >
        <p>0.00</p>
      </button>

<button
  onClick={onRegistrationClick}
  type="button"
  id="registerBtn"
  className="text-sm px-4 py-2 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition duration-200"
>
  Register
</button>

<button
  onClick={onLoginClick}
  type="button"
  id="loginBtn"
  className="text-sm px-4 py-2 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition duration-200"
>
  Login
</button>

<button
  type="button"
  id="logoutBtn"
  className="hidden text-sm px-4 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition duration-200"
>
  Logout
</button>
    </div>
  </div>
</nav>

  );
}
