import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google'; // Import Lusitana font

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify font weights
});
