import React from 'react';
import UserListItem from './UserListItem';
import UserCardItem from './UserCardItem';

const renderListOrCards = (props) => {
    if (props.grid) {
        return (
            props.users.map((user, i) => <UserCardItem obj={user} key={i}/>)
        )
    }
    return (
        props.users.map((user,i) => <UserListItem obj={user} key={i}/>)
    )
}

const UsersList = props => <div className="row container"> {renderListOrCards(props)} </div>

export default UsersList;