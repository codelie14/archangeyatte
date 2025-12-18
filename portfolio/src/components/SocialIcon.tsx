import React from 'react';
import Link from 'next/link';

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function SocialIcon({ href, icon, label }: SocialIconProps) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      className="social-icon text-2xl"
      aria-label={label}
    >
      {icon}
    </Link>
  );
}