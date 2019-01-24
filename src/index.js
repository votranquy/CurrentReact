import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// import ShoppingList from './ShoppingList'


//====================
// The Tic Tac Toe Game
//=====================
//class Square extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         value: null,
    //     };
    // }
    // render() {
    //   return (
    //     <button 
    //         className="square" 
    //         onClick={  () => this.props.onClick()  }
    //     >
    //       { this.props.value }
    //     </button>
    //   );
    // }
//}

// function Square(props){
//   return(
//     <button className="square"  onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }
 

// class Board extends React.Component {
//     // constructor(props){
//     //   super(props);
//     //   this.state = {
//     //     squares: Array(9).fill(null),
//     //     xIsNext: true,
//     //   };
//     // }
    


//     renderSquare(i) {
//       return (
//         <Square 
//                   value={this.props.squares[i]}  
//                   onClick={ ()=>this.props.onClick(i) }
//         />
//       );
//     }
  
//     render() {
//       // const winner = calculateWinner(this.state.squares);
//       // let status;
//       // if(winner){
//       //   status = 'Winner is: '+ winner;
//       // }
//       // else{
//       //   status = 'Next player is:' + (this.state.xIsNext ? 'X' : 'O')
//       // }
//       //const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');  
//       return (
//         <div>
//           {/* <div className="status">{status}</div>  */}
//           <div className="board-row">
//             {this.renderSquare(0)}
//             {this.renderSquare(1)}
//             {this.renderSquare(2)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(3)}
//             {this.renderSquare(4)}
//             {this.renderSquare(5)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(6)}
//             {this.renderSquare(7)}
//             {this.renderSquare(8)}
//           </div>
//         </div>
//       );
//     }
//   }
  
// class Game extends React.Component {
//     constructor(props){
//       super(props);
//       this.state = {
//         history: [{
//           squares: Array(9).fill(null),
//         }],
//         xIsNext: true,
//         stepNumber: 0,
//       };
//     }
//     handleClick(i){
//       const history = this.state.history.slice(0,this.state.stepNumber +1);
//       const current = history[history.length - 1];
//       const squares = current.squares.slice();
//       //Ignoring a click if S.O won or a square had been clicked before
//       if(calculateWinner(squares) || squares[i]){
//         return;
//       }
//       squares[i] = this.state.xIsNext ? 'X' : 'O';
//       this.setState({
//         // squares: squares,
//         history: history.concat([{
//           squares: squares,
//         }]),
//         stepNumber: history.length,
//         xIsNext: !this.state.xIsNext,
//       });
//     } 

//     jumpTo(step){
//       this.setState({
//         stepNumber: step,
//         xIsNext: (step%2) === 0,
//       });
//     }
//     render() {
//       const history = this.state.history;
//       const current = history[this.state.stepNumber];
//       const winner = calculateWinner(current.squares);
//       const moves = history.map((step, move) => {
//         const desc = move ? 'Go to move #' + move : 'Goto game start' ;
//         return (
//           <li key={move}>
//             <button onClick={ ()=> this.jumpTo(move) }> {desc} </button>
//           </li>
//         );
//       });
//       let status;
//       if(winner){
//         status = 'Winner is: '+ winner;
//       }
//       else {
//         status = 'Nexplayer is:' + (this.state.xIsNext ? 'X' : 'O') ;
//       }

//       return(
//         <div className="game">
//           <div className="game-board">
//             <Board 
//               squares={current.squares}
//               onClick={(i)=>this.handleClick(i)}
//             />
//           </div>
//           <div className="game-info">
//             <div>{ status }</div>
//             <ol>{moves}</ol>
//           </div>
//         </div>
//       );
//     }
//   }
  
// ========================================
// function calculateWinner(squares){
//     const lines =[
//       [0,1,2],
//       [3,4,5],
//       [6,7,8],
//       [0,3,6],
//       [1,4,7],
//       [2,5,8],
//       [0,4,8],
//       [2,4,6],
//     ];
//     for(let i=0; i<lines.length;i++){
//       const [a,b,c] = lines[i];
//       if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
//         return squares[a];
//       }
//     }
//     return null;
//   }


