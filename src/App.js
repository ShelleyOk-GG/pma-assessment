import React, { useState,  useEffect} from 'react'
import {UserGrid} from './components/UserGrid'
import {fetchUsers} from './AppClient'
import { testData } from './test';

// Observations:
// - There are no pagination url params for the user's api
// - Curious of the context of this application, is this something that would be embedded in-game? if so, the method of loading thousands of user data and paginating is not very performant

export const App = () => {

  const [users, setUsers] = useState(testData)

  useEffect(() => {
   console.log(users.length)
  //  try{ console.log('loading')
  //   fetchUsers().then((response)=> {
  //    console.log(response)
  //    setUsers(response.data)
  //     console.log('done')

  //   })
  // } catch(e){console.log(e)}
  }, [])



  return (
    <div>
      PMA User Browser
      <UserGrid users={users}/>
    </div>
  );
};
