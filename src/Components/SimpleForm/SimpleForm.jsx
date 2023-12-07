import { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setpassword] = useState(null);
  const handleForm = (e) => {
    e.preventDefault();
    console.log( 'name :', name, 'email :', email, 'password :', password);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setpassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          onChange={handleName}
          required
          type="text"
          name="name"
          id=""
          placeholder="Type Your Name..."
        />
        <br />
        <input
          onChange={handleEmail}
          required
          type="email"
          name=""
          id=""
          placeholder="E-mail Address.."
        />
        <br />
        <input
          onChange={handlePass}
          required
          type="password"
          name=""
          id=""
          placeholder="Password..."
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
