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
console.log(`API Key: ${process.env.API_KEY}`);
console.log(`Base URL: ${process.env.BASE_URL}`);
function createPayoutData(email, phone, valueInUSD, countryToSend, reference, momoCode, collectionPaymentIssueID, narration) {
    return {
        email,
        phone,
        valueInUSD,
        momos: [
            {
                countryToSend,
                phoneNumber: phone,
                valueInUSD,
                reference,
                momoCode,
                narration,
                collectionPaymentIssueID
            }
        ]
    };
}
async function testMobilePayment() {
    const payoutData = createPayoutData("recipient@example.com", "1234567890", 50, "KE", "TXN123456", "MOMO123", "COLLECT123", "Payment for services rendered");
    try {
        const response = await client.createMobileMoneyPayout(payoutData);
        console.log('Mobile Money Payout Response:', response);
    }
    catch (error) {
        console.error('Error creating mobile money payout:', error);
    }
}
testMobilePayment();
