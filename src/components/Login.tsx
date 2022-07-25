import React, { useContext } from 'react'
import { Button } from 'antd'
import { UserContext } from '../UserContext'

type Props = {}

const Login: React.FC<Props> = (props) => {
    
    const user = useContext(UserContext)

    return (
    <>
    <span>{user?.loggedIn}</span>
    <Button onClick={()=> user?.setLoggedIn("dddd")}>Hello</Button>
    </>
  
  )
}

export default Login