//===================
// ReactDOM.render(
//     <Game />,
//     // <ShoppingList/>,
//     document.getElementById('root')
// );
 //====================
// Hello Name
 //=====================
// class HelloGuy extends Component{
//   render(){
//     return(
//        <div>Hello {this.props.name}</div>
//     );
//   }
// }   
// ReactDOM.render(< HelloGuy name="Wyatt" />,document.getElemantbyId('root')); 
//================================
// Plus/ Minus Game
// class Time extends React.Component{

//   constructor(props){
//     super(props);
//     this.state= {
//       counter: 0,
//     };
//   }

//   incrementTime(){
//     this.setState({
//       counter: this.state.counter + 1 ,
//     });
//   }

//   render(){
//     return <div>
//       <div>{this.state.counter}</div>
//       <button onClick={ 
//         () => {
//           this.setState({
//             counter: this.state.counter + 1 ,
//           })
//         } 
//       }> Pluss
//       </button>
//       <button 
//         onClick={ 
//           () => {
//             this.setState({
//               counter: this.state.counter - 1 ,
//             })
//           } 
//         }
//       > Minus
//       </button>
//     </div>;
//   }
// }
// ReactDOM.render(<Time/>,document.getElementById('root'));

//====================
//Plus/ Minus Game
//=======================
// class FancyButton extends React.Component{
//   render(){
//     return <button onClick={this.props.onClick}>
//       <i className={"fa" + this.props.icon}></i>
//       <span> {this.props.text}</span>
//      </button>;
//   }
// }
// class Time extends React.Component{
//   constructor(props){
//     super(props);
//     this.state ={
//       counter: 0,
//     }
//   }
//   render(){
//     return <div>
//       <div>
//         {this.state.counter}
//       </div>
//       <FancyButton text="Increment" icon="fa-arrow-circle-o-up" onClick={
//         ()=>{ 
//           this.setState ({counter: this.state.counter+1,})
//         }
//       }></FancyButton>
//       <FancyButton text="Minus" icon="fa-arrow-circle-o-up" onClick={
//         ()=>{ 
//           this.setState ({counter: this.state.counter-1,})
//         }
//       }></FancyButton>
//     </div>;
//   }
// }
// ReactDOM.render(<Time />,document.getElementById('root'));
//=====================
//TODO Application
//=========================================
//ticking clock example
//=========================
// function tick(){
//     const element = (
//         <div>
//             <h1>
//                 Good morning!
//             </h1>
//             <h2>
//                 It is {new Date().toLocaleTimeString()}.
//             </h2>
//         </div>
//     );
//     ReactDOM.render(element,document.getElementById('root'));
// }
// setInterval(tick,1000);  
//=========================
//Function and Component
//========================
// const name ="Funny";
// function Welcome(props){
//     return (<h1>Hello,  {props.name}</h1>);
// }
// ReactDOM.render(Welcome(name),document.getElementById('root'));
//=================
//Function & Component
//=======================
//
// class Welcome extends React.Component{
//     // constructor(props){
//     //     super(props);
//     //     this.props ={
//     //         name: 'Wyatt', 
//     //     } 
//     // }
//     render(){
//         return (<h1>Hello you,{this.props.name}</h1>);
//     }
// }
// ReactDOM.render(<Welcome name="Nodin"/>,document.getElementById('root'));
//==================
//
//=============================
// function Welcome(props){
//     return (<h1>Good Morning {props.name}</h1>);
// }
// const element = <Welcome name="Lysa" />;
// ReactDOM.render(element,document.getElementById('root'));
//=============================
//
//================================
// function Button(){
//     return(<button>Send a message</button>);
// }
// function Welcome(props){
//     return(
//         <div>
//             <h1>Hello {props.name}</h1>
//             <Button />
//         </div>
//     );
// }
// function App(){
//     return (
//         <div>
//             <Welcome name="sara" />
//             <Welcome name="Lysa"/>
//         </div>
//     );
// }
// ReactDOM.render(<App />,document.getElementById('root'));
//===============================
//Split Component
//================================
// function formatDate(date){
//     return date.toLocaleDateString();
// }
// const comment = {
//     date: new Date(),
//     text: "She is a good mentor",
//     author: {
//         name: "Bavelly",
//         avatarUrl:'https://placekitten.com/g/64/64',
//     }
// }
// function Avatar(props){
//     return(
//         <img 
//             className="Avatar" 
//             height="200px" 
//             src={props.user.avatarUrl} 
//             alt={props.user.name}
//         />
//     );
// }
// function Name(props){
//     return(
//         <div className="UserInfo-name">
//         {props.user.name}
//         </div>
//     );
// }
// function UserInfo(props){
//     return(
//         <div className="UserInfo">
//             <Avatar user={props.user} />
//             <Name user={props.user} />
//         </div>
//     );
// }
// function Text(props){
//     return(
//         <div className="Comment-text">
//             {props.text}
//         </div>
//     );
// }
// function Comment(props){
//     return(
//         <div className="Comment">
//             <div className="UserInfo">
//                 <UserInfo user={props.author}/>
//                 <Text text={props.text}/>
//                 <div className="Comment-date">
//                     {formatDate(props.date)}
//                 </div>
//             </div>
//         </div>
//     );
// }
// ReactDOM.render(<Comment date={comment.date} text={comment.text} author={comment.author} />,document.getElementById('root'));
//==============================================================
//Clock reusable
//==============================================================
// function Clock(props){
//     return(
//         <div>
//             <h1>Good night</h1>
//             <h2>It is {props.date.toLocaleTimeString()}</h2>
//         </div>
//     );
// }
// function tick(){
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.getElementById('root')
//     );
// }
// setInterval(tick,1000);
//======================
//Clock with Class Clock
//===========================================
// class Clock extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello</h1>
//                 <h2>It is {this.props.date.toLocaleTimeString()}</h2>
//             </div>
//         );
//     }
// }
// function tick(){
//     ReactDOM.render(<Clock date={new Date()}/>,document.getElementById('root'));
// }
// setInterval(tick,1000);
//===================================
//Clock with Sate
//=======================================
// class Clock extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             date: new Date()
//         };
//     }
//     componentDidMount(){
//         this.timerID = setInterval(
//             () => this.tick(), 1000
//         );
//     }
//     componentWillUnmount(){
//         clearInterval(this.timerID);
//     }
//     tick(){
//         this.setState({
//             date: new Date()
//         });
//     }

