import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

interface Heading1Props {
  text: string;
  color: string;
  alignment: string;
}

const Heading1 = styled(Text)<Heading1Props>`
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  text-align: ${(props: Heading1Props) => props.alignment};
  letter-spacing: 0.16px;
  color: ${(props: Heading1Props) => props.color};
  margin-bottom: 32px;
`;

export const Heading1View = (props: Heading1Props) => {
  return <Heading1 {...props}>{props.text}</Heading1>;
};

interface Heading2Props {
  text: string;
  color: string;
  alignment: string;
}

const Heading2 = styled(Text)<Heading2Props>`
  font-size: 28px;
  line-height: 32px;
  text-align: ${(props: Heading2Props) => props.alignment};
  font-weight: 700;
  letter-spacing: 0;
  color: ${(props: Heading2Props) => props.color};
`;

export const Heading2View = (props: Heading2Props) => {
  return <Heading2 {...props}>{props.text}</Heading2>;
};

interface Heading3Props {
  text: string;
  color: string;
  alignment: string;
}

const Heading3 = styled(Text)<Heading3Props>`
  font-size: 24px;
  line-height: 28px;
  text-align: ${(props: Heading3Props) => props.alignment};
  font-weight: 700;
  letter-spacing: 0;
  color: ${(props: Heading3Props) => props.color};
`;

export const Heading3View = (props: Heading3Props) => {
  return <Heading3 {...props}>{props.text}</Heading3>;
};
