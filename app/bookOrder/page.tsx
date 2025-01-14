// "use client";
// import React, { useState } from "react";
// import { FaHome, FaShoppingCart } from "react-icons/fa";
// import { Box, Typography, FormControl, FormGroup, FormControlLabel, Checkbox, Stepper, Step, StepLabel,Button, DialogActions, Dialog, DialogContent, DialogTitle } from "@mui/material";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import axios from "axios";
// // import GitHubIcon from "@mui/icons-material/GitHub";
// // import GitLabIcon from "@mui/icons-material/DataObject"; // No official icon, using placeholder
// // import AzureIcon from "@mui/icons-material/Cloud"; // No official icon, using placeholder
// // import CloudIcon from '@mui/icons-material/Cloud';
// // import ComputerIcon from '@mui/icons-material/Computer';
// // import BitbucketIcon from "@mui/icons-material/Storage"; // No official icon, using placeholder
// // import BarChartIcon from '@mui/icons-material/BarChart';
// // import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// // import InsertChartIcon from '@mui/icons-material/InsertChart';
// // import BugReportIcon from '@mui/icons-material/BugReport';
// // import FolderIcon from '@mui/icons-material/Folder';
// // import StorageIcon from '@mui/icons-material/Storage';

// const AppForm = () => {
//     const steps = [
//         {
//             id: 1,
//             step: "Choose Versioning Tool",
//             options: [
//                 { label: "Github", icon: "fab fa-github" },      
//                 { label: "Gitlab", icon: "fab fa-gitlab" },      
//                 { label: "Bitbucket", icon: "fab fa-bitbucket" }, 
//                 { label: "Azure DevOps", icon: "fab fa-microsoft" },   
//             ],
//         },
//         {
//             id: 2,
//             step: "Choose Hosting Type",
//             options: [
//                 { label: "Cloudhub2.0", icon: "fas fa-cloud" },     // Cloud icon
//                 { label: "On-Premises", icon: "fas fa-server" },   // Server icon
//             ],
//         },
//         {
//             id: 3,
//             step: "Choose Monitoring Tool",
//             options: [
//                 { label: "Grafana", icon: "fas fa-chart-line" },  // Line chart for Grafana
//                 { label: "ELK", icon: "fas fa-chart-area" },      // Area chart for ELK
//                 { label: "Datadog", icon: "fas fa-dog" },         // Dog icon for Datadog
//                 { label: "Splunk", icon: "fas fa-search" },       // Search icon for Splunk
//             ],
//         },
//         {
//             id: 4,
//             step: "Choose Hosting Jar Tool",
//             options: [
//                 { label: "Jfrog", icon: "fas fa-frog" },          
//                 { label: "Nexus", icon: "fas fa-database" },    
//             ],
//         }
//     ];
    
//     const [currentStepIndex, setCurrentStepIndex] = useState(0);
//     const [selectedOption, setSelectedOption] = useState("");
//     const handleOptionChange = (step:any, option: any) => {
//         setSelectedOption(option);
//         if (step === 'Choose Versioning Tool') setSelectedOptionVersioning(option);
//         if (step === 'Choose Hosting Type') setSelectedOptionHosting(option);
//         if (step === 'Choose Monitoring Tool') setSelectedOptionMonitoring(option);
//         if (step === 'Choose Hosting Jar Tool') setSelectedOptionHostingJar(option);
//         console.log("testtttttt",option)
//         console.log("step",step)
        
//       };
//     const currentStep = steps[currentStepIndex];
//     const [selectedOptionVersioning, setSelectedOptionVersioning] = useState("");
//     const [selectedOptionHosting, setSelectedOptionHosting] = useState("");
//     const [selectedOptionMonitoring, setSelectedOptionMonitoring] = useState("");
//     const [selectedOptionHostingJar, setSelectedOptionHostingJar] = useState("");

//     const dataToSend = {
//         versioningTool: selectedOptionVersioning,
//         hostingType: selectedOptionHosting,
//         monitoringTool: selectedOptionMonitoring,
//         hostingJarTool: selectedOptionHostingJar,
//         status: "en attente",
//     };

//   const handleNext = () => {
//     if (selectedOption) {
//         setCurrentStepIndex(currentStepIndex + 1);
//         setSelectedOption("");
//       }
    
//   };

//   const handleBack = () => {
//     setCurrentStepIndex((prevStep) => prevStep - 1);
//   };

//   const handleChange = (e:any) => {
//     const { name, value } = e.target;
//     // setFormData((prevData) => ({
//     //   ...prevData,
//     //   [name]: value,
//     // }));
//   };

//   const [openPopup, setOpenPopup] = useState(false); 

