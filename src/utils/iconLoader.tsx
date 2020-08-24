import React from 'react';
import { IconType } from 'react-icons/lib';
import { AiOutlineStar, AiOutlineLink } from 'react-icons/ai';
import { FaRegBuilding } from 'react-icons/fa';
import {
  GoRepo,
  GoRepoForked,
  GoLocation,
  GoLaw,
  GoMarkGithub,
  GoOrganization,
} from 'react-icons/go';

interface IconsType {
  name: string,
  icon: IconType
}

interface Props {
  iconName: string;
  fontSize?: string | number;
}

const icons: IconsType[] = [
  { name: 'repository', icon: GoRepo },
  { name: 'github', icon: GoMarkGithub },
  { name: 'organization', icon: GoOrganization },
  { name: 'star', icon: AiOutlineStar },
  { name: 'link', icon: AiOutlineLink },
  { name: 'location', icon: GoLocation },
  { name: 'officeBuilding', icon: FaRegBuilding },
  { name: 'forked', icon: GoRepoForked },
  { name: 'law', icon: GoLaw },
];

export const iconLoader: React.FC<Props> = ({ iconName, fontSize }): JSX.Element => {
  const [IconElement] = icons.filter(({ name }) => (name === iconName)).map(({ icon }) => (icon));

  return IconElement ? <IconElement color="#6a737d" fontSize={fontSize} /> : <></>;
};
