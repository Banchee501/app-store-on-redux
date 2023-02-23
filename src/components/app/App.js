import { BrowserRouter as Router, Routes } from 'react-router-dom';

import MainPage from '../pages/mainPage/MainPage';

function App() {
  return (
    <Router>
      <div className="app">
        <main>
          <Routes>
            {/* <Route path="/" element={<MainPage/>}/> */}
            <MainPage/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
