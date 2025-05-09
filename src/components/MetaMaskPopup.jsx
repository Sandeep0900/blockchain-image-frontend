// src/components/MetaMaskPopup.jsx
import React from "react";

const MetaMaskPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md text-center">
        <h2 className="text-lg font-semibold mb-3 text-red-600">MetaMask Not Detected</h2>
        <p className="text-gray-700 text-sm mb-4">
          To use this application, install the MetaMask Chrome extension:
        </p>
        <ol className="text-left text-gray-600 text-sm list-decimal pl-6 mb-4">
          <li>
            Go to{" "}
            <a
              href="https://metamask.io/download/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://metamask.io/download
            </a>
          </li>
          <li>Choose your browser and install the extension.</li>
          <li>Pin the MetaMask icon to your toolbar.</li>
          <li>Create or import your wallet.</li>
          <li>Refresh this page and try again.</li>
        </ol>
        <button
          onClick={onClose}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default MetaMaskPopup;
