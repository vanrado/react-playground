import UsersInput from "./UsersInput/UsersInput";
import UsersList from "./UsersList/UsersList";
import Card from "../UI/Card/Card";

const Users = () => {
    return (
        <div className="users__wrapper">
            <section className="users__input">
                <Card>
                    <UsersInput></UsersInput>
                </Card>
            </section>

            <section className="users__list">
                <Card>
                 <UsersList></UsersList>
                </Card>
            </section>
        </div>
    )
}

export default Users;