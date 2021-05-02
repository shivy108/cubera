import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

function Home() {
  const history = useHistory();
  const [contacts, setContacts] = useState([]);
  const [add, setAdd] = useState(false);

  useEffect((contacts) => {
    axios.get("http://localhost:8000/api/contacts/").then((response) => {
      console.log(response);
      setContacts(response.data);
      console.log(contacts);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <h1>Company</h1>
          <div className="nav-items">
            <p onClick={() => history.push("/")} className="nav-item">
              Contacts
            </p>
            <p onClick={() => history.push("/login")} className="nav-item">
              Login
            </p>
          </div>
        </nav>
      </header>

      <div className="Container">
        <h1>My Contacts</h1>
        <div onClick={() => setAdd(true)} className="button">
          add
        </div>
        {add ? (
          <div className="add-section">
            <p>name</p>
            <input type="text" placeholder="name" />
            <p>number</p>
            <input type="text" placeholder="number" />
            <p>email</p>
            <input type="text" placeholder="email" />
          </div>
        ) : (
          <></>
        )}
        {contacts.map((contact, index) => {
          return (
            <div key={index}>
              <p>{contact.name}</p>
              <p>{contact.number}</p>
              <p>{contact.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
