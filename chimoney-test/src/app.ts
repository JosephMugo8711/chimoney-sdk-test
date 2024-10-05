import dotenv from 'dotenv';
import Typicode from 'chimoney-typescript-sdk'; // Assuming you have an SDK named Typicode

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

//  Log the apikey and baseurl
// console.log(`API Key: ${process.env.API_KEY}`);
// console.log(`Base URL: ${process.env.BASE_URL}`);

// Define the MobileMoneyPayout interface with the correct fields expected by the SDK
interface MobileMoneyPayout {
    email: string;
    phone: string;
    valueInUSD: number;
    momos: {
        countryToSend: string; // Required country for the mobile money transfer
        phoneNumber: string;   // Recipient's phone number
        valueInUSD: number;    // The value in USD to be sent
        reference: string;     // Reference for the transaction
        momoCode: string;      // Mobile money code for the service provider
        narration: string;     // Description of the transaction
        collectionPaymentIssueID: string; // Issue ID for collection payments
    }[];
}

// Function to create payout data dynamically
function createPayoutData(
    email: string,
    phone: string,
    valueInUSD: number,
    countryToSend: string,
    reference: string,
    momoCode: string,
    collectionPaymentIssueID: string,
    narration: string
): MobileMoneyPayout {
    return {
        email,
        phone,
        valueInUSD,
        momos: [
            {
                countryToSend, // Country to send the payment
                phoneNumber: phone, // Recipient's phone number
                valueInUSD, // The amount in USD
                reference, // Transaction reference
                momoCode, // Mobile money code (for the provider, e.g., MTN)
                narration, // Narration for the payment
                collectionPaymentIssueID // Issue ID related to the payment collection
            }
        ]
    };
}

// Example function to test the mobile money payout API call
async function testMobilePayment() {
    // Define the payout data (replace values accordingly)
    const payoutData = createPayoutData(
        "recipient@example.com",  // Replace with the recipient's email
        "1234567890",             // Replace with the recipient's phone number
        50,                       // Replace with the amount in USD
        "KE",                     // Country to send the mobile money (e.g., "KE" for Kenya)
        "TXN123456",              // Replace with a unique transaction reference
        "MOMO123",                // Mobile Money Code (specific to the provider)
        "COLLECT123",             // Collection payment issue ID
        "Payment for services rendered" // Narration for the payment
    );

    try {
        // Call the createMobileMoneyPayout method from the SDK
        const response = await client.createMobileMoneyPayout(payoutData); // Use the actual method from your SDK
        console.log('Mobile Money Payout Response:', response);
        
    } catch (error) {
        console.error('Error creating mobile money payout:', error);
    }
}

// Run the test
testMobilePayment();
