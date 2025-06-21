import { Link } from "react-router-dom";


export default function SideBarLeft({ sports,icons }) {


  return (
    <div className="w-54 bg-gray-800 text-white pt-4  pl-2 hidden md:block rounded-xl">
      <div className="top-16">
        <nav>
          <ul className="space-y-2">
            {sports.map((sport, index) => (<li key={index}>
              <Link to={`/prelive/${sport.sport.toLowerCase()}`} className="flex items-center p-2 hover:bg-slate-500 rounded transition">
                {icons[sport.sport]}<span className="p-1"></span>
                {sport.sport}
              </Link>
            </li>))}
            
            
          </ul>
        </nav>
      </div>
    </div>
  );
}
