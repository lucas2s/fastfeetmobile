import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';

import {
  Container,
  ContentStatus,
  ContentTitle,
  ContentInfoCollun,
  Title,
  ContentInfo,
  TextData,
  TextInfo,
  ButtonDetails,
  TextButton,
  ContentDeliveryStatus,
  ContentDeliveryCollun,
  LineDeliveryOne,
  LineDeliveryTwo,
} from './styles';

export default function DeliveryList({ data, details }) {
  return (
    <Container>
      <ContentStatus>
        <ContentTitle>
          <Icon name="local-shipping" size={20} color="#7d40e7" />
          <Title>{`Enconmenda ID  ${data.id}`}</Title>
        </ContentTitle>
        <ContentDeliveryStatus>
          <ContentDeliveryCollun>
            <Icon name="lens" size={10} color="#7d40e7" />
          </ContentDeliveryCollun>
          <LineDeliveryOne />
          <ContentDeliveryCollun>
            {data.start_date ? (
              <Icon name="lens" size={10} color="#7d40e7" />
            ) : (
              <IconEntypo name="circle" size={10} color="#7d40e7" />
            )}
          </ContentDeliveryCollun>
          <LineDeliveryTwo />
          <ContentDeliveryCollun>
            {data.end_date ? (
              <Icon name="lens" size={10} color="#7d40e7" />
            ) : (
              <IconEntypo name="circle" size={10} color="#7d40e7" />
            )}
          </ContentDeliveryCollun>
        </ContentDeliveryStatus>
        <ContentDeliveryStatus>
          <ContentDeliveryCollun>
            <TextInfo>Aguardando</TextInfo>
            <TextInfo>Retirada</TextInfo>
          </ContentDeliveryCollun>
          <ContentDeliveryCollun>
            <TextInfo>Retirada</TextInfo>
          </ContentDeliveryCollun>
          <ContentDeliveryCollun>
            <TextInfo>Entregue</TextInfo>
          </ContentDeliveryCollun>
        </ContentDeliveryStatus>
      </ContentStatus>
      <ContentInfo>
        <ContentInfoCollun>
          <TextInfo>Data</TextInfo>
          <TextData>{data.dateCreate}</TextData>
        </ContentInfoCollun>
        <ContentInfoCollun>
          <TextInfo>Cidade</TextInfo>
          <TextData>{data.recipient.city}</TextData>
        </ContentInfoCollun>
        <ContentInfoCollun>
          <ButtonDetails onPress={details}>
            <TextButton>Ver detalhes</TextButton>
          </ButtonDetails>
        </ContentInfoCollun>
      </ContentInfo>
    </Container>
  );
}

DeliveryList.propTypes = {
  data: PropTypes.object.isRequired,
};