//     render(){
//         return(
//             <div>
//                 <h1>Hello</h1>
//                 <h2>It is <FormattedDate date={this.state.date}/></h2>
//             </div>
//         );
//     }
// }
// function FormattedDate(props){
//     return(<h2>It is {props.date.toLocaleTimeString()}</h2>);
// }
// function App(){
//     return(
//         <div>
//             <Clock/>
//             <Clock/>
//             <Clock/>
//         </div>
//     );

// }
// ReactDOM.render(<App/>,document.getElementById('root'));
//NOTICE: State only is accessible to any component that owns it


//==========================================
//Update Multiole State
//==============================================
// class Status extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             posts: [],
//             comments: [],
//         };
//     }
//     componentDidMount(){
//         fetPosts().then(response => {
//             this.setState({
//                 posts: response.posts
//             });
//         });
//         fetchComments().then(response => {
//             this.setState({
//                 comments: response.comments
//             });
//         });
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Hello</h1>
//                 <h2>It is {this.state.post}</h2>
//             </div>
//         );
//     }
// }
// ReactDOM.render(<Status/>,document.getElementById('root'));

//=================================
//Handle Click
//===============================
// class ActionLink extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     handleClick(e){
//         e.preventDefault();
//         console.log('The link was clicked.');
//     }
//     render(){
//         return(
//             <a href="#" onClick={handleClick}>Click</a>
//         );
//     }
// }
// ReactDOM.render( <ActionLink/>, document.getElementById('root'));
//=======================================
//Zero Method: Toggle Button using bind
//========================================
// class Toggle extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             isToggleOn: true,
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick(){
//         this.setState(state => ({isToggleOn: !state.isToggleOn}));
//     }
//     render(){
//         return(
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         );
//     }
// }
// ReactDOM.render(<Toggle/>, document.getElementById('root'));
//==================================
//FIRST METHOD: Using public class fields syntax for Handleing Event
//===================================================
// class LoggingButton extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             isOn: true,
//         };
//     }
//     handleClick =  () => {
//         this.setState(state => ({isOn: !state.isOn}));
//         //console.log('this is', this);
//     }
//     render(){
//         return(
//             <button onClick={ this.handleClick}>
//                 {this.state.isOn ? 'YES' : 'No'}
//             </button>
//         );
//     }
// }
// ReactDOM.render(<LoggingButton/>,document.getElementById('root'));
//==========================================================
//SECOND METHOD: Using Arrow function for handling Event
//==========================================================
// class LoggingButton extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             isButtonOn: true,
//         };
//     }
//     handleClick(){
//         this.setState(state=>({
//             isButtonOn: !state.isButtonOn,
//         })); 
//         //console.log('This is: ',this);
//     }
//     render(){
//         return(
//             <button onClick={(e)=>this.handleClick(e)}> 
//                 {this.state.isButtonOn ? 'Click if you want' : 'Click if you like'} 
//             </button>
//         );
//     }
// }
// ReactDOM.render(<LoggingButton />,document.getElementById('root'));
//======================================================
//Conditional REndering
//=============================================================
// function UserGreeting(props){
//     return(<h1>Welcome back</h1>);
// }
// function GuestGreeting(props){
//     return(<h1>Please sign up</h1>);
// }
// function Greeting(props){
//     const isLoggedIn = props. isLoggedIn;
//     if(isLoggedIn){
//         return <UserGreeting/>;
//     }
//     return <GuestGreeting/>;
// }
// ReactDOM.render(<Greeting isLoggedIn={true}/>,document.getElementById('root'));
//====================================================================
//
//====================================================================
// function LoginButton(props){
//     return(
//         <button onClick={props.onClick}>Login</button>
//     );
// }
// function LogoutButton(props){
//     return(
//         <button onClick={props.onClick}>Logout</button>
//     );
// }
// function Greeting(props){
//     const isLoggedIn = props.isLoggedIn;
//     if(isLoggedIn){
//         return <UserGreeting/>;
//     }
//     return <GuestGreeting/>;
// }
// function UserGreeting(){
//     return(<h4>Welcome back</h4>);
// }
// function GuestGreeting(){
//     return(<h4>Please sign up</h4>);
// }
// class LoginControl extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = {
//             isLoggedIn: false, 
//         };
//     }
//     handleLoginClick(){
//         this.setState({isLoggedIn: true});
//     }
//     handleLogoutClick(){
//         this.setState({isLoggedIn:false});
//     }
//     render(){
//         const isLoggedIn = this.state.isLoggedIn;

