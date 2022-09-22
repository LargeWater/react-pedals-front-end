import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom';
import styles from './Profiles.module.css';

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <>
      <h1>all profiles</h1>
      {profiles.length ? 
        <>
          {profiles.map(profile =>
            <Link to={`/${profile._id}`} className={styles.text} key={profile._id} state={{profile: profile}}>
            <div className={styles.card}>
              <img src={profile.photo} alt="" />
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>
                  {profile.name}
                </h3>
              </div>
            </div>
          </Link>
          )}
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}

export default Profiles