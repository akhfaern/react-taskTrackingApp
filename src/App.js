import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./components/Todo";
import { createContext, useState } from "react";

export const AppContext = createContext(null);

function App() {
  const [users, setUsers] = useState([]);

  return (
    <AppContext.Provider value={{ users, setUsers }}>
      <div className="bg-black h-screen overflow-hidden">
        <main className="flex">
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/todo/:username" element={<Todo />} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </AppContext.Provider>
  );
}

export default App;
