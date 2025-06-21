import { Outlet } from 'react-router-dom';
import AuthWrapper from '../components/Auth/AuthWrapper.jsx';
import SideBarLeft from '../components/SideBarLeft.jsx';
import Footer from '../components/Footer.jsx';
import { ICONS } from '../constants/svg.jsx';
import { SPORTS } from '../constants/sportslists.jsx';

function Layout() {
  return (
    <>
      <AuthWrapper />

      <div className="relative min-h-screen flex">
        <SideBarLeft sports={SPORTS} icons={ICONS} />
        <div className="flex-1 flex-col ">
          <Outlet /> 
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;