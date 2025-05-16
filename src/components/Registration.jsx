export default function Registration({show, onClose}) {
  const handleOverlayClick = (e) => {
    // Close only if the click is on the overlay itself
    if (e.target.id === "registrationModal") {
      onClose();
    }
  };
  return (
    <div onClick={handleOverlayClick}
      id="registrationModal"
            className={`fixed inset-0 bg-slate-900 bg-opacity-70 overflow-y-auto h-full w-full z-50 transition-opacity duration-300 ${
  show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
}`}
    >
      <div className="relative top-20 mx-auto p-5 border w-11/12 md:max-w-md shadow-lg rounded-md bg-gray-800">
        {/* Modal Content */}
        <div className="mt-3 text-center">
          {/* Header */}
          <div className="flex justify-between items-center pb-3">
            <h3 className="text-xl font-bold text-white">Register</h3>
            <button onClick={onClose} id="regFormCloseBtn" className="text-gray-400 hover:text-gray-600">
              <span className="text-2xl">&times;</span>
            </button>
          </div>

          {/* Registration Form */}
          <form id="registrationForm" className="mt-4">
            <div className="mb-4">
              <label htmlFor="registrationUsername" className="block text-white text-sm font-bold mb-2 text-left">
                Username:
              </label>
              <input
                type="text"
                id="registrationUsername"
                name="registrationUsername"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="firstName" className="block text-white text-sm font-bold mb-2 text-left">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="first_name"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="lastName" className="block text-white text-sm font-bold mb-2 text-left">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-white text-sm font-bold mb-2 text-left">
                Phone Number:
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phone_number"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-white text-sm font-bold mb-2 text-left">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="registrationPassword" className="block text-white text-sm font-bold mb-2 text-left">
                Password:
              </label>
              <input
                type="password"
                id="registrationPassword"
                name="registrationPassword"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
