import UsersInput from "./UsersInput/UsersInput";
import UsersList from "./UsersList/UsersList";
import Card from "../UI/Card/Card";
import {useState} from "react";

const Users = () => {
    const [usersList, setUsersList] = useState([]);

    const onSubmitHandler = (event) => {
        setUsersList((prevState) => ([...prevState, event]))
    }

    return (
        <div className="users__wrapper">
            <section className="users__input">
                <Card>
                    <UsersInput submit={onSubmitHandler}/>
                </Card>
            </section>

            <section className="users__list">
                <Card>
                    <UsersList usersList={usersList}/>
                </Card>
            </section>
        </div>
    )
}

export default Users;