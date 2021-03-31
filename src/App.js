import logo from './logo.svg';
import './App.css';

function App() {
  const name = "박가영"
  const age = 21
  const height = 169
  const major = "건축사회환경공학부"
  return (
    <div className="App">
      <h1>제이름은 {name}입니다.</h1>
      <h2>제 나이는 {age} 입니다.</h2>
      <h3>제 키는 {height}</h3>
      <a>나이는 {age > 30 ? "30대" : "20대"}</a>
      <div>저는 {major}을 전공하고 있고 잘부탁 드립니다!</div>
    </div>
  );
}

export default App;
