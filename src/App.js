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
        style={styles.loadingContainer}
      >
        <div
          style={styles.loadingContent}
        >
          <Typography variant="h4">Loading...</Typography>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.appWrapper}>
      <Typography gutterBottom variant="h5">PMA User Browser</Typography>
      <UserGrid users={users} />
    </div>
  );
};

const styles = {
  appWrapper: { height: "100%", width: "100%", padding: 20 },
  loadingContent: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingContainer: { display: "flex", flex: 1, flexDirection: "column" },
};
