import React from 'react';
import { Navbar } from './Navbar';
import { MobileNavigation } from './MobileNavigation';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col font-body-md relative pb-20 md:pb-8">
      <Navbar />
      <main className="flex-1 w-full max-w-container-max mx-auto px-4 md:px-margin-desktop py-4 md:py-8">
        {children}
      </main>
      <MobileNavigation />
    </div>
  );
};
