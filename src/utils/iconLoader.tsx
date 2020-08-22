import React from 'react';
import { IconType } from 'react-icons/lib';
import { AiFillGithub } from 'react-icons/ai';
import { BsPeopleCircle } from 'react-icons/bs';

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
  { name: 'profile', icon: BsPeopleCircle },
];

export const iconLoader: React.FC<Props> = ({ iconName, fontSize }): JSX.Element => {
  const [IconElement] = icons.filter(({ name }) => (name === iconName)).map(({ icon }) => (icon));

  return IconElement ? <IconElement fontSize={fontSize} /> : <></>;
};
