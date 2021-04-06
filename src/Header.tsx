import React from 'react';

export interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header = ({ title, subtitle }: HeaderProps): JSX.Element => {
  return (
    <div data-test-id="header">
      <h1 data-test-id="header-title">{title}</h1>
      {subtitle && <h3 data-test-id="header-subtitle">{subtitle}</h3>}
    </div>
  );
};
