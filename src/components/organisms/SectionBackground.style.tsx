/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const SectionBackground = styled.div`
  width: 100%;
  height: 100%;
  font-size: 55rem;
  font-weight: bold;
  overflow: hidden;
`;

export const BackgroundText = styled.p`
  text-align: center;
  transform: rotate(-30deg);
  -webkit-text-stroke: 1px $gray1;
  opacity: 0.3;
  z-index: -1;
`;
