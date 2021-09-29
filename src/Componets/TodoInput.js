import { React, useState, } from "react";
import {addItem} from '../redux/todoaction';
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import { CgAddR } from "react-icons/cg";
import { motion } from "framer-motion";

// His library generates a random ids
import { v4 as uuidv4 } from 'uuid';


function TodoInput({addItem}) {
 
  const [value, setValue] = useState("");

  const onhandlerChenge =(e)=>{
    setValue(e.target.value)
  }

  const handelSubmit =(e)=>{
    e.preventDefault();

     if(value === ''){
         alert("Input is Empty") 
     }else{
        addItem({id:uuidv4(), text:value,complete:false});
       setValue('');
     }
  }

  return (
    <div style={{marginTop:'50px'}}>

      <form noValidate autoComplete="off" className="form" onSubmit={handelSubmit}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          className="form_textfield"
          onChange={onhandlerChenge}
          value={value}
           />
        <motion.button className="form_button"
           whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
         >
          <CgAddR className ='form_icon'/>
         </motion.button>

      </form>
      <h1>nlnsfdnjfnsk</h1>
    </div>
  );
}

 

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (id,text,complete) => dispatch(addItem(id,text,complete)),
  };
};

export default connect(null, mapDispatchToProps)(TodoInput);
