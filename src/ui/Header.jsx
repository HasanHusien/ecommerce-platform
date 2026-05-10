import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <div className="flex items-center justify-between bg-yellow-400 px-4 py-2  sm:px-6 md:font-bold">
      <Link
        to="/"
        className="uppercase tracking-widest font-semibold"
      >
        fast pizza co.
      </Link>
      <SearchOrder />
      <UserName />
    </div>
  );
}

export default Header;
