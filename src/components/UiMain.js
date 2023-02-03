import {
  Typography,
  Box,
  Tabs,
  Tab,
  TextField,
  MenuItem,
  Grid,
  Slider,
  Popover,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <div
        className="colors"
        style={{ backgroundColor: value }}
        onClick={handleClick}
      ></div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <SketchPicker color={value}></SketchPicker>
      </Popover>
    </>
  );
};

const rows = [
  {
    id: 1,
    name: "Question color",
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
    color: "#f542dd",
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
const rating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Grid container>
              <Grid item xs={5}>
                <Grid container columns={5}>
                  {rows.map((data) => {
                    return (
                      <>
                        <Grid item xs={1}>
                          <CustomColor value={data.color}></CustomColor>
                          <p className="description-name">{data.name}</p>
                        </Grid>
                      </>
                    );
                  })}
                  <div className="button-style-div">
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginTop: "7px",
                        // border:'1px solid',
                        width: "83px",
                      }}
                    >
                      Button style
                    </Typography>

                    <TextField
                      select
                      size="small"
                      sx={{ marginLeft: "2.5em", width: "360px" }}
                    >
                      <MenuItem value="filled">Filled</MenuItem>
                      <MenuItem value="outline">Outline</MenuItem>
                      <MenuItem value="filled/outline">Filled/Outline</MenuItem>
                      <MenuItem value="outline/filled">Outline/Filled</MenuItem>
                    </TextField>
                  </div>
                  <div className="font-family-div">
                    <Typography
                      sx={{
                        width: "80px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginTop: "7px",
                      }}
                    >
                      Font Family
                    </Typography>

                    <TextField
                      select
                      size="small"
                      sx={{ marginLeft: "2.7em", width: "360px" }}
                    >
                      <MenuItem value="filled">Arial</MenuItem>
                      <MenuItem value="outline">Calibri</MenuItem>
                      <MenuItem value="filled/outline">Tahoma</MenuItem>
                      <MenuItem value="outline/filled">Papyrus</MenuItem>
                      <MenuItem value="outline/filled">
                        Times New Roman
                      </MenuItem>
                      <MenuItem value="outline/filled">Courier New</MenuItem>
                    </TextField>
                  </div>
                  <div className="light-box-color">
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        // marginTop: "7px",
                        width: "115px",
                      }}
                    >
                      Shroud/light box color
                    </Typography>
                    <TextField
                      size="small"
                      sx={{
                        width: "362px",
                        marginLeft: "0.5em",
                        borderColor: "rgba(0,0,0,.08)",
                      }}
                    ></TextField>
                  </div>
                  <div className="light-box-blur">
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        // marginTop: "7px",
                        width: "115px",
                      }}
                    >
                      Shroud/light box blur
                    </Typography>
                    <div
                      style={{
                        border: " 1px solid #adacac",
                        width: "362px",
                        height: "40px",
                        marginLeft: "0.5em",
                        borderRadius: "5px",
                      }}
                    >
                      <Slider
                        defaultValue={30}
                        sx={{ width: "310px", marginLeft: "10px" }}
                      ></Slider>
                    </div>
                  </div>
                  <div className="light-box-blur">
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        // marginTop: "7px",
                        width: "115px",
                      }}
                    >
                      Shroud/light box opacity
                    </Typography>
                    <div
                      style={{
                        border: " 1px solid #adacac",
                        width: "362px",
                        height: "40px",
                        marginLeft: "0.5em",
                        borderRadius: "5px",
                      }}
                    >
                      <Slider
                        defaultValue={50}
                        sx={{ width: "310px", marginLeft: "10px" }}
                      ></Slider>
                    </div>
                  </div>
                  <div className="light-box-blur">
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        width: "115px",
                      }}
                    >
                      Modal blur
                    </Typography>
                    <div
                      style={{
                        border: " 1px solid #adacac",
                        width: "362px",
                        height: "40px",
                        marginLeft: "0.5em",
                        borderRadius: "5px",
                      }}
                    >
                      <Slider
                        sx={{ width: "300px", marginLeft: "19px" }}
                      ></Slider>
                    </div>
                  </div>
                  <div className="light-box-blur">
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        width: "115px",
                      }}
                    >
                      Modal opacity
                    </Typography>
                    <div
                      style={{
                        border: " 1px solid #adacac",
                        width: "362px",
                        height: "40px",
                        marginLeft: "0.5em",
                        borderRadius: "5px",
                      }}
                    >
                      <Slider
                        defaultValue={10}
                        sx={{ width: "310px", marginLeft: "10px" }}
                      ></Slider>
                    </div>
                  </div>
                  <div className="button-style">
                    <Button
                      variant="contained"
                      sx={{ width: "90px", backgroundColor: "gray" }}
                    >
                      Back
                    </Button>
                    <Button variant="contained" sx={{ marginLeft: "1em" }}>
                      Update
                    </Button>
                  </div>
                </Grid>
              </Grid>
              <Grid item xs={7} sx={{ p: 1 }}>
                <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                  Preview
                </Typography>
                <div className="preview-box"></div>
                <div className="inner-preview-box">
                  <Typography sx={{ fontWeight: "bold", marginTop: "-10px" }}>
                    Net Promotor Score
                  </Typography>
                  <div
                    style={{
                      width: "23px",
                      height: "23px",
                      backgroundColor: "#d6d6d6",
                      marginLeft: "465px",
                      marginTop: "-25px",
                    }}
                  >
                    <CloseOutlinedIcon></CloseOutlinedIcon>
                  </div>
                  <Typography sx={{ fontSize: "14px", marginTop: "10px" }}>
                    On a scale from 0-10, How likely are you to recommend
                    userlove to a friend or colleague?
                  </Typography>
                  <div className="rating-value">
                    {rating.map((data) => {
                      return <p className="data-value">{data}</p>;
                    })}
                  </div>
                  <p
                    style={{
                      fontSize: "13px",
                      marginTop: "-9px",
                      marginLeft: "5px",
                    }}
                  >
                    Not Likely
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      marginLeft: "400px",
                      marginTop: "-35px",
                    }}
                  >
                    Very Likely
                  </p>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "gray",
                      borderColor: "gray",
                      marginLeft: "280px",
                    }}
                  >
                    Cancel
                  </Button>
                  <Button variant="outlined" sx={{ marginLeft: "10px" }}>
                    Submit
                  </Button>
                </div>
                <div className="company-name-div">
                  <p
                    style={{
                      fontSize: "13px",
                      marginLeft: "390px",
                      marginTop: "0px",
                    }}
                  >
                    Powered by Userlove
                  </p>
                </div>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Product tour
          </TabPanel>
          <TabPanel value={value} index={2}>
            Checklist
          </TabPanel>
        </Box>
      </div>
    </>
  );
};
