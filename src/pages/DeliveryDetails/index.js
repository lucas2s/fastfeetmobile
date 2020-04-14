import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Background,
  InfoDelivery,
  InfoTitle,
  Title,
  TextInfo,
  TextData,
  StatusDelivery,
  StatusDeliveryDates,
  StatusDates,
  StatusDeliveryButtons,
  Button,
  TextButton,
  ContainerButtons,
} from './styles';

export default function DeliveryDetails({ navigation, route }) {
  const { delivery } = route.params;

  console.tron.log(delivery);

  return (
    <Container>
      <Background />
      <InfoDelivery>
        <InfoTitle>
          <Icon name="local-shipping" size={20} color="#7d40e7" />
          <Title>Informações da entrega</Title>
        </InfoTitle>
        <TextInfo>DESTINATÁRIO</TextInfo>
        <TextData>{delivery.recipient.name}</TextData>
        <TextInfo>ENDEREÇO DE ENTREGA</TextInfo>
        <TextData>{delivery.address}</TextData>
        <TextInfo>PRODUTO</TextInfo>
        <TextData>{delivery.product}</TextData>
      </InfoDelivery>
      <StatusDelivery>
        <InfoTitle>
          <Icon name="event" size={20} color="#7d40e7" />
          <Title>Informações da entrega</Title>
        </InfoTitle>
        <TextInfo>STATUS</TextInfo>
        <TextData>{delivery.status}</TextData>
        <StatusDeliveryDates>
          <StatusDates>
            <TextInfo>DATA DE RETIRADA</TextInfo>
            <TextData>{delivery.dateStart}</TextData>
          </StatusDates>
          <StatusDates>
            <TextInfo>DATA DE ENTREGA</TextInfo>
            <TextData>{delivery.dateEnd}</TextData>
          </StatusDates>
        </StatusDeliveryDates>
      </StatusDelivery>
      <StatusDeliveryButtons>
        <ContainerButtons>
          <Button onPress={() => {}}>
            <Icon name="highlight-off" size={20} color="#E74040" />
            <TextButton>Informar</TextButton>
            <TextButton>Problema</TextButton>
          </Button>
        </ContainerButtons>
        <ContainerButtons>
          <Button onPress={() => {}}>
            <Icon name="info-outline" size={20} color="#E7BA40" />
            <TextButton>Vizualizar</TextButton>
            <TextButton>Problemas</TextButton>
          </Button>
        </ContainerButtons>
        <ContainerButtons>
          <Button onPress={() => {}}>
            <Icon name="check-circle" size={20} color="#7d40e7" />
            <TextButton>Confirmar</TextButton>
            <TextButton>Entrega</TextButton>
          </Button>
        </ContainerButtons>
      </StatusDeliveryButtons>
    </Container>
  );
}
