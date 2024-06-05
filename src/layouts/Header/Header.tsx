import { MobileNavigation } from '@/components/shared/header/MobileNavigation';
import { Navigation } from '@/components/shared/header/Navigation';
import { Logo } from '../Logo';

export const Header = () => {
  return (
    <header className="border-primary-dark fixed top-0 h-16 w-full border-b bg-transparent">
      <div className="flex h-full w-full items-center justify-between px-6 lg:px-8 3xl:mx-auto 3xl:w-[1440px]">
        <Logo />
        <Navigation className="hidden text-white md:block" />
        <MobileNavigation className="block md:hidden" />
      </div>
    </header>
  );
};
