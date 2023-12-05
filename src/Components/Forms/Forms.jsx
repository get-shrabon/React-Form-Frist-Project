const Forms = () => {
  const handleForm = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" name="name" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Forms;
