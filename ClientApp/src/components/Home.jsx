import React, { useContext, useEffect } from "react";
import Layout from "./Layout";
import { Box, Typography } from "@material-ui/core";
import PeopleList from "./PeopleList";
import useMyContacts from "../hooks/useMyContacts";
import ButtonCreate from "./ButtonCreate";
import { AppContext } from "../App";
import { useHistory } from "react-router-dom";

function Home() {
  const contacts = useMyContacts();
  const history = useHistory();
  const { user } = useContext(AppContext);

  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
  }, [user, history]);

  return (
    <Layout>
      <Box height="100%" display="flex" flexDirection="column">
        <Box
          bgcolor="darkblue"
          color="white"
          p={1}
          pl={2}
          pr={2}
          display="flex"
          alignItems="center"
        >
          <Typography
            style={{ flexGrow: 1, padding: "8px 0px" }}
            variant="h5"
          >{`People (${
            (contacts && contacts.data && contacts.data.length) || 0
          })`}</Typography>
          {user && user.role === 0 && <ButtonCreate {...contacts} />}
        </Box>
        <Box overflow="auto" flexGrow={1}>
          <PeopleList {...contacts} />
        </Box>
      </Box>
    </Layout>
  );
}

export default Home;
