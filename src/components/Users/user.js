import React from 'react';

const User = ({ userData }) => {
  const singleUser = () => {
    return (
      <div>
        <img src={userData.photo} alt={userData.name} />
        <p>
          <strong>{userData.name}</strong>
        </p>
        <p> {userData.email}</p>
        <p> {userData.gender}</p>
        <p> {userData.age}</p>
        <p>{userData.region}</p>
      </div>
    );
  };

  const data = userData ? singleUser() : null;
  return data;
};

export default User;
