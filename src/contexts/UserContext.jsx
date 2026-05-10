import {
  createContext,
  useContext,
  useReducer,
} from "react";

const initialState = {
  userName: "mohi",
};

function reducer(state, action) {
  switch (action.type) {
    case "updateUser":
      return {
        ...state,
        userName: action.payload,
      };

    default:
      throw new Error("Unknown date");
  }
}

const userContext = createContext();

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const { userName } = state;

  return (
    <userContext.Provider
      value={{ userName, dispatch }}
    >
      {children}
    </userContext.Provider>
  );
}

function useUser() {
  const provider = useContext(
    userContext,
  );
  if (!provider)
    throw new Error(
      "Its used out of scope",
    );
  return provider;
}

export { UserProvider, useUser };
