import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Deliverys from '~/pages/Deliverys';
import DeliveryDetails from '~/pages/DeliveryDetails';
import DeliveryListProblems from '~/pages/DeliveryListProblems';
import DeliveryConfirm from '~/pages/DeliveryConfirm';
import Header from '~/components/Header';

const Stack = createStackNavigator();

export default function DeliverysRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        headerLeftContainerStyle: {
          marginLeft: 10,
        },
        headerTintColor: '#fff',
        headerTransparent: true,
      }}
      initialRouteName="Deliverys"
    >
      <Stack.Screen
        name="Deliverys"
        component={Deliverys}
        options={{
          headerTitle: (props) => <Header {...props} />,
          headerTitleAlign: 'center',
          headerTransparent: false,
          headerStyle: {
            height: 110,
          },
        }}
      />
      <Stack.Screen
        name="DeliveryDetails"
        component={DeliveryDetails}
        options={{
          headerTitle: 'Detalhes da encomenda',
        }}
      />
      <Stack.Screen
        name="DeliveryListProblems"
        component={DeliveryListProblems}
        options={{
          headerTitle: 'Vizualizar problemas',
        }}
      />
      <Stack.Screen name="DeliveryConfirm" component={DeliveryConfirm} />
    </Stack.Navigator>
  );
}
