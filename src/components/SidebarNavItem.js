import { UserIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarNavItem = ({ user }) => {
  const location = useLocation();
  const [classes, setClasses] = useState("");

  useEffect(() => {
    const c =
      location.pathname === `/todo/${user.username}` ? "text-white" : "";
    setClasses(c);
  }, [location, user.username]);

  return (
    <div>
      <Link
        to={`/todo/${user.username}`}
        className={`flex items-center space-x-2 hover:text-white ${classes}`}
      >
        <UserIcon className="h-5 w-5" />
        <p>{user.name}</p>
      </Link>
    </div>
  );
};

export default SidebarNavItem;
