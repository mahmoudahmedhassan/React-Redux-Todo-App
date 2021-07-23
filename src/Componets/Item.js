import { React, useState } from "react";
import { deleteItem, updateItem, completeItem } from "../redux/todoaction";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { motion } from "framer-motion";

import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { BsCheckAll } from "react-icons/bs";

function Item({ todo, deleteItem, updateItem, completeItem }) {

  const [editEle, updateEditEle] = useState(false);
  const [value, updateValue] = useState("");

  const handelChange = (e) => {
    updateValue(e.target.value);
  };

  const handelEdit = () => {
    updateEditEle(!editEle);
    updateItem({ id: todo.id, text: value });
    updateValue("");
  };

  const items = (
    <>
      {editEle ? (
        <TextField
          label="Helper text"
          value={value}
          variant="outlined"
          focused
          onChange={handelChange}
        />
      ) : (
        <p> {todo.text}</p>
       )}

      <div className='item_button'>

        <Button variant="contained" color="primary" onClick={handelEdit}>
          {editEle ? <GrUpdate title="update"/> : <FaEdit title="edit"/>}
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => deleteItem(todo.id)}
        >
          <AiFillDelete title="delete"/>
        </Button>

        <Button
          variant="contained"
          color="yollwo"
          onClick={() => completeItem({ id:todo.id })}
        >
          <BsCheckAll title="completed"/>
        </Button>
        
      </div>
    </>
  );

  return (
    <div>
      <motion.div
        className="item"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}

        exit={{
          x: "-60vw",
          scale: [1, 0],
          transition: { duration: 0.5 },
          backgroundColor: "rgba(255,0,0,1)",
        }}
      >
        {items}
      </motion.div>
     </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => dispatch(deleteItem(id)),
    updateItem: ({ id, text }) => dispatch(updateItem(id, text)),
    completeItem: ({ id,complete }) => dispatch(completeItem(id,complete)),
  };
};
export default connect(null, mapDispatchToProps)(Item);
