import React, { useContext } from 'react';
import { FaUserCircle, FaLocationArrow, FaLock, FaBirthdayCake, FaCalendarAlt, FaPhoneAlt, FaMobileAlt, FaIdCard, FaGlobeAmericas } from 'react-icons/fa';
import { DarkModeContext } from '../common/DarkModeContext'; 

const UserProfileCard = ({ userData }) => {
  const { darkMode } = useContext(DarkModeContext);
  const { gender, name, location, email, login, dob, registered, phone, cell, id, picture, nat } = userData;

  const profileItems = [
    { icon: FaLocationArrow, label: 'Location', value: `${location.street.number} ${location.street.name}, ${location.city}, ${location.state}, ${location.country}, ${location.postcode}` },
    { icon: FaLock, label: 'Login', value: login.username },
    { icon: FaBirthdayCake, label: 'Date of Birth', value: dob.date.slice(0, 10) },
    { icon: FaCalendarAlt, label: 'Registration Date', value: registered.date.slice(0, 10) },
    { icon: FaPhoneAlt, label: 'Phone', value: phone },
    { icon: FaMobileAlt, label: 'Cell', value: cell },
    { icon: FaIdCard, label: 'ID', value: id.value },
    { icon: FaGlobeAmericas, label: 'Nationality', value: nat },
  ];

  return (
    <div className={`bg-${darkMode ? 'black' : 'white'} relative  p-4 shadow-2xl rounded-md overflow-hidden flex flex-col md:flex-row w-full max-w-4xl mx-auto profile-card`}>
      <div className={`w-full md:w-2/5 h-fit bg-${darkMode ? 'gray-800' : 'gray-200'} rounded-md relative overflow-hidden shadow-lg`}>
        <img
          src={picture.large}
          alt={`${name.first} ${name.last}`}
          className={`w-full h-auto transform  scale-110 transition-transform duration-500 ease-in-out hover:scale-100`}
        />
       <div className={`profile-info text-${darkMode ? 'white' : 'black'}`}>
          <h2 className="text-3xl font-bold flex items-center">
            <FaUserCircle className="text-4xl" />
            <span>{`${name.title} ${name.first} ${name.last}`}</span>
          </h2>
          <p className={`text-lg font-medium flex items-center space-x-2 text-${darkMode ? 'gray-300' : 'gray-500'}`}>
            <span className='text-white'>{gender}</span>
            <span className="text-sm text-white">{`(${nat})`}</span>
          </p>
        </div>
      </div>
      <div className="w-full md:w-3/5 p-2 mx-auto flex justify-center flex-col items-center">
        <div className="flex items-center justify-center  space-x-4 mb-6">
          <img
            src={picture.thumbnail}
            alt={`${name.first} ${name.last}`}
            className="rounded-full w-16 h-16 object-cover shadow-lg"
          />
          <div>
            <h3 className={`text-xl cursor-pointer font-bold transition-transform duration-500 ease-in-out hover:translate-x-2 text-${darkMode ? 'gray-300' : 'violet-700'}`}>{`${name.first} ${name.last}`}</h3>
            <p className={`text-${darkMode ? 'gray-400' : 'gray-500'} flex items-center space-x-2 transition-transform duration-500 ease-in-out hover:translate-x-2`}>
              <FaLocationArrow className=" " />
              <span>{email}</span>
            </p>
          </div>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 w-fit mx-auto lg:pl-14 `}>
          {profileItems.map((item, index) => (
            <ProfileItem key={index} icon={item.icon} label={item.label} value={item.value} darkMode={darkMode} />
          ))}
        </div>
        <div className="absolute top-4 right-4 bg-gray-200 rounded-full p-2 cursor-pointer hover:bg-gray-300 transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const ProfileItem = ({ icon: Icon, label, value, darkMode }) => (
  <div className={`profile-item-container p-2`}>
    <h4 className={`profile-item-title cursor-pointer text-sm font-medium flex items-center space-x-2 transition-transform duration-300 ease-in-out transform hover:translate-x-2 font-sans text-${darkMode ? 'gray-400' : 'violet-700'}`}>
      <Icon className={`profile-item-icon text-${darkMode ? 'gray-600' : 'violet-600'}`} />
      <span>{label}</span>
    </h4>
    <p className={`profile-item-value pl-5 text-xs cursor-pointer font-medium transition-transform duration-300 ease-in-out transform hover:translate-x-2 font-sans text-${darkMode ? 'gray-500' : 'gray-400'}`}>{value}</p>
  </div>
);

export default UserProfileCard;
