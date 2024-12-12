import { redirect } from 'next/navigation';
import { type Metadata } from 'next';
export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Malik Teague. I live in Chicago, where I turn ideas into reality.',
};

export default function Page() {
  redirect('/about');
}
