// import {ExpandMoreIcon} from "@mui/material";
// import {AssignmentIcon} from "@mui/material";
// import {PersonPinIcon} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { Assignment } from "@mui/icons-material";
import { PersonPin } from "@mui/icons-material";
import update from "immutability-helper";



import {
  Autocomplete,
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  Chip,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Tab,
  Tabs,
  TextField,
  Typography,
  makeStyles,
} from "@mui/material";
import React, { useState } from "react";

import { Ballot } from "@mui/icons-material";
import { Formik } from "formik";
import Swal from "sweetalert2";
import app_config from "../../config";
import './addForm.css';

// const styles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     maxWidth: "100%",
//   },
//   tabPanel: {
//     padding: "2rem",
//   },
//   input: {
//     width: "100%",
//     marginTop: "3rem",
//   },
//   formControl: {
//     marginTop: "3rem",
//     width: "100%",
//   },
// }));

const AddForm = () => {
  const url = app_config.api_url;

  const prerequisites = [
    "HTML",
    "CSS",
    "JavaScript Basics",
    "Python Basics",
    "Flexbox",
  ];
  const [tempForm, setTempForm] = useState({});

  const [value, setValue] = React.useState(0);
  const [formData, setFormData] = React.useState({
    sections: [
      {
        name: "Introduction",
        description: "Section 1 Description",
        lectures: [
          {
            name: "Lecture 1",
            description: "",
            content: "",
            resources: [],
          },
        ],
      },
    ],
  });
  const [dataReady, setDataReady] = React.useState(false);

  const [imgPath, setImgPath] = useState("");
  const [avatar, setAvatar] = useState("");
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const courseForm = {
    title: "",
    description: "",
    category: "web dev",
    prerequisites: [],
    thumbnail: "",
    target: "",
    data: {},
    pricing: 0,
    trainer: currentUser._id,
    created: new Date(),
    duration: 0,
    reviews: Array,
  };

  const onFormSubmit = (formdata) => {
    console.log("click on button to submit form");
    setTempForm(formdata);
    console.log(formdata);
  };

  const createCourse = () => {
    let formdata = tempForm;
    formdata["data"] = formData;
    formdata["thumbnail"] = avatar;
    console.log(formdata);
    fetch(url + "/course/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Sucess",
          text: "Course Added Successfully",
        });
      });
  };

  const addNewSection = () => {
    const newSection = {
      name: "Untitled Section",
      description: "Section Description",
      lectures: [
        {
          name: "Lecture 1",
          description: "Lecture 1 Description",
          content: "",
          resources: [],
        },
      ],
    };

    const newData = update(formData, {
      sections: {
        $push: [newSection],
      },
    });

    setFormData(newData);
  };

  const addNewLecture = (sect_index) => {
    const newLecture = {
      name: "Untitled Lecture",
      description: "Lecture Description",
      content: "",
      resources: [],
    };

    const sections = {};
    sections[sect_index] = { lectures: { $push: [newLecture] } };

    const newData = update(formData, {
      sections: sections,
    });

    setFormData(newData);
  };

  const handleRename = (prop, val, sect_i, lect_i) => {
    const sections = {};
    const lectures = {};
    if (prop == "lect_name") {
      lectures[lect_i] = { name: { $set: val } };
      sections[sect_i] = { lectures: lectures };
    } else if (prop == "lect_desc") {
      lectures[lect_i] = { description: { $set: val } };
      sections[sect_i] = { lectures: lectures };
    } else if (prop == "sect_name") {
      sections[sect_i] = { name: { $set: val } };
    } else if (prop == "sect_desc") {
      sections[sect_i] = { description: { $set: val } };
    }

    const newData = update(formData, {
      sections: sections,
    });

    setFormData(newData);
  };

  const handleFileUpload = (prop, file, sect_i, lect_i) => {
    const formData = new FormData();
    formData.append("myfile", file);
    console.log(file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: formData,
    }).then((res) => console.log(res.status));

    console.log(prop);

    const sections = {};
    const lectures = {};

    lectures[lect_i] = { content: { $set: file.name } };
    sections[sect_i] = { lectures: lectures };

    const newData = update(formData, {
      sections: sections,
    });

    setFormData(newData);
  };

  const uploadThumbnail = (event) => {
    const data = new FormData();
    data.append("myfile", event.target.files[0]);
    setAvatar(event.target.files[0].name);

    fetch(url + "/util/uploadfile", { method: "POST", body: data }).then(
      (res) => console.log(res)
    );

    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      // erroMsg = 'Only images are supported.';
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      setImgPath(reader.result);
    };
  };

  const showThumb = () => {
    if (imgPath) {
      return <img src={imgPath} className="img-fluid" />;
    }
  };

  React.useEffect(() => {
    console.log(formData);
    setDataReady(true);
    console.log(dataReady);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderCourse = () => {
    return (
      <div>
        {formData.sections.map((section, sect_i) => (
          <div
            style={{
              padding: "2rem",
              border: "1px solid gray",
              background: "grey",
              marginTop: "1rem",
            }}
            key={sect_i}
          >
            <h3>
              Section {`${sect_i + 1}: `}
              <InputBase
                className="section-input"
                value={section.name}
                onChange={(e) =>
                  handleRename("sect_name", e.target.value, sect_i, 0)
                }
              ></InputBase>
            </h3>
            <InputBase
              value={section.description}
              onChange={(e) =>
                handleRename("sect_desc", e.target.value, sect_i, 0)
              }
            ></InputBase>
            {section.lectures.map((lecture, lect_i) => (
              <Accordion key={lect_i}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <h4>
                    Lecture {`${lect_i + 1}: `}
                    <InputBase
                      value={lecture.name}
                      onChange={(e) =>
                        handleRename(
                          "lect_name",
                          e.target.value,
                          sect_i,
                          lect_i
                        )
                      }
                    ></InputBase>
                  </h4>
                </AccordionSummary>
                <AccordionDetails>
                  <InputBase
                    value={lecture.description}
                    onChange={(e) =>
                      handleRename("lect_desc", e.target.value, sect_i, lect_i)
                    }
                  ></InputBase>
                  <label>Lecture Content</label>
                  <input
                    type="file"
                    onChange={(e) =>
                      handleFileUpload(
                        "content",
                        e.target.files[0],
                        sect_i,
                        lect_i
                      )
                    }
                  />
                </AccordionDetails>

                <AccordionActions></AccordionActions>
              </Accordion>
            ))}
            <Button onClick={(e) => addNewLecture(sect_i)}>
              Add New Lecture
            </Button>
          </div>
        ))}
        <Button onClick={addNewSection}>Add New Section</Button>

        {/* <Button className="w-100 mt-5" onClick={createCourse}>
          Create Course
        </Button> */}
      </div>
    );
  };

  const userForm = {
    title: "",
    description: "",
    createdBy: currentUser._id,
    createdAt: new Date()
  };

  // 2. Create a function for form submission
  const userSubmit = (formdata) => {
    console.log(formdata);
    fetch("http://localhost:5000/form/add", {
      method: "POST",
      body: JSON.stringify(formdata), //convert javascript to json
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log("data saved");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Form Created Successfully!!👍",
        });
      }
    });
  };

  return (
    <div className="col-md-8 mx-auto mt-5 w-100">
      <Paper square>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab icon={<Assignment />} label="Create Your Forms" />
          <Tab icon={<PersonPin />} label="Additional" />
        </Tabs>
      </Paper>

      <TabPanel value={value} index={0}>

        <div className="basic-details">
        <Formik initialValues={userForm} onSubmit={userSubmit} 
      // validationSchema={formSchema}
       >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              label="title"
              variant="outlined"
              className="w-100 mb-4"
              id="title"
              onChange={handleChange}
              value={values.title}
              // className="form-control form-control-lg"
              // helperText={touched.username ? errors.username : ''}
              // error={Boolean(errors.username && touched.username)}
            />
            
            <TextField
              label="description"
              variant="outlined"
              className="w-100 mb-4"
              id="description"
              onChange={handleChange}
              value={values.description}
              // className="form-control form-control-lg"
              // helperText={touched.email ? errors.email : ''}
              // error={Boolean(errors.email && touched.email)}
            />
            {/* <button type="submit" className="btn btn-warning btn-lg ms-2">
              Submit
            </button> */}
          </form>
        )}
      </Formik>
        </div>

        <div className="form-customizer">
        {renderCourse()}
        </div>

        
        <Formik initialValues={courseForm} onSubmit={onFormSubmit}>
          {({ values, handleChange, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              
            </form>
          )}
        </Formik>
      </TabPanel>

      
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    className="p-0  "
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Paper square className="p-5">
          {children}
        </Paper>
      )}
    </div>
  );
}

export default AddForm;
