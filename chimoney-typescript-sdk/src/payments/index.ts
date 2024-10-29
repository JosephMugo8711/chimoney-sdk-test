import { Base } from "../base";
import { 
    ChimoneyPayout,
} from "./types";

// Abstract payment to a constant
//const resource = 'payouts'; // Set the appropriate resource path
const CHIMONEY_PAYOUT_RESOURCE = 'payouts/chimoney';


// interface for the response
// interface ChimoneyPayoutResponse {
//     // Define the shape of the response data for Chimoney payouts


// }


// Define a class that extends Base, handling payments-related functionality

export class Payments extends Base {
    /**
     * Method to initiate a Chimoney payout
     * 
     * This method creates a payout specifically for chimoney by posting
     * the provided payout data to the Chimoney endpoint
     * @param payouData - THe data required for the Chimoney payout, following the ChimoneyPayout structure
     * @returns A promise resolving to the API response, typically containing details of the created payout
     * @extends {Base}
     */
        async createChimoneyPayout(payout: ChimoneyPayout): Promise<any> {
            // Call the paymentPost method with the specific endpoint for Chimoney payouts
            return await this.paymentPost(`${CHIMONEY_PAYOUT_RESOURCE}`, payout);
        }
        /**
     * Generic method to post a payout request to various endpoints
     * 
     * This method abstracts the logic for posting data to a given endpoint
     * It can be reused by different types of payouts, ensuring consistent
     * request handling across different payout methods
     * 
     * 
     * 
     * 
     * @template T - The type of data required for each payout request, allowing flexibility for different payload structures
     * @param endpoint - The specific API endpoint for the payout type (e.g,  'payouts/chimoney')
     * @param payoutData - The data for the payout request, typed as 'T' to allow flexibility
     * @returns A promise resolving to the API response for the payout request
     * @throws A promise resolving to the API response for the payout request
     */

        private async paymentPost<T>(endpoint: string, payoutData: T): Promise<any> {
            try {
                // Use the post method inherited from the Base class to send data to the endpoint
                const response = await this.post(endpoint, payoutData);
                return response;

            } catch (error) {
                // Provide detailed error inforamtion for troubleshooting
                throw new Error(`Failed to process ${endpoint}: ${error.message || error }`)
            }
        }
    


    
}



    // // Method for Mobile Money Payout
    // async createMobileMoneyPayout(payoutData: MobileMoneyPayout): Promise<any> {
    //     return await this.paymentPost(`${resource}/mobile-money-payout`, payoutData);
    // }

    // // Method for Airtime Payout
    // async createAirtimePayout(payoutData: AirtimePayout): Promise<any> {
    //     return await this.paymentPost(`${resource}/airtime-payout`, payoutData);
    // }

    // // Method for Bank Payout
    // async createBankPayout(payoutData: BankPayout): Promise<any> {
    //     return await this.paymentPost(`${resource}/bank-payout`, payoutData);
    // }

    // // Method for Gift Card Payout
    // async createGiftCardPayout(payoutData: GiftCardPayout): Promise<any> {
    //     return await this.paymentPost(`${resource}/giftcard-payout`, payoutData);
    // }

    // // Method for XRPL Payout
    // async createXRPLPayout(payoutData: XRPLPayout): Promise<any> {
    //     return await this.paymentPost(`${resource}/xrpl-payout`, payoutData);
    // }