import React from 'react'

function LoadingScreen() {
    return (
        <div className="flex justify-center items-center h-screen bg-base-navy">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-accent-yellow duration-500"></div>
        </div>
    );
}

export default LoadingScreen