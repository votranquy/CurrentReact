import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
//===========================================================
//Clock with Class Clock
//===========================================================
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
//===================================================================
//Clock with State
//====================================================================
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


//======================================================
//Update Multiole State
//=====================================================
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

//===============================================================
//Handle Click
//===============================================================
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
//=======================================================
//Zero Method: Toggle Button using bind
//==========================================================
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
//==================================================================
//FIRST METHOD: Using public class fields syntax for Handleing Event
//==================================================================
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
//========================================================================
//SECOND METHOD: Using Arrow function for handling Event
//=========================================================================
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
//===========================================================================
//Conditional REndering
//=============================================================================
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
//===================================================================================
//=
//====================================================================================
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
//=====================================================================================
//
//=====================================================================================
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
// const listItems = numbers.map( (number) => <li>{number*2}</li>  );

// ReactDOM.render(
//     <ul>{listItems}</ul>,
//     document.getElementById('root')
// );
//============================================================
//Build by Class
//============================================================
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
//=======================================================================================
//Key for list
//=======================================================================================
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

//======================================================================================
//
//======================================================================================
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

//=========================================================================
//Form
//==========================================================================
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
//=============================================================================
//
//==============================================================================
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
//==================================================================================
//
//==================================================================================
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

//=========================================================================
//Cencius: Water boil or not
//=========================================================================
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
//Template water boil or not
//==================================================================
// const scaleNames ={
//     c: 'Celsius',
//     f: 'Farenheit'
// };
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
//==============================================================
//Thinking In React
//==============================================================
//
//==============================================================
// class ProductCategoryRow extends React.Component{
//     render(){
//         const category = this.props.category;
//         return(
//             <tr>
//                 <td colSpan="2">
//                     {category}
//                 </td>
//             </tr>
//         );
//     }
// }

// class ProductRow extends React.Component{
//     render(){
//         const product = this.props.product;
//         const name = product.stocked ?
//             product.name :
//             <span style={{color:'red'}}>
//                 {product.name}
//             </span>;
//         return(
//             <tr>
//                 <td>{name}</td>
//                 <td>{product.price}</td>
//             </tr>
//         );
//     }
// }

// class ProductTable extends React.Component{
//     render(){
//         const filterText = this.props.filterText;
//         const inStockOnly=this.props.inStockOnly;

//         const rows=[];
//         let lastCategory=null;

//         this.props.products.forEach((product) => {
//             if(product.name.indexOf(filterText) === -1){
//                 return;
//             }
//             if(inStockOnly && !product.stocked){
//                 return;
//             }
//             if(product.category !== lastCategory){
//                 rows.push(
//                     <ProductCategoryRow 
//                         category={product.category}
//                         key={product.category}
//                     />
//                 );
//             }
//             rows.push(
//                 <ProductRow 
//                     product={product}
//                     key={product.name}
//                 />
//             );
//             lastCategory = product.category;
//         });
//         return(
//             <table>
//                 <tbody>
//                     <tr>
//                         <th>Name</th>
//                         <th>Price</th>
//                     </tr>
//                 </tbody>
//                 <tbody>
//                     {rows}
//                 </tbody>
//             </table>
//         );
//     }
// }

// class SearchBar extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
//       this.handleInStockChange = this.handleInStockChange.bind(this);
//     }
    
//     handleFilterTextChange(e) {
//       this.props.onFilterTextChange(e.target.value);
//     }
    
//     handleInStockChange(e) {
//       this.props.onInStockChange(e.target.checked);
//     }
    
//     render() {
//       return (
//         <form>
//           <input
//             type="text"
//             placeholder="Search..."
//             value={this.props.filterText}
//             onChange={this.handleFilterTextChange}
//           />
//           <p>
//             <input
//               type="checkbox"
//               checked={this.props.inStockOnly}
//               onChange={this.handleInStockChange}
//             />
//             {' '}
//             Only show products in stock
//           </p>
//         </form>
//       );
//     }
//   }

// class FilterableProductTable extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             filterText: '',
//             inStockOnly: false,
//         };
//         this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
//         this.handleInStockChange = this.handleInStockChange.bind(this);
//     }

//     handleFilterTextChange(filterText){
//         this.setState({
//             filterText: filterText
//         });
//     }
//     handleInStockChange(inStockOnly){
//         this.setState({
//             inStockOnly: inStockOnly
//         });
//     }    

//     render(){
//         return(
//             <div>
//                 <SearchBar 
//                     filterText={this.state.filterText}
//                     inStockOnly={this.state.inStockOnly}
//                     onFilterTextChange={this.handleFilterTextChange}
//                     onInStockChange={this.handleInStockChange}
//                 />
//                 <ProductTable 
//                     products={this.props.products}
//                     filterText={this.state.filterText}
//                     inStockOnly={this.state.inStockOnly}
//                 />
//             </div>
//         );
//     }
// }
// const PRODUCTS =[
//     {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//     {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//     {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball 7'},
//     {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//     {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//     {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
//     {category: 'Furniture', price: '$80.99', stocked: true, name: 'Capet'},
//     {category: 'Furniture', price: '$82.99', stocked: false, name: 'Cabinet'},
//     {category: 'Furniture', price: '$85.99', stocked: true, name: 'Sofa 7'},
//     {category: 'Furniture', price: '$120.99', stocked: true, name: 'Bed'},
// ];
// ReactDOM.render(
//     <FilterableProductTable products={PRODUCTS}/>, document.getElementById('root')
// );
//https://reactjs.org/docs/thinking-in-react.html
//
//=====================================================================
//
//=====================================================================
// class ProductRow extends React.Component{
//     render(){
//         const product = this.props.product;
//         const name = product.stocked ? product.name : <span style={{color:'red'}}>{product.name}</span>;
//         return(
//             <tr>
//                 <td>{name}</td>
//                 <td>{product.price}</td>
//             </tr>
//         );
//     }
// }
// class SearchBar extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleInStockChange = this.handleInStockChange.bind(this);
//         this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
//     }
//     handleInStockChange(e){
//         this.props.onInStockChange(e.target.checked);
//     }
//     handleSearchTextChange(e){
//         this.props.onSearchTextChange(e.target.value);
//     }
//     render(){
//         return(
//             <form>
//                 <input 
//                     type="text" 
//                     placeholder="Searching......"
//                     onChange={this.handleSearchTextChange}
//                 />
//                 <p>
//                     <input 
//                         type="checkbox" 
//                         checked={this.props.inStock}
//                         onChange={this.handleInStockChange}
//                     />
//                     Only show products in stock
                   
//                 </p>
//             </form>
//         );
//     }
// }
// class ProductTable extends React.Component{
//     render(){
//         const rows = [];
//         //let lastCategory = null;
//         const inStock=this.props.inStock;
//         const searchText=this.props.searchText;
//         this.props.products.forEach((product) => {

//             if(product.name.indexOf(searchText)=== -1){ return;}
//             if(inStock && !product.stocked){return;}
//             rows.push(
//                 <ProductRow
//                     product={product}
//                     key={product.name}
//                 />
//             );
//             //lastCategory = product.category;
//         });
//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>NAME</th>
//                         <th>PRICE</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {rows}
//                 </tbody>
//             </table>
//         );
//     }
// }
// class FilterableProductTable extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             inStock:false,
//             searchText:'',
//         };
//         this.handleInStockChange = this.handleInStockChange.bind(this);
//         this.handleSearchTextChange = this.handleSearchTextChange.bind(this); 
//     }
//     handleInStockChange(inStock){
//         this.setState({
//             inStock: inStock,
//         });
//     }
//     handleSearchTextChange(searchText){
//         this.setState({
//             searchText: searchText,
//         });
//     }
//     render(){
//         return(
//             <div>
//                 <SearchBar
//                     inStock={this.state.inStock}
//                     searchText={this.state.searchText}
//                     onInStockChange={this.handleInStockChange}
//                     onSearchTextChange={this.handleSearchTextChange} 
//                 />
//                 <ProductTable 
//                     products={this.props.products}
//                     inStock={this.state.inStock}
//                     searchText={this.state.searchText}
//                 />
//             </div>
//         );
//     }
// }

