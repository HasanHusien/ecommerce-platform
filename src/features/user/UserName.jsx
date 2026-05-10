import { useSelector } from "react-redux";
// import { useUser } from "../../contexts/UserContext";

function UserName() {
  const userName = useSelector(
    (state) => state.user.userName,
  );

  if (!userName) return null;

  return (
    <div className="hidden uppercase md:block">
      {userName}
    </div>
  );
}

export default UserName;
