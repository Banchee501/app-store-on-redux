import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from '../pages/mainPage/MainPage';

const App = () => {
  return (
    <Router>
      <div className="app">      
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
