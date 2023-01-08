import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Products } from '../Products/Products';
import { Error404 } from '../Error/Error';
import classes from './Main.module.css';

export const Main = (): JSX.Element => {
  return (
    <main className={classes.main}>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </main>
  );
};
