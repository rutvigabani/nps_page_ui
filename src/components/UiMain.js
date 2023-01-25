import {
  Typography,
  Box,
  Tabs,
  Tab,
  Select,
  TextField,
  MenuItem,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { SketchPicker } from "react-color";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CustomColor = ({ value }) => {
  return (
    <>
      <div className="colors" style={{ backgroundColor: value }}></div>
      {/* <SketchPicker color={value}></SketchPicker> */}
    </>
  );
};

const rows = [
  {
    id: 1,
    name: "Questions color",
    color: "#0d0d0d",
  },
  {
    id: 2,
    name: "Description color",
    color: "#c9c1c1",
  },
  {
    id: 3,
    name: "Detractor color",
    color: "#d41515",
  },
  {
    id: 4,
    name: "Passive color",
    color: "#d49415",
  },
  {
    id: 5,
    name: "Promoter color",
    color: "#15d455",
  },
  {
    id: 6,
    name: "Background color",
    color: "#fafafa",
  },
  {
    id: 7,
    name: "Primary button",
    color: "#18a7d6",
  },
  {
    id: 8,
    name: "Secondary button",
    color: "#515557",
  },
  {
    id: 9,
    name: "Link color",
    color: "#1464e3",
  },
  {
    id: 10,
    name: "Dismiss color",
    color: "#515557",
  },
];

export const UiMain = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div style={{ padding: "30px" }}>
        <Typography variant="h6" fontSize="17px" fontWeight="600">
          Customize NPS/Survey theme
        </Typography>
        <Typography variant="subtitle2" fontSize="13px" color="#9b9b96">
          Customized theme to according your requirement.
        </Typography>

        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{ fontSize: "12px", fontWeight: "bold" }}
                label="NPS/Survey"
                {...a11yProps(0)}
              />
              <Tab
                sx={{ fontSize: "12px", fontWeight: "bold" }}
                label="Product tour"
                {...a11yProps(1)}
              />
              <Tab
                sx={{ fontSize: "12px", fontWeight: "bold" }}
                label="Checklist"
                {...a11yProps(2)}
              />
              <Tab
                sx={{ fontSize: "12px", fontWeight: "bold" }}
                label="Custom CSS"
                {...a11yProps(3)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div>
              <span className="left-span">
                <div className="left-div">
                  {rows.map((data) => {
                    return (
                      <>
                        {/* <div className="box"> */}
                        <div className="main-colorbox">
                          <CustomColor value={data.color}></CustomColor>
                          <p className="description-name">{data.name}</p>
                        </div>
                        {/* </div> */}
                      </>
                    );
                  })}
                  <div  className="b-style">
                    <span>
                      <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                        Button style
                      </Typography>
                    </span>
                    <span className="select-style">
                      <Box width="500px">
                        <TextField select size="small">
                          <MenuItem>Filled</MenuItem>
                          <MenuItem>Outline</MenuItem>
                          <MenuItem>Filled/Outline</MenuItem>
                          <MenuItem>Outline/Filled</MenuItem>
                        </TextField>
                      </Box>
                    </span>
                  </div>
                </div>
              </span>
              <span className="right-span">
                <div className="right-div"></div>
              </span>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Product tour
          </TabPanel>
          <TabPanel value={value} index={2}>
            Checklist
          </TabPanel>
          <TabPanel value={value} index={3}>
            Custom CSS
          </TabPanel>
        </Box>
      </div>
    </>
  );
};
