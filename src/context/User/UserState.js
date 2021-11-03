import { useReducer } from 'react'
import UserContext from './UserContext'
import UserReducer from './UseReducer'
import axios from 'axios'

const UserState = (props) => {
    const initalState = {
        users: [],
        selectedUser: null
    }
    const [state, dispatch] = useReducer(UserReducer, initalState)

    const getUsers = async () => {
        const res = await axios.get("https://reqres.in/api/users")
        dispatch({
            type: 'GET_USERS',
            payload: res.data.data
        })
    }

    const getProfile = async (id) => { 
        const res = await axios.get("https://reqres.in/api/users/"+id)
        console.log(res.data.data)
        dispatch({
            type: 'GET_PROFILE',
            payload: res.data.data
        })
    }

    return (
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
