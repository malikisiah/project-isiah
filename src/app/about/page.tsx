import { type Metadata } from 'next';
import Link from 'next/link';
import clsx from 'clsx';
import { supabase } from '@/database';

import logoBiblish from '@/images/logos/logo.png';
import logoBlackSheep from '@/images/logos/bscirclewhite.png';
import logoASU from '@/images/logos/ASU-logo.png';

import { Container } from '@/components/Container';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';
import ImageSwapper from '@/components/ImageSwapper';
import Image, { type ImageProps } from 'next/image';
import { Button } from '@/components/Button';

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-cyan-500 dark:text-zinc-200 dark:hover:text-cyan-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-cyan-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

interface Role {
  company: string;
  title: string;
  logo: ImageProps['src'];
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label;
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime;

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label;
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full">
        <Image src={role.logo} alt="" className="size-8 rounded-md" />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}
function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Biblish',
      title: 'Software Developer',
      logo: logoBiblish,
      start: 'April 2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'The Black Sheep',
      title: 'Software Developer',
      logo: logoBlackSheep,
      start: 'August 2023',
      end: 'April 2024',
    },
    {
      company: 'Arizona State University',
      title: 'Teaching Assistant/Tutor',
      logo: logoASU,
      start: 'September 2022',
      end: 'May 2023',
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button variant="secondary" className="group mt-6 w-full">
        Download
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Malik Teague. I live in Chicago, where I turn ideas into reality.',
};

export default async function About() {
  const { data: blogPosts } = await supabase.from('blog_posts').select('*');
  console.log(blogPosts);
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <ImageSwapper />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Malik. A Software Engineer from Chicago.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I remember writing my first <q>Hello World</q> program in Java
              back in college. I had almost no programming experience until that
              point and now, years later, here I am. Having realized so much
              about computers and programming, yet feeling that I have only
              scratched the surface of the entire eco-system that surrounds
              developing and maintaining software.
            </p>
            <p>
              College was a surreal experience. I enjoyed getting to network and
              connect with so many unique individuals with talents spanning the
              spectrum! My nose was buried in textbooks that covered topics
              ranging from algorithmic time complexity to finite automata, and
              it is thanks to my foundation in Computer Science that has enabled
              me to excel as an engineer.
            </p>
            <p>
              After graduation, I decided to pack my bags and return to my
              hometown of Chicago. It had always been a dream of mine to live
              and work in the Windy City. I enjoy the vibrant culture,
              world-class ethnic restaurants, lively music scene, and especially
              its historic architecture.
            </p>
            <p>
              Today, I&apos;m the sole Software Developer of Biblish, a startup
              where we&apos;re working on building a home for literature in the
              21st century. We&apos;re enabling writers, publishers, and actors
              a place to connect and take their talents to the next level.
            </p>
          </div>
        </div>
        <div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
          <div className="mt-12 lg:pl-20">
            <ul role="list ">
              <SocialLink
                href="https://github.com/malikisiah"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/malikjordanteague/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:malikisiah214@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                malik@malikisiah.dev
              </SocialLink>
            </ul>{' '}
          </div>
        </div>
      </div>
    </Container>
  );
}
