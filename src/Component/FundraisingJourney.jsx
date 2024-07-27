import React from 'react';

const SpeedyRecovery = () => {
    const buttonStyle = {
        width: '270px', 
    };

    return (
        <>
            <div style={{ marginTop: 70,marginBottom:50 }}>
                <div className='text-[30px] text-center mb-5'>
                    Your fundraising journey is successful! We wish you a speedy recovery!
                </div>
                <div className="flex justify-center space-x-4">
                    <button style={buttonStyle} className="bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        START A FREE FUNDRAISER
                    </button>
                    <button style={buttonStyle} className="border-2 border-blue-500 text-blue-500 font-bold py-2 px-4 rounded">
                        GET A CALLBACK
                    </button>
                </div>
            </div>
        </>
    );
}

export default SpeedyRecovery;
