// import { useState } from 'react';
import { useLocation } from 'react-router-dom';



function ProfilePage(props) {
  const location = useLocation();
  const profile = location.state.profile;

  const profilePedals = props.pedals.filter((pedal) => pedal.owner === profile._id)

  return (
    <div>
      <h1>{profile.name}</h1>
      {profilePedals.map(pedal => (
        <div key={pedal._id}>
          <h3>{pedal.name}</h3>
          <p>{pedal.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProfilePage;