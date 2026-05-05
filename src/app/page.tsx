import Image from 'next/image';

export default function ManifestoPage() {
  return (
    <main className='min-h-screen bg-[#FDFBF7] text-[#1A1A1A]'>
      {/* ── Top bar ─────────────────────────────────────────────────────── */}
      <header className='sticky top-0 z-20 flex h-[60px] items-center justify-between border-b border-[#E8E4DC] bg-[#FDFBF7]/85 px-6 backdrop-blur-md md:px-10'>
        <div className='flex items-center gap-2.5'>
          <Image
            src='/Logo Stoke.png'
            alt='Refine'
            width={26}
            height={26}
            className='shrink-0 rounded-[6px] object-contain'
          />
          <span className='text-[13px] font-medium tracking-tight text-[#1A1A1A]'>
            refine
          </span>
        </div>
        <span className='text-[12.5px] font-medium uppercase tracking-[0.08em] text-[#B5AFA8]'>
          Manifesto
        </span>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className='relative overflow-hidden border-b border-[#E8E4DC]'>
        <div className='dot-grid absolute inset-0 opacity-40' aria-hidden />
        <div className='relative mx-auto max-w-[860px] px-6 pb-20 pt-24 md:px-10 md:pb-32 md:pt-32'>
          <div className='reveal mb-7 flex items-center gap-2'>
            <span className='inline-flex items-center gap-1.5 rounded-full border border-[#E8E4DC] bg-white/70 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[#6B6560]'>
              <span className='h-1.5 w-1.5 rounded-full bg-[#F97316]' />
              Manifesto
            </span>
            <span className='text-[11px] uppercase tracking-[0.08em] text-[#B5AFA8]'>
              By Refine
            </span>
          </div>

          <h1 className='reveal reveal-2 text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#1A1A1A] md:text-[64px]'>
            Marketing has{' '}
            <span className='relative inline-block'>
              outgrown
              <span
                aria-hidden
                className='absolute bottom-1 left-0 right-0 -z-10 h-3 bg-[#FFE5D1] md:h-4'
              />
            </span>{' '}
            its tools.
          </h1>

          <p className='reveal reveal-3 mt-6 max-w-[640px] text-[16px] leading-[1.7] text-[#6B6560] md:text-[18px]'>
            Every campaign a company runs leaves behind something valuable.
            Almost none of it is accessible. This is what Refine is built to fix.
          </p>
        </div>
      </section>

      {/* ── Body ────────────────────────────────────────────────────────── */}
      <article className='mx-auto max-w-[720px] px-6 pb-32 pt-20 md:px-10'>
        <Section eyebrow='01 · The problem' title='What gets lost'>
          <p>
            Every campaign a company runs leaves behind something valuable.
            What it was trying to achieve, how it was built, what it produced.
            Multiply that by every team, every channel, every quarter, every
            region. <Strong>That&rsquo;s the most useful thing a marketing
            organization owns.</Strong>
          </p>
          <p>Almost none of it is accessible.</p>
          <p>
            It lives in dashboards no one opens, briefs no one reads, slides no
            one finds, and conversations no one wrote down. The dashboards show
            numbers without context. The task tools show coordination without
            outcomes. The strategy lives in heads.{' '}
            <Strong>Nothing connects.</Strong>
          </p>
        </Section>

        <Quote>
          So teams keep starting from blank pages. They rerun campaigns that
          were already tested. They miss what the team next door learned last
          quarter. They optimize within their tool while the real leverage sits
          one layer up, and out of reach.
        </Quote>

        <Section eyebrow='02 · The fix' title='A Company Brain for customer acquisition.'>
          <p>This is what Refine is built to fix.</p>
          <p>
            We&rsquo;re building a <Strong>Company Brain for customer
            acquisition</Strong>. One place where every team — whether SEO,
            content, paid, events, or outbound — designs their campaigns on top
            of everything the company already knows. The why, the how, the
            what-happened, surfaced across teams and geographies and tools.
          </p>
          <p>
            <Strong>No more blank pages.</Strong> No more rediscovering the same
            playbooks.
          </p>
        </Section>

        <Section
          eyebrow='03 · The shift'
          title='Humans decide what should be done. Agents do it.'
        >
          <p>
            And once a campaign is designed, an agent pushes it into the
            team&rsquo;s existing tools and runs it end-to-end. Because something
            fundamental is shifting.
          </p>
          <p>
            AI agents have collapsed the value of execution, and the people
            running marketing are moving up a layer, to the work of orchestrating
            intent into outcome. <Strong>That&rsquo;s where Refine is built to
            live.</Strong>
          </p>
          <SplitCallout
            left={{ kicker: 'Humans', text: 'decide what should be done.' }}
            right={{ kicker: 'Agents', text: 'do it.', accent: true }}
          />
        </Section>

        <Section eyebrow='04 · The thesis' title='Work that compounds.'>
          <p>
            The companies that win the next decade won&rsquo;t be the ones with
            the most tools, the biggest teams, or the cleanest dashboards.
          </p>
          <p>
            <Strong>They&rsquo;ll be the ones whose work compounds.</Strong>
          </p>
        </Section>

        {/* Closing line */}
        <div className='mt-20 border-t border-[#E8E4DC] pt-12 text-center'>
          <p className='mx-auto max-w-[560px] text-[20px] font-medium leading-[1.4] tracking-[-0.01em] text-[#1A1A1A] md:text-[24px]'>
            Refine.{' '}
            <span className='text-[#6B6560]'>
              So nothing your company learns on your customer is ever lost.
            </span>
          </p>
        </div>
      </article>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className='border-t border-[#E8E4DC] bg-[#FDFBF7]'>
        <div className='mx-auto flex max-w-[860px] items-center justify-between px-6 py-8 md:px-10'>
          <div className='flex items-center gap-2'>
            <Image
              src='/Logo Stoke.png'
              alt='Refine'
              width={20}
              height={20}
              className='rounded-[4px] object-contain'
            />
            <span className='text-[12px] text-[#8A837C]'>
              © {new Date().getFullYear()} Refine
            </span>
          </div>
          <div className='text-[12px] uppercase tracking-[0.08em] text-[#B5AFA8]'>
            Manifesto
          </div>
        </div>
      </footer>
    </main>
  );
}

