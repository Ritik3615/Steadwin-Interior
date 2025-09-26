import React from 'react'
import Adminpageapp from './AdminPage/Adminpageapp'
import SubAdminApp from './SubAdmin/SubAdminApp'

function AdminApp({user}) {

  return (
      <>
      {user.role === "Admin" && <Adminpageapp user={user} />}
      {user.role === "SubAdmin" && <SubAdminApp user={user} />}
      
    </>
  )
}

export default AdminApp