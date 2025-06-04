import { SimpleLayout } from '@/components/SimpleLayout';

const faqs = [
  {
    id: 1,
    question: 'Will the app remain free?',
    answer:
      "The core features of the app are currently free and we're committed to keeping it accessible. In the future, we may introduce premium features or subscription options to support continued development, but we'll always be transparent about any changes.",
  },
  {
    id: 2,
    question: "I can't see the workout videos!",
    answer:
      "Make sure you're logged into via gmail. If you're still not seeing workouts, try refreshing the app or reaching out to support so we can help troubleshoot.",
  },
  {
    id: 3,
    question: 'How can I request a new feature?',
    answer:
      "Soon, we'll have a feature request form available in the app. In the meantime, feel free to reach out to our support team with your suggestions, and we'll consider them for future updates.",
  },
];

export default function Page() {
  return (
    <SimpleLayout
      title="DeSalvo Fitness"
      intro="A fitness app that connects you with your trainer, Chris DeSalvo."
    >
      <p className="text-zinc-400">
        Support email:{' '}
        <a
          href="mailto:malik@malikisiah.dev"
          className="font-bold text-cyan-600 hover:text-cyan-500"
        >
          malik@malikisiah.dev
        </a>
      </p>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Frequently asked questions
        </h2>
        <p className="mt-6 max-w-2xl text-base/7 text-zinc-400">
          Have a different question and can’t find the answer you’re looking
          for? Reach out to our{' '}
          <a
            href="mailto:malik@malikisiah.dev"
            className="font-semibold text-cyan-600 hover:text-cyan-500"
          >
            support team by email
          </a>{' '}
          and we’ll get back to you as soon as we can.
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base/7 font-semibold">{faq.question}</dt>
                <dd className="mt-2 text-base/7 text-zinc-400">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </SimpleLayout>
  );
}
