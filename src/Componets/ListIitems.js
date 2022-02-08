import { React, useState } from "react";
import Item from "../Componets/Item";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { AnimatePresence } from "framer-motion";

function ListIitems() {

  let todos = useSelector((state) => state);
  const [sort, setSort] = useState("active");
  console.log(sort);

  const buts = (
    <div className="buts">
      <Button
        className="active"
        variant="contained"
        color="default"
        onClick={() => setSort("active")}
      >
        active
      </Button>

      <Button
        variant="contained"
        color="default"
        onClick={() => setSort("complete")}
      >
        complete
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setSort("all")}
      >
        all
      </Button>
    </div>
  );

  return (
    <div className="items">
      {buts}

       <AnimatePresence>

          {/* active tap */}

        {todos.todoList.length > 0 && sort === "active"
          ? todos.todoList.map((todo) => {
              return (
                todo.complete === false && <Item key={todo.id} todo={todo} />
              );
            })
          : null}

         {/* complete tap */}

        {todos.todoList.length > 0 && sort === "complete"
          ? todos.todoList.map((todo) => {
              return (
                todo.complete === true && <Item key={todo.id} todo={todo} />
              );
            })
          : null}

          

        {/* all taps  */}

        {todos.todoList.length > 0 && sort === "all"
          ? todos.todoList.map((todo) => {
              return <Item key={todo.id} todo={todo} />;
            })
          : null}

      </AnimatePresence>
    </div>
  );
}

export default ListIitems;
