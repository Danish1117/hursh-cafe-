import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Haru Signature Latte',
    description: 'Our house blend espresso with steamed oat milk and a hint of organic maple syrup.',
    price: '$6.50',
    category: 'coffee',
    image: 'https://picsum.photos/400/400?random=1',
    popular: true
  },
  {
    id: '2',
    name: 'Espresso Tonic',
    description: 'Double shot of espresso over ice and premium tonic water, garnished with rosemary.',
    price: '$5.50',
    category: 'coffee',
    image: 'https://picsum.photos/400/400?random=2'
  },
  {
    id: '3',
    name: 'Matcha Cream',
    description: 'Ceremonial grade matcha from Kyoto topped with sweet vanilla cream foam.',
    price: '$7.00',
    category: 'non-coffee',
    image: 'https://picsum.photos/400/400?random=3',
    popular: true
  },
  {
    id: '4',
    name: 'Hojicha Latte',
    description: 'Roasted green tea latte with a nutty, earthy flavor profile.',
    price: '$6.00',
    category: 'non-coffee',
    image: 'https://picsum.photos/400/400?random=4'
  },
  {
    id: '5',
    name: 'Basque Cheesecake',
    description: 'Creamy, caramelized "burnt" cheesecake with a soft, custard-like center.',
    price: '$8.00',
    category: 'dessert',
    image: 'https://picsum.photos/400/400?random=5',
    popular: true
  },
  {
    id: '6',
    name: 'Earl Grey Scone',
    description: 'Buttery scone infused with Earl Grey tea leaves, served with clotted cream.',
    price: '$4.50',
    category: 'dessert',
    image: 'https://picsum.photos/400/400?random=6'
  },
  {
    id: '7',
    name: 'Avocado Toast',
    description: 'Sourdough bread topped with smashed avocado, radish, and chili flakes.',
    price: '$12.00',
    category: 'food',
    image: 'https://picsum.photos/400/400?random=7'
  }
];

export const SYSTEM_INSTRUCTION = `
You are "Haru," the virtual head barista of Haru Cafe. 
Your tone is warm, inviting, aesthetic, and knowledgeable about coffee.
Haru Cafe is known for its serene atmosphere, wooden interior, and high-quality specialty coffee.
You should help customers decide what to order based on their preferences (e.g., sweet vs. bitter, hot vs. cold, caffeine vs. decaf).
You can also answer questions about the cafe's vibe (cozy, good for working, pet-friendly).
Refer to the following menu items when making recommendations:
${MENU_ITEMS.map(item => `- ${item.name} (${item.category}): ${item.description}`).join('\n')}

Keep your responses concise (under 100 words unless asked for a story) and friendly. 
If asked about location, we are located at the heart of the city near the central park (fictional).
Open daily from 8:00 AM to 8:00 PM.
`;
