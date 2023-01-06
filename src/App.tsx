import React from 'react';
// import { Switch } from 'react-router-dom';
import { BrowserRouter, Routes, Route, useSearchParams, useParams } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Pages/Main/Main';
// import { Products } from './components/Pages/Products/Products';
// import { Error } from './components/Pages/Error/Error';
import './styles.css';

export const App: React.FC = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);
  // const params = useParams();
  // console.log(params);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main />
        {/* <Routes>
          <Route path="/" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Routes> */}
        {/* <Products /> */}
        {/* <Main productList={productList} sortSelect={sortSelect} onChangeSort={sortProduct} /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};
