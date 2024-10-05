import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Define the Config type
type Config = {
    apikey: string;
    baseUrl?: string;
};

export class Base {
    // Private properties for API key and base URL
    private readonly apiKey: string;
    private readonly baseUrl: string;

    constructor(config: Config) {
        // Use provided config or fallback to environment variables
        const { apikey, baseUrl } = config;

        // Validate the API key
        if (!apikey && !process.env.API_KEY) {
            throw new Error('API key must be provided either in config or environment variables.');
        }

        this.apiKey = apikey || (process.env.API_KEY as string);
        this.baseUrl = baseUrl || (process.env.BASE_URL as string) || ''; // Ensure baseUrl is a string
    }

    // Method to get the base URL
    protected getBaseUrl(): string {
        if (!this.baseUrl) {
            throw new Error('Base URL is not defined. Please provide a valid base URL.');
           
        }
        return this.baseUrl;

    }

    // Method to get the API key
    protected getApiKey(): string {
        return this.apiKey;
    }

    // Generic API request method
    protected async apiRequest(endpoint: string, options: RequestInit = {}): Promise<any> {
        try {
            const response = await fetch(`${process.env.BASE_URL as string}/${endpoint}`, {
                ...options,
                headers: {
                    ...options.headers,
                    'Authorization': `Bearer ${process.env.API_KEY as string}`,
                    'Content-Type': 'application/json',
                },
            });
            // log this.getBaseUrl and this. getApikey
            // initiates the function
            // console.log(`getApikey: ${this.getApiKey()}`)
            // console.log(`getBaseurl: ${this.getBaseUrl()}`)

            if (!response.ok) {
                const errorMessage = await response.text(); // Capture error message from response
                throw new Error(`API request failed: ${response.statusText} - ${errorMessage}`);
            }




            return await response.json(); // Return parsed JSON response
        } catch (error) {
            console.error('API Request Error:', error);
            throw error; // Re-throw the error after logging

        }
    }

    // POST request method
    protected async post(endpoint: string, data: any): Promise<any> {
        return await this.apiRequest(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    // GET request method (optional if needed)
    protected async get(endpoint: string): Promise<any> {
        return await this.apiRequest(endpoint, {
            method: 'GET',
        });
    }
}
