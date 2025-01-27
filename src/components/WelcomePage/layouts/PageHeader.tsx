import { lazy, Suspense } from 'react';
import Image from 'next/image';

const HelpPopover = lazy(() => import('../popovers/HelpPopover').then(module => ({ 
  default: module.HelpPopover 
})));

const ContactPopover = lazy(() => import('../popovers/ContactPopover').then(module => ({ 
  default: module.ContactPopover 
})));

const PopoverFallback = () => (
  <button className="text-xs sm:text-sm text-neutral-500 p-2.5 sm:p-3 rounded-xl backdrop-blur-sm relative overflow-hidden bg-neutral-800/40 transition-colors duration-200 hover:bg-neutral-700/40">Loading...</button>
);

export const PageHeader = () => {
  return (
    <header className="h-16 sm:h-20 sticky top-0 z-10 backdrop-blur-sm flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/0">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={28}
            height={28}
            className="object-contain sm:w-[30px] sm:h-[30px]"
          />
        </div>
        <nav className="flex items-center space-x-2 sm:space-x-3">
          <Suspense fallback={<PopoverFallback />}>
            <ContactPopover />
          </Suspense>
          <Suspense fallback={<PopoverFallback />}>
            <HelpPopover />
          </Suspense>
        </nav>
      </div>
    </header>
  );
};