//   const handleSubmit = async () => {
//     console.log("Submitting:", dataToSend);
//     try {
//         const response = await axios.post("https://app-back-deploy.vercel.app/save-order", dataToSend);
//         console.log(response.data);
//         setOpenPopup(true);
//     } catch (error) {
//         console.error("Error saving order:", error);
//     }  };
  
//   const handleClosePopup = () => {
//     setOpenPopup(false);
//   };   

//   return (
//         <div className="flex min-h-screen bg-gray-100">
//           {/* Sidebar */}
//             <div className="w-20 bg-white shadow-md p-4 flex flex-col items-center">
//             <div className="mb-6">
//               <a href="/client"><FaHome className="text-gray-700 hover:text-blue-500 text-2xl" /></a>
//             </div>
//             {/* <div className="mb-6">
//               <FaBoxOpen className="text-gray-700 hover:text-blue-500 text-2xl" />
//             </div> */}
//             <div className="mb-6">
//               <a href="/command"><FaShoppingCart className="text-gray-700 hover:text-blue-500 text-2xl" /></a>
//             </div>
//             {/* <div className="mb-6">
//               <FaUser className="text-gray-700 hover:text-blue-500 text-2xl" />
//             </div> */}
//             {/* <div>
//               <FaCog className="text-gray-700 hover:text-blue-500 text-2xl" />
//             </div> */}
//         </div>

//             <Box style={{}} sx={{ margin: "auto",
//             justifyContent: "center", 
//             alignItems: "center", 
//             display:"block",
//             alignContent:"center",
//             backgroundColor: "white",
//             boxShadow: 3,
//             padding: 3 }}>
//             <Stepper activeStep={currentStepIndex} alternativeLabel>
//                 {steps.map((label) => (
//                 <Step key={label.id}>
//                     <StepLabel>{label.step}</StepLabel>
//                 </Step>
//                 ))}
//             </Stepper>
//             <Box sx={{ marginTop: 3 }}>
//                 <div >
//                     <h2 style={{color:"gray"}}>{currentStep.step}</h2>
//                     <div>
//                         {
//                             currentStep.options.map((step, index) =>(
//                                 <div
//                                 key={index}
//                                 className={`option ${
//                                 selectedOption === step.label ? "selected" : ""
//                                 }`}
                    
//                                 onClick={() => handleOptionChange(currentStep.step,step.label)}
//                                 style={{
//                                 display: "flex",
//                                 alignItems: "center",
//                                 cursor: "pointer",
//                                 margin: "10px 0",
//                                 padding: "10px",
//                                 border: "1px solid #ccc",
//                                 borderRadius: "5px",
//                                 color: selectedOption === step.label ? "blue"  :"black",
//                                 backgroundColor:
//                                     selectedOption === step.label ? "#cce7ff" : "#fff",
//                                 }}
//                                 >
//                                     <i
//                                     className={step.icon}
//                                     style={{
//                                         marginRight: "10px",
//                                         color: selectedOption === step.label ? "#007bff" : "#000",
//                                     }}
//                                     ></i>
//                                     <span>{step.label}</span>

//                                 </div>
//                             ))
//                         }
//                     </div>
//                     <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
//                     <Button
//                         variant="contained"
//                         disabled={currentStepIndex === 0}
//                         onClick={handleBack}
//                     >
//                         Back
//                     </Button>
//                     {currentStepIndex === steps.length - 1 ? (
//                         <Button variant="contained" onClick={handleSubmit} disabled={!selectedOption}>
//                         Submit
//                         </Button>
//                     ) : (
//                         <Button variant="contained" disabled={!selectedOption} onClick={handleNext}>
//                         Next
//                         </Button>
//                     )}
//                     </Box>
//                     <Dialog open={openPopup} onClose={handleClosePopup}>
//                 <DialogTitle>Order Submitted</DialogTitle>
//                 <DialogContent>
//                 <Typography>Your order has been submitted successfully and is now awaiting approval from the administrator</Typography>
//                 </DialogContent>
//                 <DialogActions>
//             <a href="/client"> <Button onClick={handleClosePopup} color="primary">
//                     Close
//                 </Button></a>
//                 </DialogActions>
//                 </Dialog>
//                 </div>
//             </Box>
//             </Box>
//         </div>      

//   );
// };

// export default AppForm;


