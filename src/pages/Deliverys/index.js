import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import DeliveryList from './DeliveryList';
import api from '~/services/api';

import {
  Container,
  TopDelivery,
  Title,
  Options,
  ButtonOptions,
  ContentList,
  TextButton,
  List,
  Loading,
  Message,
} from './styles';

export default function Deliverys({ navigation }) {
  const isFocused = useIsFocused();
  const timeSP = 'America/Sao_Paulo';

  const [deliverys, setDeliverys] = useState([]);
  const [loading = false, setLoading] = useState();
  const [delivered = false, setDelivered] = useState();
  const [page, setPage] = useState();
  const [moreDelivery = true, setMoreDelivery] = useState();

  const deliveryMan = useSelector((state) => state.auth.deliveryMan);
  const { id } = deliveryMan;

  const loadDeliverys = useCallback(() => {
    async function load() {
      try {
        setLoading(true);
        const response = await api.get(`/deliveryman/${id}/delivery`, {
          params: {
            page,
            delivered,
          },
        });

        if (response.data.deliverys.length < 10) {
          setMoreDelivery(false);
        }

        setDeliverys(
          ...deliverys,
          response.data.deliverys.map((delivery) => {
            const { recipient } = delivery;

            const address = `${recipient.street}, ${recipient.number}${
              recipient.complement !== '' ? ` - ${recipient.complement}` : ''
            }, ${recipient.city}, ${recipient.state}`;

            let status = '';
            if (delivery.end_date !== null) {
              status = 'Entregue';
            } else if (delivery.start_date !== null) {
              status = 'Retirada';
            } else {
              status = 'Pendente';
            }

            const dateCreate = format(
              parseISO(delivery.created_at, timeSP),
              "dd'/'MM'/'yyyy",
              {
                locale: pt,
              }
            );

            const dateStart = delivery.start_date
              ? format(
                  parseISO(delivery.start_date, timeSP),
                  "dd'/'MM'/'yyyy",
                  {
                    locale: pt,
                  }
                )
              : '- - / - - / - -';

            const dateEnd = delivery.end_date
              ? format(parseISO(delivery.end_date, timeSP), "dd'/'MM'/'yyyy", {
                  locale: pt,
                })
              : '- - / - - / - -';

            delivery = {
              ...delivery,
              address,
              status,
              dateCreate,
              dateStart,
              dateEnd,
            };
            return delivery;
          })
        );

        setLoading(false);
      } catch (error) {
        setDeliverys([]);
        setLoading(false);
        Alert.alert('Erro Entregas', 'Falha para consultar as entregas');
      }
    }
    load();
  }, [id, delivered, page]);

  useEffect(() => {
    loadDeliverys();
  }, [loadDeliverys, isFocused, page]);

  function handleMoreDelivery() {
    if (moreDelivery) {
      if (!loading) {
        setPage(page + 1);
      }
    }
  }

  function handleRefresh() {
    setDeliverys([]);
    setPage(1);
  }

  return (
    <Container>
      <TopDelivery>
        <Title>Entregas</Title>
        <Options>
          <ButtonOptions onPress={() => setDelivered(false)}>
            <TextButton active={!delivered}>Pendentes</TextButton>
          </ButtonOptions>
          <ButtonOptions onPress={() => setDelivered(true)}>
            <TextButton active={delivered}>Entregues</TextButton>
          </ButtonOptions>
        </Options>
      </TopDelivery>
      <ContentList>
        {loading ? (
          <Loading>
            <ActivityIndicator color="#7D40E7" size="large" />
          </Loading>
        ) : deliverys.length > 0 ? (
          <List
            data={deliverys}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item: delivery }) => (
              <DeliveryList
                data={delivery}
                details={() =>
                  navigation.navigate('DeliveryDetails', { delivery })
                }
              />
            )}
            onRefresh={handleRefresh}
            refreshing={loading}
            onEndReachedThreshold={0.2}
            onEndReached={handleMoreDelivery}
          />
        ) : (
          <Message>Não foi encontrada nenhuma encomenda!</Message>
        )}
      </ContentList>
    </Container>
  );
}

Deliverys.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
    .isRequired,
};
