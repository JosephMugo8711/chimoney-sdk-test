type Config = {
    apikey: string;
    baseUrl?: string;
};
export declare class Base {
    private readonly apiKey;
    private readonly baseUrl;
    constructor(config: Config);
    protected getBaseUrl(): string;
    protected getApiKey(): string;
    protected apiRequest(endpoint: string, options?: RequestInit): Promise<any>;
    protected post(endpoint: string, data: any): Promise<any>;
    protected get(endpoint: string): Promise<any>;
}
export {};