"use client";
import React, { useState } from "react";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { Box, Typography, Button, Stepper, Step, StepLabel, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";

const AppForm = () => {
    const steps = [
        {
            id: 1,
            step: "Choose Versioning Tool",
            options: [
                { label: "Github", icon: "fab fa-github" },
                { label: "Gitlab", icon: "fab fa-gitlab" },
                { label: "Bitbucket", icon: "fab fa-bitbucket" },
                { label: "Azure DevOps", icon: "fab fa-microsoft" },
            ],
        },
        {
            id: 2,
            step: "Choose Hosting Type",
            options: [
                { label: "Cloudhub2.0", icon: "fas fa-cloud" },
                { label: "On-Premises", icon: "fas fa-server" },
            ],
        },
        {
            id: 3,
            step: "Choose Monitoring Tool",
            options: [
                { label: "Grafana", icon: "fas fa-chart-line" },
                { label: "ELK", icon: "fas fa-chart-area" },
                { label: "Datadog", icon: "fas fa-dog" },
                { label: "Splunk", icon: "fas fa-search" },
            ],
        },
        {
            id: 4,
            step: "Choose Hosting Jar Tool",
            options: [
                { label: "Jfrog", icon: "fas fa-frog" },
                { label: "Nexus", icon: "fas fa-database" },
            ],
        },
    ];

    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState<string[]>(Array(steps.length).fill(""));

    const handleOptionChange = (stepIndex: number, option: string) => {
        const updatedSelections = [...selectedOptions];
        updatedSelections[stepIndex] = option;
        setSelectedOptions(updatedSelections);
    };

    const handleNext = () => {
        if (selectedOptions[currentStepIndex]) {
            setCurrentStepIndex((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        setCurrentStepIndex((prev) => prev - 1);
    };

    const [openPopup, setOpenPopup] = useState(false);

    const handleSubmit = async () => {
        const dataToSend = {
            versioningTool: selectedOptions[0],
            hostingType: selectedOptions[1],
            monitoringTool: selectedOptions[2],
            hostingJarTool: selectedOptions[3],
            status: "en attente",
        };

        try {
            const response = await axios.post("https://app-back-deploy.vercel.app/save-order", dataToSend);
            console.log(response.data);
            setOpenPopup(true);
        } catch (error) {
            console.error("Error saving order:", error);
        }
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
    };

    const currentStep = steps[currentStepIndex];

    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="w-20 bg-white shadow-md p-4 flex flex-col items-center">
                <div className="mb-6">
                    <a href="/client"><FaHome className="text-gray-700 hover:text-blue-500 text-2xl" /></a>
                </div>
                <div className="mb-6">
                    <a href="/command"><FaShoppingCart className="text-gray-700 hover:text-blue-500 text-2xl" /></a>
                </div>
            </div>
            <Box sx={{ margin: "auto", justifyContent: "center", alignItems: "center", display: "block", backgroundColor: "white", boxShadow: 3, padding: 3 }}>
                <Stepper activeStep={currentStepIndex} alternativeLabel>
                    {steps.map((label, index) => (
                        <Step key={label.id}>
                            <StepLabel>
                                {label.step}
                                <div style={{ fontSize: "0.8rem", color: "gray" }}>
                                    {selectedOptions[index] || "Not selected yet"}
                                </div>
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Box sx={{ marginTop: 3 }}>
                    <Typography variant="h5" gutterBottom>
                        {currentStep.step}
                    </Typography>
                    <div>
                        {currentStep.options.map((option, index) => (
                            <div
                                key={index}
                                onClick={() => handleOptionChange(currentStepIndex, option.label)}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    margin: "10px 0",
                                    padding: "10px",
                                    border: "1px solid #ccc",
                                    borderRadius: "5px",
                                    color: selectedOptions[currentStepIndex] === option.label ? "blue" : "black",
                                    backgroundColor: selectedOptions[currentStepIndex] === option.label ? "#cce7ff" : "#fff",
                                }}
                            >
                                <i
                                    className={option.icon}
                                    style={{
                                        marginRight: "10px",
                                        color: selectedOptions[currentStepIndex] === option.label ? "#007bff" : "#000",
                                    }}
                                ></i>
                                <span>{option.label}</span>
                            </div>
                        ))}
                    </div>
                    <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
                        <Button variant="contained" disabled={currentStepIndex === 0} onClick={handleBack}>
                            Back
                        </Button>
                        {currentStepIndex === steps.length - 1 ? (
                            <Button variant="contained" onClick={handleSubmit} disabled={!selectedOptions[currentStepIndex]}>
                                Submit
                            </Button>
                        ) : (
                            <Button variant="contained" onClick={handleNext} disabled={!selectedOptions[currentStepIndex]}>
                                Next
                            </Button>
                        )}
                    </Box>
                </Box>
                <Dialog open={openPopup} onClose={handleClosePopup}>
                    <DialogTitle>Order Submitted</DialogTitle>
                    <DialogContent>
                        <Typography>Your order has been submitted successfully and is now awaiting approval from the administrator.</Typography>
                    </DialogContent>
                    <DialogActions>
                        <a href="/client">
                            <Button onClick={handleClosePopup} color="primary">
                                Close
                            </Button>
                        </a>
                    </DialogActions>
                </Dialog>
            </Box>
        </div>
    );
};

export default AppForm;
