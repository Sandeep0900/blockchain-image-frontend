import { ethers } from "ethers";
import contractAbi from "../constants/contractAbi.json";
import toast from "react-hot-toast";
import axios from "axios";

export const connectWallet = async () => {
  let loadingToast;
  try {
    if (!window.ethereum) {
      toast.error("MetaMask is not installed");
      return { error: "NO_METAMASK" };  // <-- This tells Wallet.jsx to show popup
    }

    loadingToast = toast.loading("Connecting to wallet...");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const selectedAccount = accounts[0];

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const message = "Welcome to Crypto Vault Website";
    const signature = await signer.signMessage(message);

    const dataSignature = { signature };
    const url = `https://blockchain-image-server.onrender.com/api/authentication?address=${selectedAccount}`;
    const res = await axios.post(url, dataSignature);
    const token = res.data.token;

    localStorage.setItem("token", token);

    const contractAddress = "0x53739B9302192a91979b99b2E645B3a42d941318";
    const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);

    // Dismiss loading toast and show success
    toast.dismiss(loadingToast);
    toast.success("Wallet connected successfully!");

    return { contractInstance, selectedAccount };
  } catch (error) {
    if (loadingToast) toast.dismiss(loadingToast);
    toast.error("Wallet connection failed");
    console.error(error);
    return { error: "WALLET_CONNECTION_FAILED" };
  }
};
