const SimpleForm = () => {
    const handleForm = e => {
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <input required type="text" name="" id="" placeholder="Type Your Name..." /><br />
                <input required type="email" name="" id="" placeholder="E-mail Address.." /><br />
                <input required type="password" name="" id="" placeholder="Password..." /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;