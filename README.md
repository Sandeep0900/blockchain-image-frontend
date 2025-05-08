# 🔐 Decentralized Document Vault

A secure and decentralized platform that allows users to store **important documents (images)** on **IPFS** with **blockchain verification** using **MetaMask**. Built with **React**, **Node.js**, **Express**, and **Ethereum Smart Contracts**.

---

## 📸 Features

- ✅ Upload image files (JPEG, PNG) securely
- ✅ Store documents on **IPFS** using Pinata
- ✅ Save the IPFS hash to the Ethereum blockchain
- ✅ Verify ownership through MetaMask wallet
- ✅ Fully decentralized and censorship-resistant
- ✅ Toast notifications for feedback

---

## 🛠️ Tech Stack

| Layer       | Technology                        |
|-------------|------------------------------------|
| Frontend    | React.js, Tailwind CSS             |
| Backend     | Node.js, Express.js                |
| Blockchain  | Ethereum Smart Contracts (Solidity)|
| Storage     | IPFS via Pinata                    |
| Auth        | MetaMask Wallet                    |
| UI/UX       | React Hot Toast, Lucide Icons      |
| Deployment  | Vercel (Frontend) + Render (Backend) |

---

## ⚙️ How It Works

1. Connect your **MetaMask** wallet.
2. Upload a document (image format only).
3. File is sent to **IPFS** (via backend API).
4. The **IPFS hash** is stored on the **blockchain** through a smart contract.
5. You retain full ownership and access — permanently!

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MetaMask installed
- Pinata account (for IPFS)
- Ethereum testnet wallet (Goerli/Polygon Mumbai)

### Clone the repo

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```



📦 Installation
🔹 Backend
    cd server
    npm install
    # Add .env with PINATA, JWT_SECRET, etc.
    npm start
🔹 Frontend
    cd client
    npm install
    npm run dev

🔐 Environment Variables
Create a .env file in the server directory with:
  PINATA_API_KEY=your_api_key
  PINATA_SECRET_API_KEY=your_secret_key
  JWT_SECRET=your_jwt_secret

🧪 Smart Contract
      Deploy your smart contract to a testnet.

      Get the contract address and ABI.

      Update the frontend accordingly in your useWeb3Context.

📂 Folder Structure
    ├── client/               # Frontend React code
    │   ├── components/
    │   ├── contexts/
    │   └── pages/
    ├── server/               # Backend Node/Express code
    │   └── routes/
    │   └── middleware/
    │   └── controllers/
    ├── smart-contract/       # Solidity code (optional)

🧱 Future Improvements
    📄 Add PDF/DOCX support

    🧑‍🤝‍🧑 Share documents with others via wallet address

    🧠 Add file versioning + audit logs

    🔐 End-to-end encryption for enhanced security

📎 Live Demo: 🔗 [blockchain-Doc-Store](https://blockchain-image-frontend.vercel.app/)

🤝 Contributing
      Pull requests are welcome! For major changes, please open an issue first to discuss.

📜 License
      MIT

🙋‍♂️ Author
Sandeep Sharma
📬 Connect on LinkedIn
📧 Email: sandeesharma09@gmail.com

