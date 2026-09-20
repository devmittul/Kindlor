export interface ContactFormData {
  projectType: string;
  description: string;
  name: string;
  business: string;
  email: string;
  phone: string;
  currency: 'INR' | 'USD' | 'EUR';
  budget: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  whatsAppUrl?: string;
  errors?: Record<string, string>;
}
