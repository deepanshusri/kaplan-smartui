"use client";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { AppBar, Container, Tabs, Tab } from "@mui/material";
import Box from "@mui/material/Box";
import Form from "./Form";
import Cards from "./Cards";
import Accordions from "./Accordions";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md">
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Form" {...a11yProps(0)} />
          <Tab label="cards" {...a11yProps(1)} />
          <Tab label="Accordion" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <Form />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Cards />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Accordions />
      </TabPanel>
    </Container>
  );
}
