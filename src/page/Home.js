import React from 'react';
import useApiService from '../service/useApiService';
import Profile from '../components/cart/Profile';
import Loader from '../components/common/Loder';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { DarkModeContext } from '../components/common/DarkModeContext';

const Home = () => {
  const { userData, loading, error } = useApiService();

  if (loading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <DarkModeContext.Consumer>
      {({ darkMode }) => (
        <div className={`flex flex-col min-h-screen ${darkMode ? 'bg-neutral-900 text-white' : 'bg-white text-black'}`}>
          <Header />
          <main className="flex-grow p-4">
            <Profile userData={userData} darkMode={darkMode} />
          </main>
          <Footer />
        </div>
      )}
    </DarkModeContext.Consumer>
  );
};

export default Home;
