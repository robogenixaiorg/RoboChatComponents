import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import { Text } from '../Text';

const SkeletonContainer = createStyledComponent('rcx-skeleton__input', 'span');

export function Skeleton({ animated }) {
  return <SkeletonContainer>
    <Text.Skeleton animated={animated} />
  </SkeletonContainer>;
}

Skeleton.defaultProps = {
  animated: false,
};

Skeleton.displayName = 'InputBox.Skeleton';

Skeleton.propTypes = {
  animated: PropTypes.bool,
};