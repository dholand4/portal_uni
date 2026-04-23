import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Linking } from 'react-native';

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
  const handleOpenExternal = async (url: string) => {
    await Linking.openURL(url);
  };

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

          <HeroCard onPress={() => handleOpenExternal(LINKS.unicatolica.url)}>
            <HeroLabel>Site Institucional</HeroLabel>
            <HeroSubtitle>Notícias, cursos e informações da Unicatólica</HeroSubtitle>
          </HeroCard>

          <SectionHeader>Ambientes</SectionHeader>

          <ButtonRow>
            <OpenButton onPress={() => handleOpenExternal(LINKS.ava.url)}>
              <ButtonLabel>AVA</ButtonLabel>
              <ActionSubtitle>Ambiente virtual</ActionSubtitle>
            </OpenButton>

            <OpenButton onPress={() => handleOpenExternal(LINKS.portal.url)}>
              <ButtonLabel>Portal do Aluno</ButtonLabel>
              <ActionSubtitle>Vida acadêmica</ActionSubtitle>
            </OpenButton>
          </ButtonRow>

          <ButtonRow>
            <OpenButton onPress={() => handleOpenExternal(LINKS.sga.url)}>
              <ButtonLabel>SGA</ButtonLabel>
              <ActionSubtitle>Serviços gerais</ActionSubtitle>
            </OpenButton>

            <OpenButton onPress={() => handleOpenExternal(LINKS.biblioteca.url)}>
              <ButtonLabel>Biblioteca</ButtonLabel>
              <ActionSubtitle>Acervo digital</ActionSubtitle>
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
