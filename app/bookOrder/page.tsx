// 
"use client"
import React, { useState } from "react";
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  DialogActions,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { FaHome, FaShoppingCart } from "react-icons/fa";
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
  const [selectedOption, setSelectedOption] = useState("");
  const [history, setHistory] = useState({});

  const currentStep = steps[currentStepIndex];

  const handleOptionChange = (step:any, option:any) => {
    setSelectedOption(option);
    setHistory((prevHistory) => ({
      ...prevHistory,
      [step]: option,
    }));
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

  const handleSubmit = async () => {
    console.log("Submitting:", history);
    try {
      const response = await axios.post(
        "https://app-back-deploy.vercel.app/save-order",
        { ...history, status: "en attente" }
      );
      console.log(response.data);
      setOpenPopup(true);
    } catch (error) {
      console.error("Error saving order:", error);
    }
  };

  const [openPopup, setOpenPopup] = useState(false);
  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-20 bg-white shadow-md p-4 flex flex-col items-center">
        <div className="mb-6">
          <a href="/client">
            <FaHome className="text-gray-700 hover:text-blue-500 text-2xl" />
          </a>
        </div>
        <div className="mb-6">
          <a href="/command">
            <FaShoppingCart className="text-gray-700 hover:text-blue-500 text-2xl" />
          </a>
        </div>
      </div>

      <Box
        sx={{
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
          display: "block",
          alignContent: "center",
          backgroundColor: "white",
          boxShadow: 3,
          padding: 3,
        }}
      >
        <Stepper activeStep={currentStepIndex} alternativeLabel>
          {steps.map((label) => (
            <Step key={label.id}>
              <StepLabel>{label.step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ marginTop: 3 }}>
          <div>
            <h2 style={{ color: "gray" }}>{currentStep.step}</h2>
            <div>
              {currentStep.options.map((step, index) => (
                <div
                  key={index}
                  className={`option ${
                    selectedOption === step.label ? "selected" : ""
                  }`}
                  onClick={() => handleOptionChange(currentStep.step, step.label)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    margin: "10px 0",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    color: selectedOption === step.label ? "blue" : "black",
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
              ))}
            </div>
            {/* History Section */}
            <Box sx={{ marginTop: 2 }}>
              <Typography variant="h6" sx={{ color: "gray" }}>
                Previous Choices:
              </Typography>
              <ul>
  {Object.entries(history).map(([step, choice], index) => (
    <li key={index}>
      <strong>{step}: </strong> {choice as string}
    </li>
  ))}
</ul>

            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 2,
              }}
            >
              <Button
                variant="contained"
                disabled={currentStepIndex === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              {currentStepIndex === steps.length - 1 ? (
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  disabled={!selectedOption}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  variant="contained"
                  disabled={!selectedOption}
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
            </Box>
            <Dialog open={openPopup} onClose={handleClosePopup}>
              <DialogTitle>Order Submitted</DialogTitle>
              <DialogContent>
                <Typography>
                  Your order has been submitted successfully and is now awaiting
                  approval from the administrator
                </Typography>
              </DialogContent>
              <DialogActions>
                <a href="/client">
                  <Button onClick={handleClosePopup} color="primary">
                    Close
                  </Button>
                </a>
              </DialogActions>
            </Dialog>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default AppForm;
