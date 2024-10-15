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
