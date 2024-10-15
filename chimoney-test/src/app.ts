import dotenv from 'dotenv';
import Typicode from 'chimoney-typescript-sdk'; // Assuming the SDK is named Typicode

// Load environment variables from .env file
dotenv.config();

// Check if API key is defined
if (!process.env.API_KEY) {
    throw new Error("API_KEY is not defined in the environment variables");
}

// Create an instance of Typicode with the API key from the environment variables
const client = new Typicode({
    apikey: process.env.API_KEY // Ensure you access the API key from the environment variables
});

// log the api and the baseurl


console.log(`API: ${process.env.API_KEY}`);
console.log(`Base URL: ${process.env.BASE_URL}`);


// Define the ChimoneyPayout interface based on the provided structure
interface ChimoneyPayout {
    subAccount?: string; // Optional subaccount (wallet) to payout from
    turnOffNotification?: boolean; // Optional flag to disable email notifications
    chimoneys?: Array<{
        email: string; // Recipient email address
        phone: string; // Recipient phone number with country code
        valueInUSD: number; // Amount in USD to send
        amount: number; // Amount in the specified currency
        currency: string; // ISO Currency String (e.g., USD, CAD)
        narration: string; // Description/narration for the payment
        collectionPaymentIssueID?: string; // Optional issue ID for payout initiated
        redeemData: {
            walletID: string; // Chimoney Wallet ID for deposit
            interledgerWalletAddress: string; // Wallet address to settle payment
        };
    }>;
}

// Function to dynamically create Chimoney payout data
function createPayoutData(): ChimoneyPayout {
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

// Function to test the Chimoney Payout API call
async function testChimoneyPayment() {
    // Generate the payout data using the createPayoutData function
    const payoutData = createPayoutData();

    try {
        // Call the createChimoneyPayout method from the SDK
        const response = await client.createChimoneyPayout(payoutData);
        console.log('Chimoney Payout Response:', response);
    } catch (error) {
        console.error('Error creating Chimoney payout:', error);
    }
}

// Run the test
testChimoneyPayment();
