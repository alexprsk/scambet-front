import { SoccerBallIcon, BasketballIcon, TennisBallIcon, BaseballIcon, AmericanFootballIcon } from "../constants/svg";



export default function SideBarLeft({ sports }) {

  const ICONS = {
  Soccer: <SoccerBallIcon />,
  Basketball: <BasketballIcon />,
  Tennis: <TennisBallIcon />,
  Baseball: <BaseballIcon />,
  "American Football": <AmericanFootballIcon  />,
};

  return (
    <div className="w-52 bg-inherit text-white p-4 hidden md:block border border-gray-500 rounded">
      <div className="top-16">
        <nav>
          <ul className="space-y-2">
            {sports.map((sport, index) => (<li key={index}>
              <a href={`/prelive/${sport.sport.toLowerCase()}`} className="flex items-center p-2 hover:bg-slate-500 rounded transition">
                {ICONS[sport.sport]}<span className="p-1"></span>
                {sport.sport}
              </a>
            </li>))}
            
            
          </ul>
        </nav>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b border-gray-500 pb-2">Live Events</h2>
        
      </div>
    </div>
  );
}
