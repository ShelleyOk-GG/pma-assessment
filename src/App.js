import React, { useState,  useEffect} from 'react'
import {UserGrid} from './components/UserGrid'
import {fetchUsers} from './AppClient'

// Observations:
// - There are no pagination url params for the user's api
// - Curious of the context of this application, is this something that would be embedded in-game? if so, the method of loading thousands of user data and paginating is not very performant

export const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    console.log('loading')
    fetchUsers().then(({data})=> {
     setUsers(data)
      console.log('done')

    })
  }, [])

  console.log(users.current)


  return (
    <div>
      PMA User Browser
      <UserGrid users={users}/>
    </div>
  );
};
