const logos = [
  'Bloom Digital India',
  'Nectar Marketing',
  'Sparkle Studios',
  'Growthify',
  'BrandLab',
  'PixelForge',
  'Velocity Media',
  'NovaBrands',
  'ClearConvert',
  'RiseUp Agency',
];

export function Marquee() {
  return (
    <section id="marquee_logos" className="relative overflow-hidden py-14">
      <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/60 to-bg/30" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-accent uppercase tracking-widest text-text-secondary">
            Brands That Trust Us
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Our partners & success stories
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-bg-card/70 p-6 backdrop-blur-glass shadow-card">
          <div className="flex flex-col gap-6">
            {[0, 1].map((row) => (
              <div
                key={row}
                className="flex w-[200%] gap-10 whitespace-nowrap animate-marquee"
                style={{ animationDirection: row % 2 === 0 ? 'normal' : 'reverse' }}
              >
                {logos.concat(logos).map((logo) => (
                  <div
                    key={`${row}-${logo}`}
                    className="flex h-12 w-40 items-center justify-center rounded-xl bg-white/5 text-center text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
