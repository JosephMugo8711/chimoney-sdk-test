import { Base } from "../base";
import { ChimoneyPayout, MobileMoneyPayout, AirtimePayout, BankPayout, GiftCardPayout, XRPLPayout } from "./types";
export declare class Payments extends Base {
    createChimoneyPayout(payoutData: ChimoneyPayout): Promise<any>;
    createMobileMoneyPayout(payoutData: MobileMoneyPayout): Promise<any>;
    createAirtimePayout(payoutData: AirtimePayout): Promise<any>;
    createBankPayout(payoutData: BankPayout): Promise<any>;
    createGiftCardPayout(payoutData: GiftCardPayout): Promise<any>;
    createXRPLPayout(payoutData: XRPLPayout): Promise<any>;
    private paymentPost;
}
