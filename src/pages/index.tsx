import React from 'react';
import HomeHeader from '../components/HomeHeader';
import Map from '../components/Map';
import fetch from 'isomorphic-unfetch';

const Home = ({ data }) => {
  return (
    <>
      <HomeHeader />
      <Map data={data} />
    </>
  );
};

Home.getInitialProps = async function() {
  const res = await fetch('https://api.v2.flunearyou.org/map/markers');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    data,
  };
};

export default Home;
