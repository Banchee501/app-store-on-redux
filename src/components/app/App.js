import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from '../pages/MainPage';

function App() {
  return (
    <Router>
      <div className="app">
        <main>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            {/* <Route exact path="/catalog" element={<CatalogPage/>}/>
            <Route path="/catalog/:id" element={<Products/>}/>
            <Route path="/basket" element={<Basket/>}/>
            <Route exact path="/profile" element={<Profile/>}/>
            <Route path="/login/profile" element={<SignIn/>}/>
            <Route path="*" element={<Page404 />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
