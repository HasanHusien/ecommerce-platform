import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const userName = useSelector(
    (state) => state.user.userName,
  );
  return (
    <div className="my-10 px-3 text-center text-xl font-semibold sm:my-12">
      <h1 className="mb-8 text-yellow-500">
        <span className="text-stone-700">
          The best pizza.
        </span>
        <br />
        Straight out of the oven,
        straight to you.
      </h1>
      {userName === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {userName}
        </Button>
      )}
    </div>
  );
}

export default Home;