// ── Atoms ──────────────────────────────────────────────────────────────────

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className='mb-16'>
      <div className='mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#B5AFA8]'>
        {eyebrow}
      </div>
      <h2 className='mb-5 text-[26px] font-semibold leading-[1.2] tracking-[-0.025em] text-[#1A1A1A] md:text-[32px]'>
        {title}
      </h2>
      <div className='space-y-5 text-[16px] leading-[1.75] text-[#3a3632] md:text-[17px]'>
        {children}
      </div>
    </section>
  );
}

function Strong({ children }: { children: React.ReactNode }) {
  return <strong className='font-semibold text-[#1A1A1A]'>{children}</strong>;
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className='my-12 border-l-2 border-[#F97316] bg-[#FFF8F1] px-6 py-5 text-[17px] italic leading-[1.7] text-[#1A1A1A] md:text-[19px]'>
      {children}
    </blockquote>
  );
}

function SplitCallout({
  left,
  right,
}: {
  left: { kicker: string; text: string; accent?: boolean };
  right: { kicker: string; text: string; accent?: boolean };
}) {
  return (
    <div className='my-10 grid grid-cols-1 gap-4 md:grid-cols-2'>
      {[left, right].map((c, i) => (
        <div
          key={i}
          className={`rounded-[12px] border px-5 py-5 ${
            c.accent
              ? 'border-[#F97316]/40 bg-[#FFF0E6]'
              : 'border-[#E8E4DC] bg-white'
          }`}
        >
          <div
            className={`mb-1 text-[11px] font-semibold uppercase tracking-[0.08em] ${
              c.accent ? 'text-[#F97316]' : 'text-[#B5AFA8]'
            }`}
          >
            {c.kicker}
          </div>
          <p
            className={`text-[16px] font-medium leading-[1.45] tracking-[-0.01em] ${
              c.accent ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]'
            }`}
          >
            {c.text}
          </p>
        </div>
      ))}
    </div>
  );
}
