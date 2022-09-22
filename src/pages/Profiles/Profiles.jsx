import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
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
            <p key={profile._id} className={styles.prof}>{profile.name}</p>
          )}
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}

export default Profiles