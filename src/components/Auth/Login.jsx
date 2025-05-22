function Login({ show, Hide }) {
  const handleOverlayClick = (e) => {
    // Close only if the click is on the overlay itself
    if (e.target.id === "loginModal") {
      Hide();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    // Get form data
    const formData = new FormData(e.target);
    const username = formData.get('loginUsername');
    const password = formData.get('loginPassword');
    
    // Here you would typically:
    // 1. Validate inputs
    // 2. Send to authentication API
    // 3. Handle response
    console.log('Login attempt:', { username, password });
    
    // For now, just close the modal
    Hide();
  };

  return (
    <div 
      onClick={handleOverlayClick}
      id="loginModal"
      className={`fixed inset-0 bg-slate-900 bg-opacity-70 overflow-y-auto h-full w-full z-50 transition-opacity duration-300 ${
        show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative top-12 ml-auto mr-5 border w-11/12 md:max-w-sm shadow-lg rounded-md bg-gray-800">
        {/* Modal Content */}
        <div className="mt-3 mx-4 text-center">
          {/* Header*/}
          <div className="flex mx-4 mb-4 justify-between items-center">
            <h3 className="text-2xl font-bold text-white">Login</h3>
            <button 
              id="loginFormCloseBtn" 
              className="text-gray-400 hover:text-gray-600"
              onClick={Hide}
            >
              <span className="text-2xl">&times;</span>
            </button>
          </div>
 
          {/* Login Form */}
          <form 
            id="loginForm" 
            className="mx-12"
            onSubmit={handleSubmit}  // Added onSubmit handler
          >
            <div className="mb-4">
              <label htmlFor="loginUsername" className="block text-white text-sm font-bold mb-2 text-left">
                Username:
              </label>
              <input
                type="text"
                id="loginUsername"
                name="loginUsername"
                required
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="loginPassword" className="block text-white text-sm font-bold mb-2 text-left">
                Password:
              </label>
              <input
                type="password"
                id="loginPassword"
                name="loginPassword"
                required
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"  // Changed from onClick to type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
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