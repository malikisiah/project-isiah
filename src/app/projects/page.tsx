import { type Metadata } from 'next';
import Image from 'next/image';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import biblishLogo from '@/images/logos/logo.png';
import expoLogo from '@/images/logos/banner.png';
import nextLogo from '@/images/logos/next-js-icon-512x512-zuauazrk.png';
import springLogo from '@/images/logos/springBoot.png';
import tensorflowLogo from '@/images/logos/tensorflow-icon-955x1024-hd4xzbqj.png';

const projects = [
  {
    name: 'Biblish',
    description:
      'Creating technology to empower writers, publishers, and actors to make a literary impact in the 21st century.',
    link: {
      href: 'https://biblish.com',
      label: 'biblish.com',
    },
    logo: biblishLogo,
  },
  {
    name: 'Personal Mobile App',
    description:
      'Handy React Native application that is in sync with my database which allows me to make realtime changes to this very site!',
    link: {
      href: 'https://github.com/malikisiah/project-isiah-blogger',
      label: 'github.com',
    },
    logo: expoLogo,
  },

  {
    name: 'Images REST API',
    description:
      'Shorter demo project covering Java Spring framework with dependency injection, HTTP requests, & AOP style code.',
    link: { href: 'https://github.com/malikisiah/photos', label: 'github.com' },
    logo: springLogo,
  },
  {
    name: 'Special Affair',
    description:
      'Dance Studio business website. This holds a special place in my repo list as it was my first endeavor into full-stack development.',
    link: {
      href: 'https://special-affair.vercel.app',
      label: 'special-affair.vercel.app',
    },
    logo: nextLogo,
  },
  {
    name: 'AI & Machine Learning',
    description:
      'Creating my own models with Tensorflow. This repo contains mostly learning excersises but I will have AI/ML applications soon!',
    link: {
      href: 'https://github.com/malikisiah/AI',
      label: 'github.com',
    },
    logo: tensorflowLogo,
  },
];

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 J0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'Projects',
  description: "Some cool stuff that I've created",
};

export default function Projects() {
  return (
    <SimpleLayout
      title="A Few Projects I've Brought to Life"
      intro="Across years of work and experimentation, I've built a range of projects—some live and serving real users, others personal prototypes created for learning or enjoyment. These are the ones I’m most proud of. Take a look."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-11 w-11 rounded-full"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-cyan-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  );
}
