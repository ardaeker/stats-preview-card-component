import { getImageProps } from 'next/image';

function Picture() {
  const common = { alt: 'Insights header image', fill: true, priority: true, sizes: '100vw' };

  const {
    props: { src: mobileSrc },
  } = getImageProps({ ...common, src: '/image-header-mobile.jpg' });

  const {
    props: { src: desktopSrc, alt, ...rest },
  } = getImageProps({ ...common, src: '/image-header-desktop.jpg' });

  return (
    <div className="relative h-[15rem] w-full xl:h-[27.875rem] xl:w-[33.75rem]" aria-hidden>
      <div className="absolute inset-0 bg-[#AB5CDB]" />
      <div className="opacity-[0.7511] mix-blend-multiply">
        <picture>
          <source media="(max-width: 1279px)" srcSet={mobileSrc} />
          <source media="(min-width: 1280px)" srcSet={desktopSrc} />
          <img className="h-full w-full object-cover" alt={alt} {...rest} />
        </picture>
      </div>
    </div>
  );
}

export function Insights() {
  return (
    <section className="flex w-full max-w-96 flex-col overflow-hidden rounded-lg bg-[#1B1937] shadow-[0px_20px_20px_-10px_rgba(23,25,41,0.20)] xl:max-w-[69.375rem] xl:flex-row-reverse">
      <Picture />
      <div className="flex-1 p-8 pt-10 xl:pb-[3.6875rem] xl:pl-[4.5rem] xl:pr-[5.9375rem] xl:pt-[4.4375rem]">
        <h1 className="font-inter text-[1.75rem] font-bold leading-8 max-xl:text-center xl:text-4xl xl:leading-[2.75rem]">
          Get <span className="text-[#AB5CDB]">insights</span> that help your business grow.
        </h1>
        <p className="-xl:ml-[.0313rem] -ml-[.0625rem] mt-4 text-[.9375rem] leading-[1.5625rem] text-white/75 max-xl:text-center xl:mt-[1.5625rem] xl:max-w-[23.375rem]">
          Discover the benefits of data analytics and make better decisions regarding revenue,
          customer experience, and overall efficiency.
        </p>
        <div className="mt-10 flex flex-col gap-y-6 max-xl:justify-between max-xl:text-center md:flex-row xl:mt-[4.5rem]">
          <div className="flex flex-col">
            <span className="text-2xl font-bold leading-[1.8125rem]">10k+</span>
            <span className="font-lexend text-xs uppercase leading-[1.5625rem] tracking-[1px] text-white/60">
              Companies
            </span>
          </div>

          <div className="flex flex-col xl:ml-16">
            <span className="text-2xl font-bold leading-[1.8125rem]">314</span>
            <span className="font-lexend text-xs uppercase leading-[1.5625rem] tracking-[1px] text-white/60">
              Templates
            </span>
          </div>

          <div className="flex flex-col xl:ml-[3.8125rem]">
            <span className="text-2xl font-bold leading-[1.8125rem]">12M+</span>
            <span className="font-lexend text-xs uppercase leading-[1.5625rem] tracking-[1px] text-white/60">
              Queries
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
