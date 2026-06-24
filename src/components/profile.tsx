import { getBlurDataUrl } from "next-image-blur";
import Image from "next/image";

export default async function Profile() {
  const blurDataURL = await getBlurDataUrl("/images/profile.png");
  return (
    <div className="flex justify-between items-start gap-8 flex-col-reverse sm:flex-row">
      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          조성민
        </h1>
        <p className="mt-1 text-lg text-neutral-600 dark:text-neutral-400">
          Frontend Developer
        </p>
        <div className="w-[80px] h-[1px] bg-neutral-900 dark:bg-neutral-100 my-4" />
        <div className="flex flex-col gap-1.5">
          <a
            href="https://uos.ac.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2.5 group"
          >
            <span className="text-base shrink-0">🎓</span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
              University of Seoul
            </span>
          </a>
          <a
            href="https://github.com/SID12g"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2.5 group"
          >
            <span className="text-base shrink-0">🐱</span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
              @SID12g
            </span>
          </a>
          <a href="mailto:i@sid12g.dev" className="flex gap-2.5 group">
            <span className="text-base shrink-0">✉️</span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
              i@sid12g.dev
            </span>
          </a>
        </div>
      </div>
      <div className="w-[120px] h-[120px] rounded-full overflow-hidden shrink-0 mx-auto sm:mx-0">
        <Image
          src="/images/profile.png"
          alt="Profile"
          width={256}
          height={256}
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  );
}
