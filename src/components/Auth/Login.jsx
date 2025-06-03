import HandleLogin from "./http";
import { useDispatch } from 'react-redux';

function Login({ show, Hide }) {

  const dispatch = useDispatch();

  const handleOverlayClick = (e) => {

    if (e.target.id === "loginModal") {
      Hide();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const { access_token, user_id } = await HandleLogin(data);

      // You may extract user_id from token (if it's a JWT) or just use the username
      dispatch({
        type: 'Login',
        payload: {
          user_id : user_id,
          access_token: access_token
        }
      });

      console.log("Logged in with user:", user_id);
      e.target.reset();
      Hide();
    } catch (err) {
      console.error("Login failed:", err.message);
      alert(err.message);
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      id="loginModal"
      className={`fixed inset-0  overflow-y-auto h-full w-full z-50 transition-opacity duration-300 ${show ? 'bg-opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
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
              <span className="text-2xl cursor-pointer">&times;</span>
            </button>
          </div>

          {/* Login Form */}
          <form
            id="loginForm"
            className="mx-12"
            onSubmit={handleSubmit}  // Added onSubmit handler
          >
            <div className="mb-4">
              <label htmlFor="username" className="block text-white text-sm font-bold mb-2 text-left">
                Username:
              </label>
              <input
                type="text"
                id="usernameLogin"
                name="username"


                required
                className="shadow appearance-none border rounded w-full py-3 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-white text-sm font-bold mb-2 text-left">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"


                required
                className="shadow appearance-none border rounded w-full py-3 px-3 bg-white  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full cursor-pointer"
              >
                Login
              </button>
            </div>

            <div className="mt-4">
              <a href="/user/resetpassword" className="text-blue-500 hover:underline cursor-pointer">
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