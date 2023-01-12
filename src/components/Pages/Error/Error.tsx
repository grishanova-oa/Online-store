import React from 'react';
import classes from './Error.module.css';

export const Error404 = (): JSX.Element => {
  return (
    <section className={classes.Error}>
      <p className={classes.Error__contain}>PAGE NOT FOUND (404)</p>
    </section>
  );
};
