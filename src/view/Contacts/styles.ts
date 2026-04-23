import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { DefaultTheme } from 'styled-components/native';

type ThemeContext = {
  theme: DefaultTheme;
};

export const Container = styled(SafeAreaView).attrs({
  edges: ['top', 'bottom']
})`
  flex: 1;
  background-color: ${({ theme }: ThemeContext) => theme.colors.background};
`;

export const ScrollContent = styled.ScrollView`
  flex: 1;
  padding: 20px 20px 44px;
`;

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 20px 0;
  background-color: ${({ theme }: ThemeContext) => theme.colors.background};
`;

export const BackButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  /* border-width: 1px; */
  /* border-color: ${({ theme }: ThemeContext) => theme.colors.border}; */
  /* background-color: ${({ theme }: ThemeContext) => theme.colors.surfaceAlt}; */
`;

export const BackButtonLabel = styled.Text`
  color: ${({ theme }: ThemeContext) => theme.colors.text};
  font-size: 24px;
  font-family: ${({ theme }: ThemeContext) => theme.fonts.bold};
`;

export const Header = styled.View`
  width: 100%;
  max-width: 360px;
  align-self: center;
  margin-bottom: 18px;
  gap: 6px;
`;

export const PageTitle = styled.Text`
  color: ${({ theme }: ThemeContext) => theme.colors.text};
  font-size: 28px;
  font-family: ${({ theme }: ThemeContext) => theme.fonts.bold};
  text-align: left;
`;

export const Description = styled.Text`
  color: ${({ theme }: ThemeContext) => theme.colors.muted};
  font-size: 14px;
  font-family: ${({ theme }: ThemeContext) => theme.fonts.regular};
  text-align: left;
`;

export const Section = styled.View`
  width: 100%;
  max-width: 360px;
  align-self: center;
  gap: 10px;
  padding-bottom: 36px;
`;

export const ContactCard = styled.View`
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }: ThemeContext) => theme.colors.surface};
  border-width: 1px;
  border-color: ${({ theme }: ThemeContext) => theme.colors.border};
  shadow-color: ${({ theme }: ThemeContext) => theme.colors.shadow};
  shadow-offset: 0px 8px;
  shadow-opacity: 1;
  shadow-radius: 16px;
  elevation: 3;
`;

export const ContactButton = styled.TouchableOpacity`
  width: 100%;
  min-height: 84px;
  padding: 14px 16px;
  border-radius: 8px;
  justify-content: center;
  gap: 4px;
`;

export const ContactLabel = styled.Text`
  color: ${({ theme }: ThemeContext) => theme.colors.text};
  font-size: 15px;
  font-family: ${({ theme }: ThemeContext) => theme.fonts.bold};
  text-align: left;
`;

export const ContactDescription = styled.Text`
  color: ${({ theme }: ThemeContext) => theme.colors.muted};
  font-size: 12px;
  font-family: ${({ theme }: ThemeContext) => theme.fonts.regular};
  text-align: left;
  line-height: 16px;
`;
