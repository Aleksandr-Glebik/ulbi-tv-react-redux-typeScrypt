import React from "react"
import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList: React.FC = () => {
    const {error, loading, users} = useTypedSelector(state => state.user)

    return (
        <div>

        </div>
    )
}

export default UserList