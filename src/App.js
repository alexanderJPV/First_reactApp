import './App.css';

function Helloworld(){
  return (
    <h1 id="hello">Hello world</h1>
  )
}
function App() {
  return (
    <div>This is my component: <Helloworld></Helloworld> </div>
  );
}

export default App;
