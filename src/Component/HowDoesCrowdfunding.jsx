import React, { useRef, useEffect, useState } from 'react';
import "../css/style.css";
import step1 from "../assets/Images/Step1.mp4";
import step2 from "../assets/Images/Step2.mp4";
import step3 from "../assets/Images/Step3.mp4";

const HowDoesCrowdfunding = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const videoRefs = [useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        const playNextVideo = () => {
            if (currentStep < videoRefs.length) {
                videoRefs[currentStep].current.play();
            }
        };

        playNextVideo();

        const handleVideoEnd = () => {
            if (currentStep < videoRefs.length - 1) {
                setCurrentStep(currentStep + 1);
            } else {
                setCurrentStep(0); // Reset to first step after the last video
            }
        };

        const currentVideoRef = videoRefs[currentStep].current;
        currentVideoRef.addEventListener('ended', handleVideoEnd);

        return () => {
            currentVideoRef.removeEventListener('ended', handleVideoEnd);
        };
    }, [currentStep]);

    const handleStepClick = (stepIndex) => {
        if (stepIndex !== currentStep) {
            setCurrentStep(stepIndex);
        }
    };

    return (
        <div className='flex justify-center mt-8 mb-8'>
            <div className='w-full md:w-3/5'>
                <div className='text-[30px] text-center mb-3'>
                    How Does Crowdfunding on ImpactGuru Work?
                    <hr className="divider" style={{ marginTop: 20, marginBottom: 30 }} />
                </div>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='w-full md:w-1/2 p-4'>
                        <div className='step-container'>
                            {[...Array(3)].map((_, index) => (
                                <div
                                    key={index}
                                    className={`step ${currentStep === index ? 'step-active' : 'step-inactive'}`}
                                    onClick={() => handleStepClick(index)}
                                >
                                    <p>{index + 1}</p>
                                    <p>{index === 0 ? 'Start a Free Fundraiser' : index === 1 ? 'Share Your Fundraiser' : 'Withdraw All Donations'}</p>
                                    <p>{index === 0 ? 'Start a free fundraiser by filling in all the relevant details' : index === 1 ? 'Share your fundraiser with friends, family, and strangers to raise funds quickly' : 'Withdraw all the money you receive at any point in your fundraising journey'}</p>
                                    <br />
                                    <hr />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 p-4 flex justify-center'>
                        {videoRefs.map((videoRef, index) => (
                            <video
                                key={index}
                                ref={videoRef}
                                src={index === 0 ? step1 : index === 1 ? step2 : step3}
                                muted
                                className={`w-3/5 ${currentStep === index ? 'block' : 'hidden'}`}
                                onClick={() => handleStepClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowDoesCrowdfunding;
