import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="w-full md:flex hidden min-h-screen flex-col items-start bg-primary ">
            <div className="flex flex-col gap-3 flex-1 p-16 mt-10">
                <Link
                    href="/"
                    aria-label="Rivulet — Home"
                    className="inline-flex items-center"
                    >
                    <Image
                        src="/images/logo/rivulet-logo-dark.svg"
                        alt="Rivulet Logo"
                        width={200}
                        height={100}
                        className='mb-10'
                        priority
                    />
                </Link>
                <p className="text-white text-[clamp(34px,4.2vw,56px)] font-bold font-heading leading-[1.08] tracking-[-1px]">Small drops. <br/> Steady habits.</p>
                <p className="max-w-md text-[18px] text-white leading-[1.55] font-medium">
                Rome wasn&apos;t built in one day, but they were laying bricks every hour. Log in and add today&apos;s drop.
                </p>

            </div>
            <Image
              src="/images/auth/wave.svg"
              alt="Rivulet waves"
              width={1}
              height={10}
              className="w-full"
            />
        </div>
        <div className="w-full flex min-h-screen flex-col items-center justify-center bg-background">  
            {children}
        </div>
      </div>

  );
}