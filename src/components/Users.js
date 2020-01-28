import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = `http://acme-users-api-rev.herokuapp.com/api/users`;

function Users() {
  let [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get(API).then(response => setUserList(response.data.users));
  }, []);

  console.log(userList);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {userList.map(user => (
          <li>{user.fullName}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
