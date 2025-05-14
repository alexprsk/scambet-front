function Login({show, onClose}) {
  const handleOverlayClick = (e) => {
    // Close only if the click is on the overlay itself
    if (e.target.id === "loginModal") {
      onClose();
    }
  };
  return (
    <div onClick={handleOverlayClick}
      id="loginModal"
      className={`fixed ${show ? '' : 'hidden'} inset-0 bg-slate-900 bg-opacity-50 overflow-y-auto h-full w-full z-50`}
    >
      <div className="relative top-20 mx-auto p-5 border w-11/12 md:max-w-md shadow-lg rounded-md bg-white">
        {/* Modal Content */}
        <div className="mt-3 text-center">
          {/* Header */}
          <div className="flex justify-between items-center pb-3">
            <h3 className="text-xl font-bold text-gray-900">Login</h3>
            <button 
              id="loginFormCloseBtn" 
              className="text-gray-400 hover:text-gray-600"
              onClick={onClose}>
              <span className="text-2xl">&times;</span>
            </button>
          </div>

          {/* Login Form */}
          <form id="loginForm" className="mt-4">
            <div className="mb-4">
              <label htmlFor="loginUsername" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                Username:
              </label>
              <input
                type="text"
                id="loginUsername"
                name="loginUsername"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="loginPassword" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                Password:
              </label>
              <input
                type="password"
                id="loginPassword"
                name="loginPassword"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Login
              </button>
            </div>

            <div className="mt-4">
              <a href="/user/resetpassword" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
