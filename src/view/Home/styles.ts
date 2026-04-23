import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { DefaultTheme } from 'styled-components/native';

type ThemeContext = {
  theme: DefaultTheme;
};

export const Container = styled(SafeAreaView).attrs({
  edges: ['top']
})`
  flex: 1;
  background-color: ${({ theme }: ThemeContext) => theme.colors.background};
`;

export const ScrollContent = styled.ScrollView`
  flex: 1;
  padding: 24px 20px 36px;
`;

export const Section = styled.View`
  width: 100%;
  max-width: 360px;
  align-self: center;
  gap: 14px;
`;

export const Header = styled.View`
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

export const LogoWrap = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 196px;
  height: 78px;
`;

export const PageTitle = styled.Text`
  color: ${({ theme }: ThemeContext) => theme.colors.text};
  font-size: 28px;
  font-family: ${({ theme }: ThemeContext) => theme.fonts.bold};
  text-align: center;
`;

export const SectionSubtitle = styled.Text`
  color: ${({ theme }: ThemeContext) => theme.colors.muted};
  font-size: 15px;
  font-family: ${({ theme }: ThemeContext) => theme.fonts.regular};
  text-align: center;
`;

export const HeroCard = styled.TouchableOpacity`
  min-height: 112px;
  padding: 22px 20px;
  border-radius: 8px;
  background-color: ${({ theme }: ThemeContext) => theme.colors.primaryStrong};
  border-width: 1px;
  border-color: ${({ theme }: ThemeContext) => theme.colors.accent};
  justify-content: center;
  gap: 6px;
  shadow-color: ${({ theme }: ThemeContext) => theme.colors.shadow};
  shadow-offset: 0px 10px;
  shadow-opacity: 1;
  shadow-radius: 18px;
  elevation: 4;
`;

export const HeroLabel = styled.Text`
  color: ${({ theme }: ThemeContext) => theme.colors.buttonText};
  font-size: 18px;
  font-family: ${({ theme }: ThemeContext) => theme.fonts.bold};
`;

export const HeroSubtitle = styled.Text`
  color: rgba(255, 245, 237, 0.9);
  font-size: 13px;
  font-family: ${({ theme }: ThemeContext) => theme.fonts.regular};
  line-height: 18px;
`;

export const SectionHeader = styled.Text`
  color: ${({ theme }: ThemeContext) => theme.colors.text};
  font-size: 16px;
  font-family: ${({ theme }: ThemeContext) => theme.fonts.bold};
  margin-top: 6px;
`;

export const ButtonRow = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const OpenButton = styled.TouchableOpacity`
  flex: 1;
  min-height: 104px;
  padding: 18px 14px;
  border-radius: 8px;
  background-color: ${({ theme }: ThemeContext) => theme.colors.surfaceAlt};
  border-width: 1px;
  border-color: ${({ theme }: ThemeContext) => theme.colors.border};
  justify-content: space-between;
  shadow-color: ${({ theme }: ThemeContext) => theme.colors.shadow};
  shadow-offset: 0px 8px;
  shadow-opacity: 1;
  shadow-radius: 16px;
  elevation: 3;
`;

export const ContactButton = styled.TouchableOpacity`
  min-height: 88px;
  padding: 18px 18px;
  border-radius: 8px;
  background-color: ${({ theme }: ThemeContext) => theme.colors.primary};
  border-width: 1px;
  border-color: ${({ theme }: ThemeContext) => theme.colors.accent};
  justify-content: center;
  gap: 6px;
  shadow-color: ${({ theme }: ThemeContext) => theme.colors.shadow};
  shadow-offset: 0px 10px;
  shadow-opacity: 1;
  shadow-radius: 18px;
  elevation: 4;
`;

type ButtonLabelProps = {
  $light?: boolean;
};

export const ButtonLabel = styled.Text<ButtonLabelProps>`
  color: ${({ theme, $light }: ThemeContext & ButtonLabelProps) =>
    $light ? theme.colors.buttonText : theme.colors.text};
  font-size: 15px;
  font-family: ${({ theme }: ThemeContext) => theme.fonts.bold};
  text-align: center;
`;

type SubtitleProps = {
  $light?: boolean;
};

export const ActionSubtitle = styled.Text<SubtitleProps>`
  color: ${({ theme, $light }: SubtitleProps & ThemeContext) =>
    $light ? 'rgba(255, 255, 255, 0.82)' : theme.colors.muted};
  font-size: 12px;
  font-family: ${({ theme }: ThemeContext) => theme.fonts.regular};
  text-align: center;
  line-height: 16px;
`;
