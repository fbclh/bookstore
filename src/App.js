import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import Categories from './pages/Categories';
import store from './redux/configureStore';
import './styles/App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="about" element={<Categories />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
