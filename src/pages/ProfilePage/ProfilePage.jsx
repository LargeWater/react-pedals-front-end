// import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PedalCard from '../../components/PedalCard/PedalCard';
import styles from './ProfilePage.module.css';


function ProfilePage(props) {
  const location = useLocation();
  const profile = location.state.profile;
  console.log(props)


  const profilePedals = props.pedals.filter(pedal => pedal.owner._id === profile._id)

  return (
    <div>
      <h1>{profile.name}'s Pedals</h1>
      <div className={styles.container}>
      {profilePedals.length ?
      profilePedals.map(pedal => (
        <PedalCard 
          key={pedal._id} 
          pedal={pedal}
          user={props.user}
        />
      ))
      :
      <p className={styles.p}>No pedals yet!</p>
      }
      </div>
    </div>
  );
}

export default ProfilePage;