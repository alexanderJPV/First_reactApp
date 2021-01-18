import React, {Component} from 'react';
import './App.css';
import tasks from './samples/tasks.json';
import Tasks from './components/Tasks';
class App extends Component{
  state = {
    tasks: tasks
  }
  render() {
    return <div>
            <Tasks tasks={this.state.tasks}></Tasks>
          </div>
  }
}
/* function Helloworld(props){
  console.log(props);
  return (
    <div id="hello">
      <h3>{props.subTitle}</h3>
      Hello world: {props.myText}
    </div>
  )
} */
/* class Helloworld extends React.Component{
  state = {
    show: true
  }
  toggleShow = () => {
    this.setState({show: !this.state.show})
  }
  render() {
    if(this.state.show){
        const element = <div id="hello">
                          <h3>{this.props.subTitle}</h3>
                          Hello world: {this.props.myText}
                          <button onClick={this.toggleShow}>Change state</button>
                        </div>
      return element;
    }else{
      return(
        <h3>
          There are not elements
          <button onClick={this.toggleShow}>Change state</button>
        </h3>
      )
    }
  }
}
function Hora(){
  const element = (
    <div>
      <h1>time!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  return element
} */
// const App = () => <div>This is my component as arroy function: <Helloworld></Helloworld></div>
// class App extends React.Component{
//   render(){
//     return <div>This is my component as class <Helloworld></Helloworld></div>
//   }
// }
/*function App() {
  return (
    <div>This is my component as function:
      <Helloworld myText="first props" subTitle="head"></Helloworld>
      <Helloworld myText="second props" subTitle="body"></Helloworld>
      <Helloworld myText="three props" subTitle="footer"></Helloworld>
      <Hora></Hora>
    </div>
  );
} */

export default App;
