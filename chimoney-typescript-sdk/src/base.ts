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

    protected async apiRequest(endpoint: string, options: RequestInit = {}): Promise<any> {
        console.log(`Making request to: ${this.getBaseUrl()}/${endpoint}`);
        console.log(`Using API key: ${this.getApiKey()}`);
        try {
            const response = await fetch(`${this.getBaseUrl()}/${endpoint}`, {
                ...options,
                headers: {
                    ...options.headers,
                    'Authorization': `Bearer ${this.getApiKey()}`, // Change this to use this.getApiKey()
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`API request failed: ${response.statusText} - ${errorMessage}`);
            }
    
            return await response.json();
        } catch (error) {
            console.error('API Request Error:', error);
            throw error;
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
