export type LogoProps = {
  logoTheme?: 'light' | 'dark';
  className?: string;
};

export type StyledLogoProps = Omit<LogoProps, 'logoTheme'> & {
  $logoTheme: LogoProps['logoTheme'];
};
