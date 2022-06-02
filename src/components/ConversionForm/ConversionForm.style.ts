import styled from 'styled-components';
import { ThemeProps } from '../../styles/theme';

type FormThemeProps = {
  theme: ThemeProps;
};

export const Input = styled.input`
  border-radius: 10px;
  border: 0;
  background-color: ${({ theme }: FormThemeProps) => theme.background};
  height: 50px;
  color:  ${({ theme }: FormThemeProps) => theme.text};
  padding-right: 50px;
`;

export const Select = styled.select`
  margin-left: -50px;
  height: 50px;
`;