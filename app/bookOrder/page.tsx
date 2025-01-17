"use client";
import React, { useState } from "react";
import { FaCheckCircle, FaHome, FaShoppingCart } from "react-icons/fa";
import { SiGithub, SiGitlab, SiBitbucket } from "react-icons/si";
import { FaMicrosoft } from 'react-icons/fa';
import { MdCloud } from "react-icons/md";
import { FaServer } from 'react-icons/fa';
import { GiChart } from "react-icons/gi";
import { FaChartLine } from 'react-icons/fa';
import { FaDog, FaSearch } from "react-icons/fa";
import { SiJfrog } from "react-icons/si";
import { FaBox } from 'react-icons/fa';
import { Box, Typography, Button, Stepper, Step, StepLabel, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import axios from "axios";

const AppForm = () => {
    const steps = [
        {
            id: 1,
            step: "Choisir l'outil de versioning",
            options: [
                { label: "Github", icon: <SiGithub /> },
                { label: "Gitlab", icon: <SiGitlab /> },
                { label: "Bitbucket", icon: <SiBitbucket /> },
                { label: "Azure DevOps", icon: <FaMicrosoft /> },
            ],
        },
        {
            id: 2,
            step: "Choisir le type d'hébergement",
            options: [
                { label: "Cloudhub2.0", icon: <MdCloud /> },
                { label: "On-Premises", icon: <FaServer /> },
            ],
        },
        {
            id: 3,
            step: "Choisir l'outil de monitoring",
            options: [
                { label: "Grafana", icon: <GiChart /> },
                { label: "ELK", icon: <FaChartLine /> },
                { label: "Datadog", icon: <FaDog /> },
                { label: "Splunk", icon: <FaSearch /> },
            ],
        },
        {
            id: 4,
            step: "Choisir l'outil d'hébergement du jar",
            options: [
                { label: "Jfrog", icon: <SiJfrog /> },
                { label: "Nexus", icon: <FaBox /> },
            ],
        },
    ];
    const [orderDetails, setOrderDetails] = useState<any>(null);
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
            setOrderDetails(dataToSend)
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
                    <a href="/bookOrder"><FaShoppingCart className="text-gray-700 hover:text-blue-500 text-2xl" /></a>
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
                    <Typography variant="h5" gutterBottom style={{color:"gray"}}>
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
                                <div style={{ marginRight: "10px", color: selectedOptions[currentStepIndex] === option.label ? "#007bff" : "#000" }}>
                                    {option.icon}
                                </div>
                                <span>{option.label}</span>
                            </div>
                        ))}
                    </div>
                    <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
                        <Button variant="contained" disabled={currentStepIndex === 0} onClick={handleBack}>
                        Précédent
                        </Button>
                        {currentStepIndex === steps.length - 1 ? (
                            <Button variant="contained" onClick={handleSubmit} disabled={!selectedOptions[currentStepIndex]}>
                                Soumettre
                            </Button>
                        ) : (
                            <Button variant="contained" onClick={handleNext} disabled={!selectedOptions[currentStepIndex]}>
                                Suivant
                            </Button>
                        )}
                    </Box>
                </Box>
                       <Dialog open={openPopup} onClose={handleClosePopup}>
            <DialogTitle sx={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1c6ed6' }}>
                <FaCheckCircle style={{ color: '#1c6ed6', marginRight: '8px' }} />
                Commande Soumise
            </DialogTitle>
            <DialogContent sx={{
                padding: '20px', 
                backgroundColor: '#f1f9ff', 
                borderRadius: '8px', 
                color: '#333',
                boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
                lineHeight: 1.6
            }}>
                <Typography variant="body1" sx={{ marginBottom: '16px' }}>
                    Votre commande a été soumise avec succès et est maintenant en attente d'approbation de l'administrateur.
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#007bff' }}>
                    Détails de la commande :
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '8px' }}>
                    <strong>Outil de versioning</strong> : {orderDetails?.versioningTool || "Non sélectionné"}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '8px' }}>
                    <strong>Type d'hébergement</strong> : {orderDetails?.hostingType || "Non sélectionné"}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '8px' }}>
                    <strong>Outil de surveillance</strong> : {orderDetails?.monitoringTool || "Non sélectionné"}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '16px' }}>
                    <strong>Outil d'hébergement du jar</strong> : {orderDetails?.hostingJarTool || "Non sélectionné"}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClosePopup} color="primary" sx={{
                    backgroundColor: '#007bff', 
                    color: '#fff', 
                    '&:hover': {
                        backgroundColor: '#0056b3'
                    }
                }}>
                    Fermer
                </Button>
            </DialogActions>
        </Dialog>
            </Box>
        </div>
    );
};

export default AppForm;
