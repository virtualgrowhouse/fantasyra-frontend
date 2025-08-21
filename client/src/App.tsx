import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FantasyRA from './pages/wiki/FantasyRA';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <Link to="/" className="text-xl font-bold">FantasyRA</Link>
            <div className="float-right space-x-4">
              <Link to="/wiki" className="hover:underline">Wiki</Link>
            </div>
          </div>
        </nav>
        
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/wiki" element={<FantasyRA />} />
            <Route path="/" element={
              <div className="text-center py-20">
                <h1 className="text-4xl font-bold mb-6">Welcome to FantasyRA</h1>
                <Link 
                  to="/wiki" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
                >
                  Visit Wiki
                </Link>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
