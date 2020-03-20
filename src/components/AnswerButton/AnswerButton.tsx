import React from 'react';
import { Button } from 'semantic-ui-react';

interface Props {
  type: 'true' | 'false';
  onPress: () => void;
}

export function AnswerButton({ type, onPress }: Props) {
  return (
    <Button
      icon={type === 'true' ? 'check' : 'cancel'}
      circular
      positive={type === 'true'}
      negative={type === 'false'}
      onClick={onPress}
      size="massive"
    />
  );
}
