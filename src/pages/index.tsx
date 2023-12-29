import type { NextPage } from 'next';
import HomePage from './home';
import { Fragment } from 'react';
import HeadMeta from '../components/Meta/Head';

const Home: NextPage = () => {
  return (
    <Fragment>
      <HeadMeta />
      <HomePage />
    </Fragment>
  );
};

export default Home;
