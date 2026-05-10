import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "../../services/userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] =
    useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 sm:mb-7 sm:text-base">
        👋 Welcome! Please start by
        telling us your name:
      </p>

      <input
        className="input my-6 w-[300px] "
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      {username !== "" && (
        <div>
          <Button type="primary">
            start ordering
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
