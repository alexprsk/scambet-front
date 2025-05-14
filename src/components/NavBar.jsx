import ScambetLogo from '../assets/ScambetLogo1.png'

export default function NavBar( {onLoginClick} ) {
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-dark-gray-800 border-b border-lime-300 shadow-lg shadow-green-500/20">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            type="button"
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>
            <svg
              className="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex shrink-0 items-center">
            <a href="/">
              <img
                src={ ScambetLogo }
                alt="Scambet logo"
                style={{ width: "60%", height : "10%"}}
              />
            </a>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">{/* Add nav links here */}</div>
          </div>
        </div>

        <div className="px-4">
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
              type="button"
              id="registerBtn"
              className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded transition duration-300"
            >
              Register
            </button>

            <button  onClick={onLoginClick}
              type="button"
              id="loginBtn"
              className="bg-emerald-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Login
            </button>

            <button
              type="button"
              id="logoutBtn"
              className="hidden bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
