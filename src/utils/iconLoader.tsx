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

type Icon = {
  name: string,
  Icon: IconType
}

const icons: Icon[] = [
  { name: 'repository', Icon: GoRepo },
  { name: 'github', Icon: GoMarkGithub },
  { name: 'organization', Icon: GoOrganization },
  { name: 'star', Icon: AiOutlineStar },
  { name: 'link', Icon: AiOutlineLink },
  { name: 'location', Icon: GoLocation },
  { name: 'officeBuilding', Icon: FaRegBuilding },
  { name: 'forked', Icon: GoRepoForked },
  { name: 'law', Icon: GoLaw },
];

export const iconLoader = (iconName: string, fontSize?: string | number): JSX.Element => {
  const IconElement = icons.find((icon) => (icon.name === iconName));

  return IconElement ? <IconElement.Icon color="#6a737d" fontSize={fontSize} /> : <></>;
};
