const UsersInput = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        // TODO pass form data UP
    }

    return (
        <form onSubmit={onSubmitHandler}>UserInput</form>
    );
}

export default UsersInput;