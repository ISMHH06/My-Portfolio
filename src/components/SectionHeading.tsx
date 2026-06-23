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
        <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.32em] ${dark ? 'text-zinc-500' : 'text-cyan'}`}>{eyebrow}</p>
      ) : null}
      <h2 className={`hero-heading text-5xl font-black uppercase leading-none md:text-7xl ${dark ? 'opacity-95' : ''}`}>{title}</h2>
    </FadeIn>
  );
}
