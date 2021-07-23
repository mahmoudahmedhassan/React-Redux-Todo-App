import "./App.css";

// import the component
import TodoInput from "./Componets/TodoInput";
import ListIitems from "./Componets/ListIitems.js";

// import animation library framer 
import { motion } from "framer-motion";

function App() {

  return (
    <div className="App">
      
      <motion.h1
        className="todo_app"
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
        whileHover={{ scale: 1.2 }}
      >
        Todo App
      </motion.h1>

      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <TodoInput />
        <ListIitems />

      </motion.div>
    </div>
  );
}

export default App;