// const PRODUCTS = [
//     {price: '$50',stocked: true,  name: 'Football'},
//     {price: '$49',stocked: false, name: 'Baseball'},
//     {price: '$52',stocked: true,  name: 'Tennis ball'},
//     {price: '$58',stocked: false, name: 'Ping pong ball'},
//     {price: '$54',stocked: true,  name: 'Badminton ball'},
//     {price: '$53',stocked: false, name: 'Basket ball'},
//     {price: '$56',stocked: true,  name: 'Hockey ball'},
//     {price: '$60',stocked: false, name: 'Volleyball'},
//     {price: '$58',stocked: true,  name: 'Boot'},
//     {price: '$69',stocked: false, name: 'Jacket'},
// ];
// ReactDOM.render(<FilterableProductTable products={PRODUCTS} />, document.getElementById('root'));


//==================================================================
//Employee Table
//==================================================================

// class Form extends React.Component {
//     constructor(props){
//         super(props);
//         this.initialState = {
//             name: '',
//             job: ''
//         };
//         this.state = this.initialState;
//     }

//     handleChange = event => {
//         const {name, value} = event.target;
//         this.setState({
//             [name]:value
//         });
//     }
//     submitForm = () => {
//         this.props.handleSubmit(this.state);
//         this.setState(this.initialState);
//     }

//     render(){
//         const {name,job} = this.state;
//         return(
//         <form name="formDemo" id="formDemo" >
//             <label>Name</label>
//             <input 
//                 type="text" 
//                 name="name"
//                 id="name" 
//                 value={name}
//                 onChange={this.handleChange} />
//             <label>Job</label>
//             <input 
//                 type="text" 
//                 name="job"
//                 id="job" 
//                 value={job} 
//                 onChange={this.handleChange}/>
//             <button 
//                 type="button" 
//                 value="submit" 
//                 onClick={this.submitForm} >SUBMIT</button>
//         </form>
//         );
//     }
// }
// const TableHeader = () => { 
//     return (
//         <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Job</th>
//                 <th>Delete</th>
//             </tr>
//         </thead>
//     );
// }
// const TableBody = props => {
//     const rows = props.characterData.map((row,index)=>{
//         return (
//             <tr key={index}>
//                 <td>{row.name}</td>
//                 <td>{row.job}</td>
//                 <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
//             </tr>
//         );
//     }); 
//     return <tbody>{rows}</tbody>;
// }
// class Table extends React.Component {
//     render() {
//         const { characterData, removeCharacter } = this.props;
//         return(
//             <table>
//                 <TableHeader />
//                 <TableBody  
//                     characterData={characterData}
//                     removeCharacter={removeCharacter}
//                 />
//             </table>
//         );
//     }
// }
// class App extends React.Component {
//     state = {
//         characters:[
//             {
//                 'name': 'Tamana',
//                 'job': 'Student'
//             },
//             {
//                 'name': 'Mack',
//                 'job': 'Teacher'
//             },
//             {
//                 'name': 'Jack',
//                 'job': 'Athletic'
//             },
//             {
//                 'name': 'Tenis',
//                 'job': 'Goalkeeper'
//             }
//         ]
//     };

//     removeCharacter = index => {
//         const {characters} = this.state;
//         this.setState({
//             characters: characters.filter((character,i) => {
//                 return i !== index;
//             })
//         });
//     }

//     handleSubmit = character => {
//         this.setState({characters:[...this.state.characters,character]});
//     }

//     render(){
//         const {characters}=this.state;
//         return(
//             <div className="container">
//                 <Table 
//                     characterData={characters}
//                     removeCharacter={this.removeCharacter}
//                 />
//                 <Form handleSubmit = {this.handleSubmit} />
//             </div>
//         );
//     }
// }
// ReactDOM.render(<App/>, document.getElementById('root'));
//======================================================================
//NOT WORKING
//=======================================================================
// class Form extends React.Component{
    
//     constructor(props){
//         super(props);
//         this.initialState ={
//             name:'',
//             job:'',
//         };
//         this.state = this.initialState;
//     }

//     handleChange = event => {
//         const {name,value} =event.target;
//         this.setState({
//             [name]:value
//         });
//     }

//     submitForm= () => {
//         this.props.handleSubmit(this.state);
//         this.setState(this.initialState);
//     }

