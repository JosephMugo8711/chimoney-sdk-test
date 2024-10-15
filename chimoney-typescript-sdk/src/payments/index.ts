import { Base } from "../base";
import { 
    ChimoneyPayout,
} from "./types";

// Abstract payment to a constant
//const resource = 'payouts'; // Set the appropriate resource path

export class Payments extends Base {
    // Method for Chimoney Payout
    async createChimoneyPayout(payoutData: ChimoneyPayout): Promise<any> {
        return await this.paymentPost('payouts/chimoney-payout', payoutData);
    }

    // Generic method to handle different payout types
    private async paymentPost<T>(endpoint: string, payoutData: T): Promise<any> {
        // Logic to handle the post request (can vary depending on your SDK or backend setup)
        try {
            const response = await this.post(endpoint, payoutData); // Assuming `this.post` exists in the Base class
            return response;
        } catch (error) {
            throw new Error(`Failed to process ${endpoint}: ${error}`);
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