//         let button;
//         if(isLoggedIn){
//             button = <LogoutButton onClick = {this.handleLogoutClick}/>
//         }
//         else{
//             button= <LoginButton onClick= {this.handleLoginClick}/>
//         }

//         return(
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn}/>
//                 {button}
//             </div>
//         );
//     }
// }
// ReactDOM.render(<LoginControl />,document.getElementById('root'));
 
//======================================================================
//
//======================================================================
// function Mailbox(props){
//     const unreadMessages = props.unreadMessages;
//     return(
//         <div>
//             <h4>Good night</h4>
//             {unreadMessages.length > 0 &&
//               <h2>
//                   You have {unreadMessages.length} unread messages.
//               </h2>   
//             }
//         </div>
//     );
// }
// const messages = ['React','React: React', 'Re:Re:React'];
// ReactDOM.render(<Mailbox unreadMessages={messages}/>,document.getElementById('root'));
//https://reactjs.org/docs/conditional-rendering.html
//==========================================================
//
//==========================================================
// function WarningBanner(props){
//     if(!props.warn){
//         return null;
//     }
//     return(
//         <div className="warning">
//             Warning!
//         </div>
//     );
// }    
// class Page extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             showWarning: true,
//         };
//         this.handleToggleClick = this.handleToggleClick.bind(this);
//     }
//     handleToggleClick(){
//         this.setState( state => ({showWarning: !state.showWarning}) );
//     }
//     render(){
//         return(
//             <div>
//                 <WarningBanner warn = {this.state.showWarning}/>
//                 <button onClick = {this.handleToggleClick}>
//                     {this.state.showWarning ? 'Hide' : 'Show'}
//                 </button>
//             </div>
//         );
//     }
// }
// ReactDOM.render(<Page />,document.getElementById('root'));
//==================================================
//List and key
//=====================================================
// const numbers = [1,2,3,4,5];
// const listItems = numbers.map( (number)=><li>{number*2}</li>  );

