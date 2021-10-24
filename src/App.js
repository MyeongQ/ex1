import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

/*
  보일러플레이트 만들기 : npx create-react-app 프로젝트 명
  git 생성 : $git init
  git repository 생성 - 일반적으로 프로젝트 name과 동일하게 설정
  remote repository 등록하기 : $git remote add origin "URL"
  commit  하기 : 
    $git add .  - commit할 파일 선택  // 다시 뺄때는 $git rm --cached "파일명"
    $git commit -m "커밋 커멘션"
  repository에 등록하기 : $git push origin master

*/



export default App;
