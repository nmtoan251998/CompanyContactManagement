import React from "react";
import Layout from "./Layout";
import { Box, Typography } from "@material-ui/core";
import PeopleList from "./PeopleList";

function Home() {
  return (
    <Layout>
      <Box height="100%" display="flex" flexDirection="column">
        <Typography variant="h5">People</Typography>
        <Box overflow="auto" flexGrow={1} mt={1} mb={-2} ml={-2} mr={-2}>
          <PeopleList />
        </Box>
      </Box>
    </Layout>
  );
}

export default Home;
