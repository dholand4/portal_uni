import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { DefaultTheme } from 'styled-components/native';

type ThemeContext = {
  theme: DefaultTheme;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  position: relative;
  background-color: ${({ theme }: ThemeContext) => theme.colors.background};
`;

export const Header = styled.View`
  padding: 8px 12px;
  background-color: ${({ theme }: ThemeContext) => theme.colors.surface};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }: ThemeContext) => theme.colors.border};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  /* background-color: ${({ theme }: ThemeContext) => theme.colors.surfaceAlt}; */
`;

export const BackButtonLabel = styled.Text`
  color: ${({ theme }: ThemeContext) => theme.colors.text};
  font-size: 18px;
  font-family: ${({ theme }: ThemeContext) => theme.fonts.bold};
`;

export const Title = styled.Text`
  flex: 1;
  color: ${({ theme }: ThemeContext) => theme.colors.text};
  font-size: 15px;
  font-family: ${({ theme }: ThemeContext) => theme.fonts.bold};
`;

export const MenuWrap = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  elevation: 20;
`;

export const MenuButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  gap: 3px;
  border-radius: 8px;
  /* background-color: ${({ theme }: ThemeContext) => theme.colors.surfaceAlt}; */
`;

export const Backdrop = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const MenuButtonDot = styled.View`
  width: 3px;
  height: 3px;
  border-radius: 1.5px;
  background-color: ${({ theme }: ThemeContext) => theme.colors.text};
`;

export const MenuCard = styled.View`
  position: absolute;
  top: 44px;
  right: 12px;
  min-width: 156px;
  border-radius: 8px;
  background-color: ${({ theme }: ThemeContext) => theme.colors.surface};
  border-width: 1px;
  border-color: ${({ theme }: ThemeContext) => theme.colors.border};
  shadow-color: ${({ theme }: ThemeContext) => theme.colors.shadow};
  shadow-offset: 0px 8px;
  shadow-opacity: 1;
  shadow-radius: 16px;
  z-index: 30;
  elevation: 30;
  overflow: hidden;
`;

export const MenuItem = styled.TouchableOpacity`
  padding: 12px 14px;
`;

export const MenuItemLabel = styled.Text`
  color: ${({ theme }: ThemeContext) => theme.colors.text};
  font-size: 13px;
  font-family: ${({ theme }: ThemeContext) => theme.fonts.regular};
`;

export const WebViewContainer = styled.View`
  flex: 1;
`;

export const SupportCard = styled.View`
  flex: 1;
  padding: 24px 20px;
  justify-content: center;
  gap: 14px;
  background-color: ${({ theme }: ThemeContext) => theme.colors.background};
`;

export const Message = styled.Text`
  color: ${({ theme }: ThemeContext) => theme.colors.muted};
  font-size: 14px;
  font-family: ${({ theme }: ThemeContext) => theme.fonts.regular};
  line-height: 20px;
`;

export const OpenExternalButton = styled.TouchableOpacity`
  align-self: flex-start;
  min-height: 42px;
  padding: 10px 14px;
  border-radius: 8px;
  background-color: ${({ theme }: ThemeContext) => theme.colors.primary};
  justify-content: center;
`;

export const OpenExternalButtonLabel = styled.Text`
  color: ${({ theme }: ThemeContext) => theme.colors.buttonText};
  font-size: 13px;
  font-family: ${({ theme }: ThemeContext) => theme.fonts.bold};
`;
