export interface ThemeProps {
  background: string;
  text: string;
}

export const light: ThemeProps = {
  background: 'var(--light-background)',
  text: 'var(--light-text)',
};

export const dark: ThemeProps = {
  background: 'var(--dark-background)',
  text: 'var(--dark-text)',
};
