import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };

      // switch (name) {
      //   case "fName":
      //     return { fName: value, lName: preValue.lName, email: preValue.email };
      //   case "lName":
      //     return { fName: preValue.fName, lName: value, email: preValue.email };
      //   case "email":
      //     return { fName: preValue.fName, lName: preValue.lName, email: value };
      //   default:
      //     return {
      //       fName: preValue.fName,
      //       lName: preValue.lName,
      //       email: preValue.email
      //     };
      // }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
