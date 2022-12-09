import React from 'react';
import styled from 'styled-components/native';

interface BodyBigProps {
  text: string;
  color: string;
  alignment: string;
}

const BodyBig = styled.Text<BodyBigProps>`
  font-size: 19px;
  line-height: 24px;
  text-align: ${(props: BodyBigProps) => props.alignment};
  font-weight: 400;
  letter-spacing: 0;
  color: ${(props: BodyBigProps) => props.color};
`;

export const BodyBigView = (props: BodyBigProps) => {
  return <BodyBig {...props}>{props.text}</BodyBig>;
};

interface BodyBigBoldProps {
  text: string;
  color: string;
  alignment: string;
}

const BodyBigBold = styled.Text<BodyBigBoldProps>`
  font-size: 19px;
  line-height: 24px;
  text-align: ${(props: BodyBigBoldProps) => props.alignment};
  font-weight: 700;
  letter-spacing: -0.32px;
  color: ${(props: BodyBigBoldProps) => props.color};
`;

export const BodyBigBoldView = (props: BodyBigBoldProps) => {
  return <BodyBigBold {...props}>{props.text}</BodyBigBold>;
};

interface BodyProps {
  text: string;
  color: string;
  alignment: string;
}

const Body = styled.Text<BodyProps>`
  font-size: 17px;
  line-height: 24px;
  text-align: ${(props: BodyProps) => props.alignment};
  font-weight: 400;
  letter-spacing: 0;
  color: ${(props: BodyProps) => props.color};
  margin-bottom: 24px;
`;

export const BodyView = (props: BodyProps) => {
  return <Body {...props}>{props.text}</Body>;
};

interface BodyBoldProps {
  text: string;
  color: string;
  alignment: string;
}

const BodyBold = styled.Text<BodyBoldProps>`
  font-size: 17px;
  line-height: 24px;
  text-align: ${(props: BodyBoldProps) => props.alignment};
  font-weight: 700;
  letter-spacing: -0.32px;
  color: ${(props: BodyBoldProps) => props.color};
`;

export const BodyBoldView = (props: BodyBoldProps) => {
  return <BodyBold {...props}>{props.text}</BodyBold>;
};

interface BodySmallProps {
  text: string;
  color: string;
  alignment: string;
}

const BodySmall = styled.Text<BodySmallProps>`
  font-size: 14px;
  line-height: 24px;
  text-align: ${(props: BodySmallProps) => props.alignment};
  font-weight: 400;
  letter-spacing: 0.16px;
  color: ${(props: BodySmallProps) => props.color};
`;

export const BodySmallView = (props: BodySmallProps) => {
  return <BodySmall {...props}>{props.text}</BodySmall>;
};

interface BodySmallBoldProps {
  text: string;
  color: string;
  alignment: string;
}

const BodySmallBold = styled.Text<BodySmallBoldProps>`
  font-size: 14px;
  line-height: 24px;
  text-align: ${(props: BodySmallBoldProps) => props.alignment};
  font-weight: 700;
  letter-spacing: -0.16px;
  color: ${(props: BodySmallBoldProps) => props.color};
`;

export const BodySmallBoldView = (props: BodySmallBoldProps) => {
  return <BodySmallBold {...props}>{props.text}</BodySmallBold>;
};

interface BodyTinyProps {
  text: string;
  color: string;
  alignment: string;
}

const BodyTiny = styled.Text<BodyTinyProps>`
  font-size: 12px;
  line-height: 16px;
  text-align: ${(props: BodyTinyProps) => props.alignment};
  font-weight: 400;
  letter-spacing: 0.32px;
  color: ${(props: BodyTinyProps) => props.color};
`;

export const BodyTinyView = (props: BodyTinyProps) => {
  return <BodyTiny {...props}>{props.text}</BodyTiny>;
};

interface BodyTinyBoldProps {
  text: string;
  color: string;
  alignment: string;
}

const BodyTinyBold = styled.Text<BodyTinyBoldProps>`
  font-size: 12px;
  line-height: 16px;
  text-align: ${(props: BodyTinyBoldProps) => props.alignment};
  font-weight: 700;
  letter-spacing: 0.16px;
  color: ${(props: BodyTinyBoldProps) => props.color};
`;

export const BodyTinyBoldView = (props: BodyTinyBoldProps) => {
  return <BodyTinyBold {...props}>{props.text}</BodyTinyBold>;
};
