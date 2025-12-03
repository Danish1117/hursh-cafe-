export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'coffee' | 'non-coffee' | 'dessert' | 'food';
  image: string;
  popular?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export enum ViewState {
  HOME = 'HOME',
  MENU = 'MENU',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT'
}