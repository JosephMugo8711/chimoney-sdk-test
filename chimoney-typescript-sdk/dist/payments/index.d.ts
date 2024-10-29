import { Base } from "../base";
import { ChimoneyPayout } from "./types";
export declare class Payments extends Base {
    createChimoneyPayout(payout: ChimoneyPayout): Promise<any>;
    private paymentPost;
}
