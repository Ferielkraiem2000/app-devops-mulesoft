"use client";
import React, { useState } from "react";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { Box, Typography, FormControl, FormGroup, FormControlLabel, Checkbox, Stepper, Step, StepLabel,Button, DialogActions, Dialog, DialogContent, DialogTitle } from "@mui/material";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import GitLabIcon from "@mui/icons-material/DataObject"; // No official icon, using placeholder
// import AzureIcon from "@mui/icons-material/Cloud"; // No official icon, using placeholder
// import CloudIcon from '@mui/icons-material/Cloud';
// import ComputerIcon from '@mui/icons-material/Computer';
// import BitbucketIcon from "@mui/icons-material/Storage"; // No official icon, using placeholder
// import BarChartIcon from '@mui/icons-material/BarChart';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import InsertChartIcon from '@mui/icons-material/InsertChart';
// import BugReportIcon from '@mui/icons-material/BugReport';
// import FolderIcon from '@mui/icons-material/Folder';
// import StorageIcon from '@mui/icons-material/Storage';

const AppForm = () => {
    const steps = [
        {
            id: 1,
            step: "Choose Versioning Tool",
            options: [
                { label: "github", icon: "fab fa-github" },      
                { label: "gitlab", icon: "fab fa-gitlab" },      
                { label: "bitbucket", icon: "fab fa-bitbucket" }, 
                { label: "azure", icon: "fab fa-microsoft" },   
            ],
        },
        {
            id: 2,
            step: "Choose Hosting Type",
            options: [
                { label: "cloudhub", icon: "fas fa-cloud" },     // Cloud icon
                { label: "onpremise", icon: "fas fa-server" },   // Server icon
            ],
        },
        {
            id: 3,
            step: "Choose Monitoring Tool",
            options: [
                { label: "grafana", icon: "fas fa-chart-line" },  // Line chart for Grafana
                { label: "elk", icon: "fas fa-chart-area" },      // Area chart for ELK
                { label: "datadog", icon: "fas fa-dog" },         // Dog icon for Datadog
                { label: "splunk", icon: "fas fa-search" },       // Search icon for Splunk
            ],
        },
        {
            id: 4,
            step: "Choose Hosting Jar Tool",
            options: [
                { label: "jfrog", icon: "fas fa-frog" },          
                { label: "nexus", icon: "fas fa-database" },    
            ],
        }
    ];
    
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const handleOptionChange = (step:any, option: any) => {
        setSelectedOption(option);
        if (step === 'Choose Versioning Tool') setSelectedOptionVersioning(option);
        if (step === 'Choose Hosting Type') setSelectedOptionHosting(option);
        if (step === 'Choose Monitoring Tool') setSelectedOptionMonitoring(option);
        if (step === 'Choose Hosting Jar Tool') setSelectedOptionHostingJar(option);
        console.log("testtttttt",option)
        console.log("step",step)
        
      };
    const currentStep = steps[currentStepIndex];
    const [selectedOptionVersioning, setSelectedOptionVersioning] = useState("");
    const [selectedOptionHosting, setSelectedOptionHosting] = useState("");
    const [selectedOptionMonitoring, setSelectedOptionMonitoring] = useState("");
    const [selectedOptionHostingJar, setSelectedOptionHostingJar] = useState("");

    const dataToSend = {
        versioningTool: selectedOptionVersioning,
        hostingType: selectedOptionHosting,
        monitoringTool: selectedOptionMonitoring,
        hostingJarTool: selectedOptionHostingJar,
        status: "en attente",
    };

  const handleNext = () => {
    if (selectedOption) {
        setCurrentStepIndex(currentStepIndex + 1);
        setSelectedOption("");
      }
    
  };

  const handleBack = () => {
    setCurrentStepIndex((prevStep) => prevStep - 1);
  };

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
  };

  const [openPopup, setOpenPopup] = useState(false); 


  const handleSubmit = async () => {
    console.log("Submitting:", dataToSend);
    try {
        const response = await axios.post("https://app-back-deploy.vercel.app/save-order", dataToSend);
        console.log(response.data);
        setOpenPopup(true);
    } catch (error) {
        console.error("Error saving order:", error);
    }  };
const handleClosePopup = () => {
    setOpenPopup(false);
  };   

  return (
        <div className="flex min-h-screen bg-gray-100">
          {/* Sidebar */}
            <div className="w-20 bg-white shadow-md p-4 flex flex-col items-center">
            <div className="mb-6">
              <a href="/client"><FaHome className="text-gray-700 hover:text-blue-500 text-2xl" /></a>
            </div>
            {/* <div className="mb-6">
              <FaBoxOpen className="text-gray-700 hover:text-blue-500 text-2xl" />
            </div> */}
            <div className="mb-6">
              <a href="/command"><FaShoppingCart className="text-gray-700 hover:text-blue-500 text-2xl" /></a>
            </div>
            {/* <div className="mb-6">
              <FaUser className="text-gray-700 hover:text-blue-500 text-2xl" />
            </div> */}
            {/* <div>
              <FaCog className="text-gray-700 hover:text-blue-500 text-2xl" />
            </div> */}
        </div>

            <Box style={{}} sx={{ margin: "auto",
            justifyContent: "center", // Centre horizontalement
            alignItems: "center",    // Centre verticalement
            display:"block",
            alignContent:"center",
    backgroundColor: "white",
    boxShadow: 3,
    padding: 3 }}>
            <Stepper activeStep={currentStepIndex} alternativeLabel>
                {steps.map((label) => (
                <Step key={label.id}>
                    <StepLabel>{label.step}</StepLabel>
                </Step>
                ))}
            </Stepper>
            <Box sx={{ marginTop: 3 }}>
                <div >
                    <h2>{currentStep.step}</h2>
                    <div>
                        {
                            currentStep.options.map((step, index) =>(
                                <div
                                key={index}
                                className={`option ${
                                selectedOption === step.label ? "selected" : ""
                                }`}
                                onClick={() => handleOptionChange(currentStep.step,step.label)}
                                style={{
                                display: "flex",
                                alignItems: "center",
                                cursor: "pointer",
                                margin: "10px 0",
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                backgroundColor:
                                    selectedOption === step.label ? "#cce7ff" : "#fff",
                                }}
                                >
                                    <i
                                    className={step.icon}
                                    style={{
                                        marginRight: "10px",
                                        color: selectedOption === step.label ? "#007bff" : "#000",
                                    }}
                                    ></i>
                                    <span>{step.label}</span>

                                </div>
                            ))
                        }
                    </div>
                    <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
                    <Button
                        variant="outlined"
                        disabled={currentStepIndex === 0}
                        onClick={handleBack}
                    >
                        Back
                    </Button>
                    {currentStepIndex === steps.length - 1 ? (
                        <Button variant="contained" onClick={handleSubmit}>
                        Submit
                        </Button>
                    ) : (
                        <Button variant="contained" onClick={handleNext}>
                        Next
                        </Button>
                    )}
                    </Box>
                    <Dialog open={openPopup} onClose={handleClosePopup}>
                <DialogTitle>Order Submitted</DialogTitle>
                <DialogContent>
                <Typography>Your order has been submitted successfully and is now awaiting approval from the administrator</Typography>
                </DialogContent>
                <DialogActions>
            <a href="/client"> <Button onClick={handleClosePopup} color="primary">
                    Close
                </Button></a>
                </DialogActions>
                </Dialog>
                </div>
            </Box>
            </Box>
        </div>      

  );
};

export default AppForm;