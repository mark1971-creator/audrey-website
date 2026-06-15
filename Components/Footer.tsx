import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-[#6B8E73]/15 bg-[#F8F4F0]">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center text-center gap-5">
        <p className="text-sm text-[#4A4038]/80 max-w-md leading-relaxed">
          Brought to you by{' '}
          <span className="font-medium text-[#2C2520]">Being at Full Potential</span>
          ,
          <br />
          your personal branding specialist.
        </p>

        <a
          href="https://beingatfullpotential.com"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 hover:opacity-100 transition-opacity duration-300"
          aria-label="Being at Full Potential — visit website"
        >
          <Image
            src="/bfp-logo.png"
            alt="Being at Full Potential"
            width={180}
            height={48}
            className="h-10 w-auto object-contain rounded-md"
          />
        </a>
      </div>
    </footer>
  );
}
