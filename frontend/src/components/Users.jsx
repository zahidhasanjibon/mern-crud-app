/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import User from "./User";

const URL = "http://localhost:5000/users";
const fetchHandler = async () => {
  console.log("jibon");
  return await axios.get(URL).then((res) => res.data);
};

function Users() {
  const mountedRef = useRef(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("yes");
    fetchHandler().then((data) => setUsers(data.users));
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return (
    <>
      <div className="user-container">
        {users.map((user, ind) => (
          <div className="user" key={ind}>
            <User details={user} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Users;
