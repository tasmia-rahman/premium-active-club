import './App.css';
import Club from './components/Club/Club';
import Header from './components/Header/Header';
import QnA from './components/QnA/QnA';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Club></Club>
      <QnA></QnA>
    </div>
  );
}

export default App;
