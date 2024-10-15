"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const chimoney_typescript_sdk_1 = __importDefault(require("chimoney-typescript-sdk"));
dotenv_1.default.config();
if (!process.env.API_KEY) {
    throw new Error("API_KEY is not defined in the environment variables");
}
const client = new chimoney_typescript_sdk_1.default({
    apikey: process.env.API_KEY
});
console.log(`API: ${process.env.API_KEY}`);
console.log(`Base URL: ${process.env.BASE_URL}`);
function createPayoutData() {
    return {
        subAccount: "exampleSubAccount",
        turnOffNotification: true,
        chimoneys: [
            {
                email: "recipient@example.com",
                phone: "+1234567890",
                valueInUSD: 100,
                amount: 120,
                currency: "USD",
                narration: "Payment for services",
                collectionPaymentIssueID: "issue123",
                redeemData: {
                    walletID: "walletID123",
                    interledgerWalletAddress: "interledgerAddress123"
                }
            }
        ]
    };
}
async function testChimoneyPayment() {
    const payoutData = createPayoutData();
    try {
        const response = await client.createChimoneyPayout(payoutData);
        console.log('Chimoney Payout Response:', response);
    }
    catch (error) {
        console.error('Error creating Chimoney payout:', error);
    }
}
testChimoneyPayment();