//     render(){
//         return(
//             <form>
//                 <input type="text" name="name" id="job" value={name} onChange={this.handleChange}></input>
//                 <input type="text" name="name" id="job" value={job} onChange={this.handleChange}></input>
//                 <button type="button" value="submit" onClick={this.submitForm}>SUBMIT</button>
//             </form>
//         );
//     }
// }
// const TableHeader = () =>{
//     return(
//         <thead>
//             <tr>
//                 <th>NAME</th>
//                 <th>JOB</th>
//                 <th>DELETE</th>
//             </tr>
//         </thead>
//     );
// }

// class TableBody extends React.Component{
//     render(){
//         const rows=[];
//         const {characterData} = this.props;
//         characterData.forEach( (character,index) => {
//             rows.push(
//                     <tr key={index}>
//                         <td>{character.name}</td>
//                         <td>{character.job}</td>
//                         <td><button>DELETE</button></td>
//                     </tr>
//             );
//         });
//         return <tbody>{rows}</tbody>;
//     }
// }
// class Table extends React.Component {
//     render(){
//         const {characterData} = this.props;
//         return(
//             <table>
//                 <TableHeader />
//                 <TableBody 
//                     characterData={characterData}
//                 />
//             </table>
//         );
//     }
// }

// class App extends React.Component {

//     // constructor(props){
//     //     super(props);
//     // }
//     handleSubmit = character => {
//         this.setState({characters:[...this.props.characters,character]});
//     }
//     render(){
//         const {characters}=this.props;
//         return(  
//             <div className="container">
//                 <Table
//                     characterData={characters}
//                 />
//                 <Form handleSubmit = {this.handleSubmit}

//                 />
//             </div>
//         );
//     }
// }

// let CHARACTERS=[
//     {'name':'Alex','job':'student'},
//     {'name':'NewTon','job':'dentist'},
//     {'name':'Peter','job':'athletic'},
//     {'name':'Corn','job':'farmer'}
// ];
// ReactDOM.render(<App characters={CHARACTERS}/>, document.getElementById('root'));
//============================================================================
//
//============================================================================
// class TodoForm extends React.Component {

//     handleInput = e => {
//         const taskName = this.refs.taskInput.value;
//         this.props.addItem(taskName);
//         this.refs.taskInput.value ='';
//         this.refs.taskInput.focus();
//     }

//     render(){
//         return(
//             <div className="todoListMain">
//                 <div className="header">
//                     <form>
//                         <input 
//                             placeholder="Task" 
//                             ref="taskInput" />
//                         <button 
//                             type="button" 
//                             onClick={this.handleInput}>Add Task
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         );
//     }

// }

// class TodoList extends React.Component{
//     render(){
//         const {entries} = this.props;
//         const listItems = entries.map((listItem,index)=>{
//             return(
//                 <li key={index}>
//                     {listItem.text} 
//                     <button type="button" onClick={()=> this.props.removeItem(index)}>REMOVE</button>
//                 </li>
//             );
//         });
//         return <ul className="theList">{listItems}</ul>
//     }
// }

// class App extends React.Component{

//     constructor(){
//         super();
//         this.state = {
//             items: []
//         };
//     }

//     addItem = (taskName) => {
//         const newTask = {
//             text:taskName,
//             key:Date.now(),
//         };

//         if(taskName !== null && taskName !==''){
//             this.setState( state => {
//                 return{
//                     items: [...state.items, newTask]
//                 }
//             })
//         }
//     }
    
//     removeItem = key =>{
//         const {items} = this.state;
//         this.setState({
//             items: items.filter((item,i)=>{
//                 return i !== key;
//             })
//         });
//     }

//     render(){
//         return(
//             <div>
//                 <TodoForm
//                     addItem={this.addItem} 
//                 />
//                 <TodoList
//                     entries={this.state.items} 
//                     removeItem={this.removeItem}
//                 />
//             </div>
//         );
//     }
// }
// ReactDOM.render(<App/>,document.getElementById('root'));
//https://medium.com/andy-le/h%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-x%C3%A2y-d%E1%BB%B1ng-%E1%BB%A9ng-d%E1%BB%A5ng-todo-v%E1%BB%9Bi-react-4f5376e4be2c

//===============================================================================
//Accessibility
//===============================================================================

// import {Fragment} from 'react';

