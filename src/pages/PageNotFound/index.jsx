import React from 'react';
import { Link } from 'react-router-dom';

import './PageNotFound.css';

const PageNotFound = () => (
  <div className="NotFoundPage text-center push">
    <h1>404</h1>
    <h2>
      Oooh snap! It seems you're lost. Go back to &nbsp;
      <Link to="/">wonderland!</Link>
    </h2>
    <img src="/assets/images/404.jpg" alt="notfound" />
  </div>
);

export default PageNotFound;
