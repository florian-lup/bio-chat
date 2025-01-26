import Link from 'next/link';

export const PageFooter = () => {
  return (
    <footer className="py-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-4">
        <div className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Florian Lup
        </div>
        <div className="flex items-center gap-x-6">
          <Link 
            href="https://github.com/florian-lup" 
            className="text-sm text-neutral-500 hover:text-neutral-300 transition-all duration-300 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link 
            href="https://linkedin.com" 
            className="text-sm text-neutral-500 hover:text-neutral-300 transition-all duration-300 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <Link 
            href="https://twitter.com" 
            className="text-sm text-neutral-500 hover:text-neutral-300 transition-all duration-300 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>
          <div className="h-4 w-px bg-neutral-800 mx-2" />
          <button className="text-sm text-neutral-500 hover:text-neutral-300 transition-all duration-300">
            Privacy
          </button>
        </div>
      </div>
    </footer>
  );
};

//add a copyright here

//add a privacy policy here

//add a terms of service here 