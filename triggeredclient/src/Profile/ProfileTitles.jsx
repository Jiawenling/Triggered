import React from 'react'
import ProfileCard from './ProfileCard'

function ProfileTitles({allNovels, handleDelete}) {
    if (allNovels.length>0){
        return (
          <div className='profile-container flex flex-col gap-2'>
            <div className='ml-10 self-start text-2xl'>Your Triggers</div>
            <div id='border'></div>
            <div className='flex flex-col gap-5'>
            {allNovels.map(x=> <ProfileCard key={x.id} novel={x} handleDelete={handleDelete}/>)
          }
          </div>
          </div>
        )
      }
      return( 
        <div>You do not have any Triggers. Add some now!</div>
      )
}

export default ProfileTitles