export default function SideBar() {
  return (
    <div className="w-52 bg-inherit text-white p-4 hidden md:block border border-gray-500 rounded">
      <div className="top-16">
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-2 hover:bg-slate-500 rounded transition">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Football
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 hover:bg-slate-500 rounded transition">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Basketball
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 hover:bg-slate-500 rounded transition">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                  />
                </svg>
                Tennis
              </a>
            </li>
          </ul>
        </nav>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b border-gray-500 pb-2">Live Events</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center p-2 hover:bg-slate-500 rounded transition">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
              Dortmund vs Wolfsburg
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
