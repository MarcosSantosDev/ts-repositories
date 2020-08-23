import React from 'react';
import { IconType } from 'react-icons/lib';
import { AiFillGithub, AiOutlineStar, AiOutlineLink } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { TiLocation } from 'react-icons/ti';
import { FaRegBuilding } from 'react-icons/fa';

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
  { name: 'link', icon: AiOutlineLink },
  { name: 'location', icon: TiLocation },
  { name: 'officeBuilding', icon: FaRegBuilding },
];

export const iconLoader: React.FC<Props> = ({ iconName, fontSize }): JSX.Element => {
  const [IconElement] = icons.filter(({ name }) => (name === iconName)).map(({ icon }) => (icon));

  return IconElement ? <IconElement color="#6a737d" fontSize={fontSize} /> : <></>;
};
