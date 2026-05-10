import Header from './Header';
import CartOverview from './../features/cart/CartOverview.jsx';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader.jsx';

function AppLayout() {
  // a new way instead state for get if it's loading or not
  const navigation = useNavigation();
  const loader = navigation.state === 'loading';
  
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {loader && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
