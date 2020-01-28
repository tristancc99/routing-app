import React, { useState, useEffect } from "react";
import axios from "axios";
import Pager from "./Pager";

const API = `http://acme-users-api-rev.herokuapp.com/api/users`;

function Users() {
  let [userList, setUserList] = useState({});

  useEffect(() => {
    axios.get(API).then(response => {
      setUserList({ ...response.data });
      console.log(response);
    });
  }, []);

  console.log(userList);

  return (
    <div>
      <h1>Users ({userList.count})</h1>
      <Pager count={userList.count} />
      <ul>
        {userList.users && userList.users.length > 0 ? (
          userList.users.map(user => <li>{user.fullName}</li>)
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
}

export default Users;
