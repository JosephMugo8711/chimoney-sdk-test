import { Base } from "../base";
import { ChimoneyPayout } from "./types";
export declare class Payments extends Base {
    createChimoneyPayout(payoutData: ChimoneyPayout): Promise<any>;
    private paymentPost;
}
