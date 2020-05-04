import React from "react";
import Layout from "./Layout";
import { Box, Typography } from "@material-ui/core";
import PeopleList from "./PeopleList";
import useMyContacts from "../hooks/useMyContacts";
import ButtonCreate from "./ButtonCreate";

function Home() {
  const contacts = useMyContacts();

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
          <Typography style={{ flexGrow: 1 }} variant="h5">{`People (${
            (contacts &&
              contacts.data &&
              contacts.data.users_list &&
              contacts.data.users_list.length) ||
            0
          })`}</Typography>
          <ButtonCreate />
        </Box>
        <Box overflow="auto" flexGrow={1}>
          <PeopleList {...contacts} />
        </Box>
      </Box>
    </Layout>
  );
}

export default Home;
