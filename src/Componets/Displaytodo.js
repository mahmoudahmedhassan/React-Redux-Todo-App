// import { React, useState } from "react";
// import { connect } from "react-redux";
//  import Button from "@material-ui/core/Button";

// function DisableItems({todos}) {
//    const [sort, setSort] = useState("active");
//   console.log(sort);

//   return (
//     <div>
//       <div className="buts">
//         <Button variant="contained" color="default" onClick={()=>setSort("active")}>
//           active
//         </Button>

//         <Button variant="contained" color="default"  onClick={()=>setSort("complete")}>
//           complete
//         </Button>
//         <Button variant="contained" color="default"  onClick={()=>setSort("all")}>
//           all
//         </Button>
//       </div>

//     </div>
//   );
// }
// const mapStateToProps = (state) => {
//     return {
//       todos: state.todoList,
//     };
//   };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // addItem: (id, text, complete) => dispatch(addItem(id, text, complete)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(DisableItems);
