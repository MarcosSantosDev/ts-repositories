import React from 'react';
import { IconType } from 'react-icons/lib';
import { AiFillGithub, AiOutlineStar } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';

interface IconsType {
  name: string,
  icon: IconType
}

interface Props {
  iconName: string;
  fontSize?: string | number;
}

const icons: IconsType[] = [
  { name: 'github', icon: AiFillGithub },
  { name: 'peoples', icon: BsFillPeopleFill },
  { name: 'star', icon: AiOutlineStar },
];

export const iconLoader: React.FC<Props> = ({ iconName, fontSize }): JSX.Element => {
  const [IconElement] = icons.filter(({ name }) => (name === iconName)).map(({ icon }) => (icon));

  return IconElement ? <IconElement fontSize={fontSize} /> : <></>;
};
