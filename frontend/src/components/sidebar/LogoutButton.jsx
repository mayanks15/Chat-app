import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const [loading, logout] = useLogout();
  return (
    <div className="mt-auto">
      {loading ? (
        <span className="loading loading-spinner" />
      ) : (
        <CiLogout
          className="w-6 h-6 cursor-pointer text-white"
          onClick={() => {
            logout();
          }}
        />
      )}
    </div>
  );
};
export default LogoutButton;
