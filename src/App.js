/** @format */

import React, { useState, useEffect } from "react";
import { UserGrid } from "./components/UserGrid";
import { fetchUsers } from "./AppClient";
import { Typography } from "@material-ui/core";

export const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      fetchUsers().then((response) => {
        setUsers(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  if (!users.length) {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4">Loading...</Typography>
      </div>
    </div>
  );
  }

  return (
    <div style={{height: '100%', width: '100%'}}>
      <Typography variant="h4">PMA User Browser</Typography>
      <UserGrid users={users} />
    </div>
  );
};
