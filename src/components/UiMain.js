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
import { useState } from "react";
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

const CustomColor = ({ value, onChange }) => {
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
        <SketchPicker color={value} onChange={onChange} />
      </Popover>
    </>
  );
};

export const UiMain = () => {
  const [value, setValue] = React.useState(0);
  const [values, setValues] = useState("#fff");
  const [buttonstyle, setbuttonstyle] = useState([]);
  const [fontfamily, setfontfamily] = useState("arial");
  const [boxblur, setboxblur] = useState(30);
  const [boxopacity, setboxopacity] = useState(50);
  const [modalblur, setmodalblur] = useState(0);
  const [modalopacity, setmodalopacity] = useState(90);
  const [colors, setcolors] = useState([
    {
      id: 0,
      name: "Question color",
      color: "#0d0d0d",
    },
    {
      id: 1,
      name: "Description color",
      color: "#c9c1c1",
    },
    {
      id: 2,
      name: "Detractor color",
      color: "#d41515",
    },
    {
      id: 3,
      name: "Passive color",
      color: "#d49415",
    },
    {
      id: 4,
      name: "Promoter color",
      color: "#15d455",
    },
    {
      id: 5,
      name: "Background color",
      color: "#ffffff",
    },
    {
      id: 6,
      name: "Primary button",
      color: "#18a7d6",
    },
    {
      id: 7,
      name: "Secondary button",
      color: "#515557",
    },
    {
      id: 8,
      name: "Link color",
      color: "#1464e3",
    },
    {
      id: 9,
      name: "Dismiss color",
      color: "#515557",
    },
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleColorChange = (inputColor, data) => {
    const Array = [...colors];
    Array[data.id].color = inputColor.hex;
    setcolors(Array);
    setValues(inputColor.hex);
  };

  const handleButtonStyle = (e) => {
    setbuttonstyle(e.target.value);
  };

  const handleFontFamily = (e) => {
    setfontfamily(e.target.value);
  };

  const handleboxblur = (e, newValue) => {
    setboxblur(newValue);
  };
  const handleboxopacity = (e, newValue) => {
    setboxopacity(newValue);
  };

  const handlemodalblur = (e, newValue) => {
    setmodalblur(newValue);
  };

  const handlemodalopacity = (e, newValue) => {
    setmodalopacity(newValue);
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
                  {colors.map((data) => {
                    return (
                      <>
                        <Grid item xs={1}>
                          <CustomColor
                            value={data.color}
                            onChange={(e) => handleColorChange(e, data)}
                          />
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
                        width: "83px",
                      }}
                    >
                      Button style
                    </Typography>

                    <TextField
                      select
                      value={buttonstyle}
                      size="small"
                      onChange={handleButtonStyle}
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
                      value={fontfamily}
                      onChange={handleFontFamily}
                      sx={{ marginLeft: "2.7em", width: "360px" }}
                    >
                      <MenuItem value={"Arial"}>Arial</MenuItem>
                      <MenuItem value={"Calibri"}>Calibri</MenuItem>
                      <MenuItem value={"Tahoma"}>Tahoma</MenuItem>
                      <MenuItem value={"Papyrus"}>Papyrus</MenuItem>
                      <MenuItem value={"Times New Roman"}>
                        Times New Roman
                      </MenuItem>
                      <MenuItem value={"Courier New"}>Courier New</MenuItem>
                    </TextField>
                  </div>
                  <div className="light-box-color">
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
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
                    />
                  </div>
                  <div className="light-box-blur">
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
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
                        value={boxblur}
                        onChange={handleboxblur}
                        defaultValue={30}
                        sx={{ width: "310px", marginLeft: "10px" }}
                      ></Slider>
                    </div>
                  </div>
                  <div className="light-box-opacity">
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
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
                        value={boxopacity}
                        onChange={handleboxopacity}
                        defaultValue={50}
                        sx={{ width: "310px", marginLeft: "10px" }}
                      ></Slider>
                    </div>
                  </div>
                  <div className="modal-blur">
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
                        value={modalblur}
                        onChange={handlemodalblur}
                        sx={{ width: "300px", marginLeft: "19px" }}
                      ></Slider>
                    </div>
                  </div>
                  <div className="modal-opacity">
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
                        value={modalopacity}
                        onChange={handlemodalopacity}
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
                <div
                  className="preview-box"
                  style={{
                    filter: `blur(${boxblur}px)`,
                    opacity: boxopacity / 100,
                  }}
                ></div>

                <div
                  className="inner-preview-box"
                  style={{
                    backgroundColor: colors[5].color,
                    filter: `blur(${modalblur}px)`,
                    opacity: modalopacity / 100,
                  }}
                >
                  <Typography
                    sx={{ fontWeight: "bold", marginTop: "-10px" }}
                    style={{ color: colors[0].color, fontFamily: fontfamily }}
                  >
                    Net Promotor Score
                  </Typography>
                  <div
                    style={{
                      width: "23px",
                      height: "23px",
                      backgroundColor: "#d6d6d6",
                      marginLeft: "465px",
                      marginTop: "-25px",
                      color: colors[9].color,
                    }}
                  >
                    <CloseOutlinedIcon></CloseOutlinedIcon>
                  </div>
                  <Typography
                    sx={{ fontSize: "14px", marginTop: "10px" }}
                    style={{ color: colors[1].color, fontFamily: fontfamily }}
                  >
                    On a scale from 0-10, How likely are you to recommend
                    userlove to a friend or colleague?
                  </Typography>
                  <div className="rating-value">
                    {[...Array(6).keys()].map((data, index) => {
                      return (
                        <p
                          className="data-value"
                          style={{
                            backgroundColor: colors[2].color,
                            fontFamily: fontfamily,
                          }}
                        >
                          {index + 1}
                        </p>
                      );
                    })}
                    {[...Array(2).keys()].map((data, index) => {
                      return (
                        <p
                          className="data-value"
                          style={{
                            backgroundColor: colors[3].color,
                            fontFamily: fontfamily,
                          }}
                        >
                          {index + 7}
                        </p>
                      );
                    })}
                    {[...Array(2).keys()].map((data, index) => {
                      return (
                        <p
                          className="data-value"
                          style={{
                            backgroundColor: colors[4].color,
                            fontFamily: fontfamily,
                          }}
                        >
                          {index + 9}
                        </p>
                      );
                    })}
                  </div>
                  <p
                    style={{
                      fontSize: "13px",
                      marginTop: "-9px",
                      marginLeft: "5px",
                      color: colors[1].color,
                      fontFamily: fontfamily,
                    }}
                  >
                    Not Likely
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      marginLeft: "400px",
                      marginTop: "-35px",
                      color: colors[1].color,
                      fontFamily: fontfamily,
                    }}
                  >
                    Very Likely
                  </p>
                  <Button
                    variant="outlined"
                    sx={{
                      marginLeft: "280px",
                    }}
                    style={{
                      fontFamily: fontfamily,
                      backgroundColor:
                        buttonstyle === "filled" ||
                        buttonstyle === "filled/outline"
                          ? colors[7].color
                          : "transparent",
                      border: `1px solid ${
                        buttonstyle === "filled" ||
                        buttonstyle === "filled/outline"
                          ? colors[7].color
                          : colors[6].color
                      }`,
                      color:
                        buttonstyle === "filled" ||
                        buttonstyle === "filled/outline"
                          ? "white"
                          : colors[6].color,
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ marginLeft: "10px" }}
                    style={{
                      fontFamily: fontfamily,
                      backgroundColor:
                        buttonstyle === "filled" ||
                        buttonstyle === "outline/filled"
                          ? colors[6].color
                          : "transparent",
                      border: `1px solid ${
                        buttonstyle === "filled" ||
                        buttonstyle === "outline/filled"
                          ? colors[6].color
                          : colors[6].color
                      }`,
                      color:
                        buttonstyle === "filled" ||
                        buttonstyle === "outline/filled"
                          ? "white"
                          : colors[6].color,
                    }}
                  >
                    Submit
                  </Button>
                </div>
                <div className="company-name-div">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p
                      style={{
                        fontSize: "13px",
                        marginLeft: "360px",
                        marginTop: "0px",
                        fontFamily: fontfamily,
                      }}
                    >
                      Powered by
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        marginTop: "0px",
                        marginLeft: "3px",
                        color: colors[8].color,
                      }}
                    >
                      Userlove
                    </p>
                  </div>
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
