import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { LINKS } from '../../constants/app';
import { RootStackParamList } from '../../routes/types';

import {
  ActionSubtitle,
  ButtonLabel,
  ButtonRow,
  ContactButton,
  Container,
  Header,
  HeroCard,
  HeroLabel,
  HeroSubtitle,
  Logo,
  LogoWrap,
  OpenButton,
  PageTitle,
  ScrollContent,
  Section,
  SectionHeader,
  SectionSubtitle
} from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function Home({ navigation }: Props) {
  return (
    <Container>
      <ScrollContent contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <Section>
          <Header>
            <LogoWrap>
              <Logo source={require('../../assets/logouni.png')} resizeMode="contain" />
            </LogoWrap>
            <PageTitle>Central de Acessos</PageTitle>
            <SectionSubtitle>Unicatólica Quixadá</SectionSubtitle>
          </Header>

          <HeroCard
            onPress={() =>
              navigation.navigate('WebViewScreen', {
                title: LINKS.unicatolica.title,
                url: LINKS.unicatolica.url
              })
            }
          >
            <HeroLabel>Site Institucional</HeroLabel>
            <HeroSubtitle>Notícias, cursos e informações da Unicatólica</HeroSubtitle>
          </HeroCard>

          <SectionHeader>Ambientes</SectionHeader>

          <ButtonRow>
            <OpenButton
              onPress={() =>
                navigation.navigate('WebViewScreen', {
                  title: LINKS.ava.title,
                  url: LINKS.ava.url
                })
              }
            >
              <ButtonLabel>AVA</ButtonLabel>
              <ActionSubtitle>Ambiente virtual</ActionSubtitle>
            </OpenButton>

            <OpenButton
              onPress={() =>
                navigation.navigate('WebViewScreen', {
                  title: LINKS.portal.title,
                  url: LINKS.portal.url
                })
              }
            >
              <ButtonLabel>Portal do Aluno</ButtonLabel>
              <ActionSubtitle>Vida Acadêmica</ActionSubtitle>
            </OpenButton>
          </ButtonRow>

          <ButtonRow>
            <OpenButton
              onPress={() =>
                navigation.navigate('WebViewScreen', {
                  title: LINKS.sga.title,
                  url: LINKS.sga.url
                })
              }
            >
              <ButtonLabel>SGA</ButtonLabel>
              <ActionSubtitle>Serviços Gerais</ActionSubtitle>
            </OpenButton>

            <OpenButton
              onPress={() =>
                navigation.navigate('WebViewScreen', {
                  title: LINKS.biblioteca.title,
                  url: LINKS.biblioteca.url
                })
              }
            >
              <ButtonLabel>Biblioteca</ButtonLabel>
              <ActionSubtitle>Acervo Digital</ActionSubtitle>
            </OpenButton>
          </ButtonRow>

          <ContactButton onPress={() => navigation.navigate('Contacts')}>
            <ButtonLabel $light>Contatos</ButtonLabel>
            <ActionSubtitle $light>Atendimentos via Whatsapp</ActionSubtitle>
          </ContactButton>
        </Section>
      </ScrollContent>
    </Container>
  );
}
