import { useState } from "react";
import NewTaskDialog from "./NewTaskDialog";

const Topbar = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  return (
    <div className="bg-black flex flex-wrap justify-end h-12 content-center p-2">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-sm"
        onClick={handleDialogOpen}
      >
        Add New Task
      </button>
      <NewTaskDialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
    </div>
  );
};

export default Topbar;
