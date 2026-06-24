import { FadeIn } from './FadeIn';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  align?: 'left' | 'center';
  dark?: boolean;
};

export function SectionHeading({ eyebrow, title, align = 'center', dark = false }: SectionHeadingProps) {
  return (
    <FadeIn className={align === 'center' ? 'mx-auto max-w-4xl text-center' : 'max-w-4xl'}>
      {eyebrow ? (
        <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.32em] ${dark ? 'text-zinc-500' : 'text-[#D7E2EA]'}`}>{eyebrow}</p>
      ) : null}
      <h2 className={`jack-title text-5xl md:text-7xl lg:text-8xl ${dark ? 'text-[#0C0C0C]' : 'jack-steel'}`}>{title}</h2>
    </FadeIn>
  );
}
