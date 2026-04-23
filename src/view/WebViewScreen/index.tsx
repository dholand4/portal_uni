import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BackHandler, Linking } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import WebView, { WebViewNavigation } from 'react-native-webview';

import { RootStackParamList } from '../../routes/types';
import {
  BackButton,
  BackButtonLabel,
  Backdrop,
  Container,
  Header,
  MenuButton,
  MenuButtonDot,
  MenuCard,
  MenuItem,
  MenuItemLabel,
  MenuWrap,
  Row,
  Title,
  WebViewContainer
} from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'WebViewScreen'>;

export function WebViewScreen({ navigation, route }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [canGoBack, setCanGoBack] = useState(false);
  const webViewRef = useRef<WebView>(null);

  useEffect(() => {
    const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
      if (menuOpen) {
        setMenuOpen(false);
        return true;
      }

      if (canGoBack) {
        webViewRef.current?.goBack();
        return true;
      }

      return true;
    });

    return () => subscription.remove();
  }, [canGoBack, menuOpen]);

  const handleOpenInBrowser = async () => {
    setMenuOpen(false);
    await Linking.openURL(route.params.url);
  };

  const handleNavigationStateChange = (navigationState: WebViewNavigation) => {
    setCanGoBack(navigationState.canGoBack);
  };

  return (
    <Container edges={['top']}>
      <Header>
        <Row>
          <BackButton onPress={() => navigation.goBack()}>
            <BackButtonLabel>{'<'}</BackButtonLabel>
          </BackButton>

          <Title numberOfLines={1}>{route.params.title}</Title>

          <MenuButton onPress={() => setMenuOpen((current) => !current)}>
            <MenuButtonDot />
            <MenuButtonDot />
            <MenuButtonDot />
          </MenuButton>
        </Row>
      </Header>

      <WebViewContainer>
        <WebView
          ref={webViewRef}
          source={{ uri: route.params.url }}
          style={{ flex: 1 }}
          onNavigationStateChange={handleNavigationStateChange}
        />
      </WebViewContainer>

      {menuOpen ? (
        <MenuWrap>
          <Backdrop onPress={() => setMenuOpen(false)} />

          <MenuCard>
            <MenuItem onPress={handleOpenInBrowser}>
              <MenuItemLabel>Abrir no navegador</MenuItemLabel>
            </MenuItem>
          </MenuCard>
        </MenuWrap>
      ) : null}
    </Container>
  );
}
