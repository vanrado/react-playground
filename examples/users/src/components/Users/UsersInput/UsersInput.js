import {useState} from "react";

const UsersInput = (props) => {
    const [formState, setFormState] = useState({ username: '', age: '' });

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(`form`, formState);
        props.submit({ ...formState, id: new Date().getTime() });
    }

    const inputChangeHandler = (event) => {
        const fieldName = `${event.target.name}`;
        const value = event.target.value;
        setFormState((prevState) => ({...prevState, [fieldName]: value }));
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="username">
                    Username
                    <input type="text" id="username" name="username" value={formState.username || ''} onChange={inputChangeHandler}/>
                </label>
            </div>

            <div>
                <label htmlFor="age">
                    Age
                    <input type="text" id="age" name="age" value={formState.age || ''} onChange={inputChangeHandler} />
                </label>

            </div>

            <button type="submit">Add User</button>
        </form>
    );
}

export default UsersInput;