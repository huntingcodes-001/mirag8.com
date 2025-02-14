export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface ContactFormData {
  name: string;
  number: string;
  email: string;
  message: string;
}

export interface DemoFormData {
  name: string;
  address: string;
  number: string;
}