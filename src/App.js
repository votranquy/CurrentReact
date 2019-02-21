// import React from 'react';
// import productsData from "./vschoolProducts.js";
// import Product from "./Product";

// function App(){
//     const productComponents = productsData.map( item => <Product key={item.id} product={item} /> );
//     return(
//         <div>
//             {productComponents}
//         </div>
//     );
// }

// export default App;


//=================================================================
//
//=================================================================

// import React from "react";
// // import TodoItem from "./TodoItem.js";
// // import todosData from "./todosData.js";

// const todosData = [
//     {
//         id:1,
//         text: "Take out the trash",
//         completed:true
//     },
//     {
//         id:2,
//         text: "Go shopping",
//         completed:false
//     },
//     {
//         id:3,
//         text: "Mow lawn",
//         completed:true
//     },
//     {
//         id:4,
//         text: "Watch Hallay show",
//         completed:false
//     },
// ];

// function TodoItem(props){
//     return(
//         <div className="todo-item">
//             <input type="checkbox" checked={props.item.completed} />
//             <p> {props.item.text} </p>
//         </div>
//     );
// }

// function App(){

//     const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/> )
//     return(
//         <div className="todo-list">
//             {todoItems}
//         </div>
//     );

// }

// export default App;

//=================================================================
//
//=================================================================


import React from "react";
import HideableText from "./HideableText.js";
import AutoCompleteText from './AutoCompleteText.js';
class App extends React.Component{
    render(){
        return(
            <div className="todo-list">
                <HideableText text="Hello"/>
                <AutoCompleteText />
            </div>
        );
    }
}
export default App;