// ReactDOM.render(
//     <ul>{listItems}</ul>,
//     document.getElementById('root')
// );
//===========================================
//Build by Class
//=========================================
// function NumberList(props){
//     const numbers=props.numbers;
//     const listItems = numbers.map( 
//         (number) =>
//         <li key={number.toString()}>
//             {number}
//         </li>);
//     return(
//         <ul>{listItems}</ul>
//     );
// }
// const numbers = [1,2,3,4,5];
// ReactDOM.render(<NumberList numbers={numbers}/>, document.getElementById('root'));

//===========================================
//Key for list
//==============================================
// function TodoList(props){
//     const todos=props.todos;
//     const todoItems = todos.map((todo) =>
//         <li key={todo}>{todo}</li>
//     );
//     return(
//         <ul>{todoItems}</ul>
//     );
// }
// const todos = ['Do home work','Go shopping','Meet friends'];
// ReactDOM.render(<TodoList todos={todos}/>, document.getElementById('root'));

//===============================
//
//======================================
// function ListItems(props){
//     return <li>{props.value}</li>;
// }
// function NumberList(props){
//     const numbers = props.numbers;
    //======
    //Method 1
    // const listItems = numbers.map( (number) =>
    //     // <li key={number.toString()}>{number}</li>
    //     <ListItems key={number.toString()} value={number} />
    // );
    // return(
    //     <ul>
    //         {listItems}
    //     </ul>
    // );
    //========
    //Method 2
//     return(
//         <ul>
//             {numbers.map((number)=>
//                 <ListItems key={number.toString()} value={number}/>    
//             )}
//         </ul>
//     );
//     //=============

// }
// const numbers = [1,2,3,4,5,6,8];
// ReactDOM.render(<NumberList numbers={numbers}/>,document.getElementById('root'));

//=======================================================
//
//=========================================
// function Blog(props){
//     const sidebar = props.posts.map(
//             (post)=>
//             <li key={post.id} >{post.title}</li>  
//     );
//     const content = props.posts.map( 
//         (post)=>
//         <div key={post.id}>
//             <h3>{post.id}</h3>
//             <h4>{post.title}</h4>
//             <p>{post.content}</p>
//         </div>
//     );
//     return(
//         <div>
//             <ul>
//                 {sidebar}
//             </ul>
//             <br></br>
//             {content}
//         </div>
//     );
// }
// const posts =[
//     {id:1,title:'First',content:'The content of First'},
//     {id:2,title:'Second',content:'The content of Second'},
//     {id:3,title:'Third',content:'The content of Third'}
// ];
// ReactDOM.render(<Blog posts={posts}/>,document.getElementById('root'));

