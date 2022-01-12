import UsersListItem from "../UserListItem/UsersListItem";

const UsersList = (props) => {
    return (
        <div>
            UsersList
            {props.usersList.map(user => (<UsersListItem user={user} key={user.id}/>))}
        </div>);
}

export default UsersList;