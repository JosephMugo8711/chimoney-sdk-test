export declare type ChimoneyPayout = {
    subAccount?: string;
    turnOffNotification?: boolean;
    chimoneys?: Array<{
        email: string;
        phone: string;
        valueInUSD: number;
        amount: number;
        currency: string;
        narration: string;
        collectionPaymentIssueID?: string;
        redeemData: {
            walletID: string;
            interledgerWalletAddress: string;
        };
    }>;
};
export declare type MobileMoneyPayout = {
    subAccount?: string;
    turnOffNotification?: boolean;
    momos: Array<{
        countryToSend: string;
        phoneNumber: string;
        valueInUSD: number;
        reference: string;
        momoCode: string;
        narration: string;
        collectionPaymentIssueID: string;
    }>;
};
export declare type AirtimePayout = {
    subAccount?: string;
    turnOffNotification?: boolean;
    airtimes: Array<{
        countryToSend: string;
        phoneNumber: string;
        valueInUSD: string;
        narration: string;
        collectionPaymentIssueID: string;
    }>;
};
export declare type BankPayout = {
    subAccount?: string;
    turnOffNotification?: boolean;
    debitCurrency: string;
    banks: Array<{
        countryToSend: string;
        account_bank: string;
        account_number: string;
        valueInUSD: number;
        amount: number;
        reference: string;
        fullname?: string;
        branch_code?: string;
        narration: string;
        collectionPaymentIssueID?: string;
    }>;
};
export declare type GiftCardPayout = {
    subAccount?: string;
    turnOffNotification?: boolean;
    giftcards: Array<{
        email: string;
        valueInUSD: number;
        narration: string;
        collectionPaymentIssueID: string;
        redeemData: {
            productId: string;
            countryCode: string;
            valueInLocalCurrency: number;
        };
    }>;
};
export declare type XRPLPayout = {
    subAccount?: string;
    turnOffNotification?: boolean;
    redirect_url?: string;
    debitCurrency?: string;
    chimoneys: Array<{
        email: string;
        phone: string;
        valueInUSD: number;
        amount: number;
        currency: string;
        narration: string;
        redeemData: {
            walletID: string;
            interledgerWalletAddress: string;
            account_bank: string;
            account_number: string;
            branch_code?: string;
            fullname: string;
        };
        enableXUMMPayment?: boolean;
        enableInterledgerPayment?: boolean;
        cryptoPayment?: Array<{}>;
    }>;
};
