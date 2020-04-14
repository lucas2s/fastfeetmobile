import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #eeeeee;
  margin-bottom: 10px;
`;

export const ContentStatus = styled.View`
  padding: 10px;
  height: 95px;
`;

export const ContentTitle = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
`;

export const ContentDeliveryStatus = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContentDeliveryCollun = styled.View`
  width: 33.33%;
  align-items: center;
`;

export const LineDeliveryOne = styled.Text`
  position: absolute;
  left: 18%;
  top: 5px;
  border-top-width: 1px;
  border-top-color: #7d40e7;
  width: 30.5%;
`;

export const LineDeliveryTwo = styled.Text`
  position: absolute;
  left: 51.5%;
  top: 5px;
  border-top-width: 1px;
  border-top-color: #7d40e7;
  width: 30.5%;
`;

export const Title = styled.Text`
  margin-left: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #7d40e7;
`;

export const ContentInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fd;
  height: 65px;
`;

export const ContentInfoCollun = styled.View`
  width: 33.33%;
  align-items: center;
`;

export const TextData = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #444444;
`;

export const TextInfo = styled.Text`
  font-size: 8px;
  font-weight: bold;
  color: #999999;
`;

export const ButtonDetails = styled(BorderlessButton)``;

export const TextButton = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #7d40e7;
`;
