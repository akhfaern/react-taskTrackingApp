import { useContext, useEffect } from "react";
import { UserService } from "../services/UserService";
import SidebarNavItem from "./SidebarNavItem";
import { AppContext } from "../App";

const Sidebar = () => {
  const { users, setUsers } = useContext(AppContext);

  useEffect(() => {
    const service = new UserService();
    service.getList().then((data) => setUsers(data));
    return () => {
      setUsers([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll h-screen min-w-max ">
      <div className="space-y-4">
        <p className="text-white">Assignee List</p>
        {users.map((user) => (
          <SidebarNavItem user={user} key={user.username} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