// function Glossary(props){
//     return(
//         <div>
//             {props.items.map(item => (
//                 <Fragment key={item.id}>
//                     <dt>{item.term}: {item.description}</dt>
//                 </Fragment>
//             ))}
//             <label for="firstname">FirstName 
//                 <span> (required) </span>
//             </label>
//             <br></br>
//             <input type="text" name="firstname" id="firstname"/>
//         </div>    
//     );
// }

// const ITEMS=[
//     {id:'1',term:'A',description:'233'},
//     {id:'2',term:'G',description:'23'},
// ];

// ReactDOM.render(<Glossary items={ITEMS}/>,document.getElementById('root'));
//=================================================================
//
//=================================================================

// const printText = props => {
//     const {textInput}=this.props;
//     return(
//         <div>
//             {textInput}
//         </div>
//     );
// }
// class CustomTextInput extends React.Component{

//     constructor(props){
//         super(props);
//         this.textInput = React.createRef();
//     }

//     render(){
//         return(
//             <div>
//                 <input 
//                     type="text"
//                     ref={this.textInput}
//                 />   
//                 <printText textInput={this.textInput} />
//             </div>   
//         );
//     }

// }

// ReactDOM.render(<CustomTextInput/>,document.getElementById('root'));

//=================================================================
//
//=================================================================


// function CustomTextInput(props){
//     return(
//         <div>
//             <input 
//                 type="text"
//                 ref={props.inputRef}
//             />   
//         </div>   
//     );
// }
// class Parent extends React.Component{
//     constructor(props){
//         super(props);
//         this.inputElement = React.createRef();
//     }
//     render(){
//         return(
//             <CustomTextInput inputRef={this.inputElement} />
//         );
//     }
// }
// // this.inputElement.current.focus();
// ReactDOM.render(<Parent/>,document.getElementById('root'));

//=================================================================
//
//=================================================================

// class OuterClickExample extends React.Component{
//     constructor(props){
//         super(props);
//         this.state ={isOpen: false};
//         this.toggleContainer = React.createRef();
//         this.onClickHandle =this.onClickHandle.bind(this);
//         this.onClickOutsideHandle = this.onClickOutsideHandle.bind(this);
//     }
//     componentDidMount(){
//         window.addEventListener('click',this.onClickOutsideHandle);
//     }
//     conponentWillUnmount(){
//         window.removeEventListener('click',this.onClickOutsideHandle);
//     }
//     onClickHandle(){
//         this.setState(currentState => ({
//             isOpen: !currentState.isOpen
//         }))
//     }
//     onClickOutsideHandle(event){
//         if(this.state.isOpen && !this.toggleContainer.current.contains(event.target)){
//             this.setState({isOpen:false});
//         }
//     }
//     render(){
//         return(
//             <div ref={this.toggleContainer}>
//                 <button onClick={this.onClickHandle}>Select an option</button>
//                 {this.state.isOpen ? (
//                     <ul>
//                         <li>1</li>
//                         <li>2</li>
//                         <li>3</li>
//                     </ul>
//                 ): null}
//                 <button>A</button>
//                 <button>B</button>
//             </div>
//         );
//     }
// }
// ReactDOM.render(<OuterClickExample/>,document.getElementById('root'));


//=================================================================
//
//=================================================================

class BlurExample extends React.Component{
    constructor(props){
        super(props);
        this.state={isOpen: false};
        this.timeOutId = null;
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onBlurHandler =this.onBlurHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
    }
    onClickHandler(){
        this.setState(currentState => ({
            isOpen: !currentState.isOpen
        }));
    }
    onBlurHandler(){
        this.timeOutId = setTimeout(()=>{
            this.setState({
                isOpen:false    
            });
        });
    }
    onFocusHandler(){
        clearTimeout(this.timeOutId);
    }
    render(){
        return(
            <div 
                onBlur={this.onBlurHandler}
                onFocus={this.onFocusHandler}
            >
                <button 
                    onClick={this.onClickHandler}
                    aria-haspopup="true"
                    aria-expanded={this.state.isOpen}
                >
                    Select an option
                </button>
                {this.state.isOpen ? (
                    <ul>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                ) :null}
                <button>A</button>
                <button>B</button>
            </div>
        );
    }
}
ReactDOM.render(<BlurExample/>,document.getElementById('root'));