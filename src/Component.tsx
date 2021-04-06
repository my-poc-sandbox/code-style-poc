import React, { ReactNode } from 'react';

export interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header = ({ title, subtitle }: HeaderProps): ReactNode => {
  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <h3>{subtitle}</h3>}
    </div>
  );
};
