import React, { FC } from 'react';
import { tagText } from './data/data';
import styled from 'styled-components/macro';

type TagProps = {
  level: string;
  competency: string;
  specialism: string;
};

type StyledTagProps = {
  color: string;
};

type StyledSmallTagProps = {
  color: string;
};

const StyledTag = styled.span<StyledTagProps>`
  height: 24px;
  width: fit-content;
  display: inline-block;
  background-color: ${({ color }) => color};
  color: white;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  line-height: 16px;
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
`;

const StyledSmallTag = styled.span<StyledSmallTagProps>`
  height: 24px;
  background-color: ${({ color }) => color};
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  margin-left: 10px;
`;

const tagLevels = ['Principal Consultant', 'Managing Principal'];
const tagCompetencies = ['Technical Leadership', 'Management'];
const tagData = tagText as any;

export const Tag: FC<TagProps> = ({ level, competency, specialism }) => {
  return (
    <>
      {tagLevels.includes(level) && tagCompetencies.includes(competency) && (
        <StyledTag color={tagData[competency][level].color}>
          {tagData[competency][level][specialism].name}
        </StyledTag>
      )}
    </>
  );
};

export const SmallTag: FC<TagProps> = ({ level, competency, specialism }) => {
  return (
    <>
      {tagLevels.includes(level) && tagCompetencies.includes(competency) && (
        <StyledSmallTag color={tagData[competency][level].color}>
          {tagData[competency][level][specialism].short}
        </StyledSmallTag>
      )}
    </>
  );
};
