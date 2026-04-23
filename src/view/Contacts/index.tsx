import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { CONTACTS } from '../../constants/app';
import { RootStackParamList } from '../../routes/types';
import {
  BackButton,
  BackButtonLabel,
  ContactCard,
  ContactButton,
  ContactDescription,
  ContactLabel,
  Container,
  Description,
  Header,
  PageTitle,
  ScrollContent,
  Section,
  TopBar
} from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Contacts'>;

export function Contacts({ navigation }: Props) {
  return (
    <Container>
      <TopBar>
        <BackButton onPress={() => navigation.goBack()}>
          <BackButtonLabel>{'<'}</BackButtonLabel>
        </BackButton>
      </TopBar>

      <ScrollContent contentContainerStyle={{ flexGrow: 1 }}>
        <Header>
          <PageTitle>Contatos</PageTitle>
          <Description>Escolha um setor para abrir o WhatsApp.</Description>
        </Header>

        <Section>
          {CONTACTS.map((contact) => (
            <ContactCard key={contact.title}>
              <ContactButton
                onPress={() =>
                  navigation.navigate('WebViewScreen', {
                    title: contact.title,
                    url: contact.url
                  })
                }
              >
                <ContactLabel>{contact.title}</ContactLabel>
                <ContactDescription>{contact.description}</ContactDescription>
              </ContactButton>
            </ContactCard>
          ))}
        </Section>
      </ScrollContent>
    </Container>
  );
}
