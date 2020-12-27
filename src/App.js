import React, { useState,  useEffect} from 'react'
import {UserGrid} from './components/UserGrid'
import {fetchUsers} from './AppClient'
import { testData } from './test';


export const App = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
   console.log(users.length)
   try{
    fetchUsers().then((response)=> {
     setUsers(response.data)
    })
  } catch(e){console.log(e)}
  }, [])

  if(!users.length){
    return <div>loading</div>
  }


  return (
    <div>
      PMA User Browser
      <UserGrid users={users}/>
    </div>
  );
};
