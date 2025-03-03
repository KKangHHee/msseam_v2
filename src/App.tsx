import Header from '@/components/organisms/header/Header';
import Layout from '@/styles/layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Header />} />
            <Route path='/alarm' element={<Header />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
