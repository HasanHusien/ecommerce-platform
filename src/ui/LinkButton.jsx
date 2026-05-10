import {
  Link,
  useNavigate,
} from "react-router-dom";

function LinkButton({ children }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="px-3 py-5 text-sm text-blue-500 hover:text-blue-600 hover:underline"
    >
      {children}
    </button>
  );
}

export default LinkButton;