//=====================================
//Form
//====================================
// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value.toUpperCase()});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <label>
//           Description:
//         <textarea value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// ReactDOM.render( <NameForm />,document.getElementById('root'));
//==================================================
//
//=======================================================
// class FlavorForm extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {value: 'coconut'};
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(event){
//         this.setState({value: event.target.value});
//     }
//     handleSubmit(event){
//         alert('Your favorite flavor is:' + this.state.value);
//         event.preventDefault();
//     }
//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Pick your favorite flavor:
//                     <select value={this.state.value} onChange={this.handleChange}>
//                         <option value="grapefruit">Grapefruit</option>
//                         <option value="lime">Lime</option>
//                         <option value="coconut">Coconut</option>
//                         <option value="mango">Mango</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }
// ReactDOM.render(<FlavorForm/>, document.getElementById('root'));

//=============================================
//
//===============================================
// class Reservation extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             isGoing: true,
//             numberOfGuests: 2,
//             informationAboutGuest:''
//         };
//         this.handleInputChange =this.handleInputChange.bind(this);
//         this.hanleSubmit = this.hanleSubmit.bind(this);
//     }
//     handleInputChange(event){
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;
//         this.setState({
//             [name]:value,
//         });
//     }
//     hanleSubmit(event){
//         alert('Check:' + this.state.isGoing
//                 +' The number:' +this.state.numberOfGuests
//                 +' The detail:' +this.state.informationAboutGuest
//         );
//         event.preventDefault(); 
//     }
//     render(){
//         return(
//             <form onSubmit={this.hanleSubmit}>
//                 <label>
//                     Is going:
//                     <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
//                 </label>
//                 <br/>
//                 <label>
//                     Number of Guests:
//                     <input type="number" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleInputChange}/>
//                 </label>
//                 <label>
//                     Detail:
//                     <input type="text" name="informationAboutGuest" value={this.state.informationAboutGuest} onChange={this.handleInputChange}/>
//                 </label>
//                 <input type="submit" value="SUBMIT"/>
//             </form>
//         );
//     }
// }
// ReactDOM.render(<Reservation/>, document.getElementById('root'));

//===========================================================
//Cencius: Water boil or not
//===========================================================
// function BoilingVerdict(props){
//     if(props.celsius >= 100) return <p>The water would boil.</p>
//     return <p>The water would not boil.</p>
// }
// class Calculator extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleChange =this.handleChange.bind(this);
//         this.state = {temperature: 0};
//     }
//     handleChange(event){
//         this.setState({temperature: event.target.value});
//     }
//     render(){
//         const temperature = this.state.temperature;
//         return(
//             <fieldset>
//                 <legend>Enter temperature in Censius:</legend>
//                 <input type="number" value={temperature} onChange={this.handleChange} />
//                 <BoilingVerdict celsius={parseFloat(temperature)} />
//             </fieldset>
//         );
//     }
// }
// ReactDOM.render(<Calculator/>, document.getElementById('root'));
//============================================================
//UpperCase
//=============================================================
// function UpperSentence(props){
//     return <p>{props.str}</p>;
// }
// //The name of function starts with a upper character
// class Myword extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.state ={sentence:''};
//     }
//     handleChange(e){
//         this.setState({sentence: e.target.value});
//     }
//     render(){
//         const sentence= this.state.sentence;
//         return(  
//             <fieldset>
//                 <legend>Enter some characters:</legend>
//                 <input type="text" value={sentence} onChange={this.handleChange}/>
//                 <UpperSentence str={sentence}/>
//             </fieldset>
//         );
//     }
// }
// ReactDOM.render(<Myword/>,document.getElementById('root'));

//======================================
//Template 
//==================================================================
// const scaleNames ={
//     c: 'Celsius',
//     f: 'Farenheit'
// };
// function toCelsius(fahrenheit){
//     return(fahrenheit -32)*5/9;
// }
// function toFahrenheit(celsius){
//     return (celsius*9/5)+32;
// }
// function tryConvert(temperature,scale){
//     const input = parseFloat(temperature);
//     if(Number.isNaN(input)){return '';}
//     const output = scale === 'f' ? (input-32)*5/9 : (input*9/5)+32 ;
//     const round = Math.round(output*1000) / 1000;
//     return round.toString();
// }
// function BoilingVerdict(props){
//     if(props.celsius >= 100) return <p>The water would boil.</p>
//     return <p>The water would not boil.</p>
// }
// class TemperatureInput extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//     }
//     handleChange(e){
//         this.props.onTemperatureInputChange(e.target.value);
//     }
//     render(){
//         const temperature = this.props.temperature;
//         const scale = this.props.scale;
//         return(
//             <fieldset>
//                 <legend>Enter temperature in {scaleNames[scale]}:</legend>
//                 <input value={temperature} onChange={this.handleChange}/>
//             </fieldset>
//         );
//     }
// }
// class Calculator extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//         this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//         this.state = {
//             temperature: '0',
//             scale: 'c',
//         };
//     }
//     handleCelsiusChange(temperature){
//         this.setState({
//             scale: 'c',
//             temperature
//         });
//     }
//     handleFahrenheitChange(temperature){
//         this.setState({
//             scale: 'f',
//             temperature
//         });
//     }
//     render(){
//         const scale = this.state.scale;
//         const temperature = this.state.temperature;
//         const celsius = scale === 'f' ? tryConvert(temperature,scale)  : temperature;
//         const fahrenheit = scale === 'c' ? tryConvert(temperature,scale) : temperature;
//         return(        
//             <div>
//                 <TemperatureInput 
//                     scale="c" 
//                     temperature={celsius} 
//                     onTemperatureInputChange={this.handleCelsiusChange}
//                 />
//                 <TemperatureInput 
//                     scale="f" 
//                     temperature={fahrenheit} 
//                     onTemperatureInputChange={this.handleFahrenheitChange}
//                 />
//                 <BoilingVerdict celsius={parseFloat(celsius)}/>
//             </div>
//         );
//     }
// }
// ReactDOM.render(<Calculator />,document.getElementById('root'));
//https://reactjs.org/docs/lifting-state-up.html
//The inputs stay in sync because their values are computed from the same state:
//https://reactjs.org/docs/composition-vs-inheritance.html

//==================================================================
//Composition and Inheritance
//==================================================================
// function FancyBorder(props){
//     return(
//         <div className={'FancyBorder FancyBorder-'+props.color}>
//             {props.children}
//         </div>
//     );
// }
// function WelcomeDialog(){
//     return(
//         <FancyBorder color="blue">
//         {/* children */}
//             <h1 className="Dialog-title">
//                 Welcome
//             </h1>
//             <p className="Dialog-message">
//                 Thank you.
//             </p>
//         {/* .children     */}
//         </FancyBorder>
//     );
// }
// ReactDOM.render(<WelcomeDialog/>,document.getElementById('root'));
//===========================
//Hole in component
//=================================
// function Contacts() {
//     return <div className="Contacts" />;
// } 

// function Chat() {
//     return <div className="Chat" />;
// }

// function SplitPane(props){
//     return(
//         <div className="SplitPane">
//             <div className="SplitPane-left">
//                 {props.left}
//             </div>
//             <div className="SplitPane-right">
//                 {props.right}
//             </div>
//         </div>
//     );
// }
// function App(){
//     return(
//         <SplitPane left={<Contacts/>} right={<Chat/>} />
//     );
// }
// ReactDOM.render(<App/>,document.getElementById('root'));

//================================
//================================
// 
 //==============================
 //======================================
// function FancyBorder(props){
//     return(
//         <div className={'FancyBorder FancyBorder-'+props.color}>
//             {props.children}
//         </div>
//     );
// }
//  function Dialog(props){
//      return(
//          <FancyBorder color="blue">
//             <h1 className="Dialog-title">
//                 {props.title}
//             </h1>
//             <p className="Dialog-message">
//                 {props.message}
//             </p>
//             {props.children}
//          </FancyBorder>
//      );
//  }
//  class SignUpDialog extends React.Component{
//      constructor(props){
//          super(props);
//          this.handleChange = this.handleChange.bind(this);
//          this.handleSignUp = this.handleSignUp.bind(this);
//          this.state = {login: ''};
//      }
//      render(){
//          return(
//              <Dialog title="Mars Exploration Program" message=" How should we refer to you">
//                 <input value={this.state.login} onChange={this.handleChange} />
//                 <button onClick={this.handleSignUp}>Sign Up</button>
//              </Dialog>
//          );
//      }
//      handleChange(e){
//          this.setState({login: e.target.value});
//      }
//      handleSignUp(){
//          alert(`Welcome abroad,  ${this.state.login}`);
//      }
//  }
//  ReactDOM.render(<SignUpDialog/>, document.getElementById('root'));

//===================================
// class ShoppingList extends React.Component{
//     render(){
//         return(
//             <div className="shopping-list">
//                 <h1>Shopping List for </h1>
//                 <ul>
//                     <li>Instagram</li>
//                     <li>WhatsApp</li>
//                     <li>Facebook</li>
//                 </ul>
//             </div>
//         );
//     }
// }
//========================================
//Thinking In React
//========================================

//===========================

class ProductCategoryRow extends React.Component{
    render(){
        const category = this.props.category;
        return(
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        );
    }
}

class ProductRow extends React.Component{
    render(){
        const product = this.props.product;
        const name = product.stocked ?
            product.name :
            <span style={{color:'red'}}>
                {product.name}
            </span>;
        return(
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}

class ProductTable extends React.Component{
    render(){
        const filterText = this.props.filterText;
        const inStockOnly=this.props.inStockOnly;

        const rows=[];
        let lastCategory=null;

        this.props.products.forEach((product) => {
            if(product.name.indexOf(filterText) === -1){
                return;
            }
            if(inStockOnly && !product.stocked){
                return;
            }
            if(product.category !== lastCategory){
                rows.push(
                    <ProductCategoryRow 
                        category={product.category}
                        key={product.category}/>
                );
            }
            rows.push(
                <ProductRow 
                    product={product}
                    key={product.name}
                />
            );
            lastCategory = product.category;
        });
        return(
            <table>
                <thead>
                    <td>Name</td>
                    <td>Price</td>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    
    handleFilterTextChange(e) {
      this.props.onFilterTextChange(e.target.value);
    }
    
    handleInStockChange(e) {
      this.props.onInStockChange(e.target.checked);
    }
    
    render() {
      return (
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
          />
          <p>
            <input
              type="checkbox"
              checked={this.props.inStockOnly}
              onChange={this.handleInStockChange}
            />
            {' '}
            Only show products in stock
          </p>
        </form>
      );
    }
  }

class FilterableProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false,
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(filterText){
        this.setState({
            filterText: filterText
        });
    }
    handleInStockChange(inStockOnly){
        this.setState({
            inStockOnly: inStockOnly
        });
    }    

    render(){
        return(
            <div>
                <SearchBar 
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockChange={this.handleInStockChange}
                />
                <ProductTable 
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
}
const PRODUCTS =[
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball 7'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
    {category: 'Furniture', price: '$80.99', stocked: true, name: 'Capet'},
    {category: 'Furniture', price: '$82.99', stocked: false, name: 'Cabinet'},
    {category: 'Furniture', price: '$85.99', stocked: true, name: 'Sofa 7'},
    {category: 'Furniture', price: '$120.99', stocked: true, name: 'Bed'},


];
ReactDOM.render(
    <FilterableProductTable products={PRODUCTS}/>, document.getElementById('root')
);
//https://reactjs.org/docs/thinking-in-react.html
//