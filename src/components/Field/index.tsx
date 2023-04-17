import React from 'react';

import { Container, Label, Input, InputMask } from './styles';
import { TextInputProps } from 'react-native';
import { TextInputMaskProps } from 'react-native-masked-text';

export type FieldSize = 'regular' | 'large';

interface FieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  fieldSize?: FieldSize;
  space?: boolean;
  masked?: boolean;
  inputProps?: TextInputProps;
  inputMaskProps?: TextInputMaskProps;
  hasError?: boolean;
}

const Field = ({
  value = '',
  onChange,
  label,
  fieldSize = 'regular',
  space,
  inputProps,
  inputMaskProps,
  masked = false,
  hasError,
}: FieldProps) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <Container fieldSize={fieldSize} space={space}>
      <Label>{label}</Label>
      {masked && inputMaskProps ? (
        <InputMask
          multiline={fieldSize === 'large'}
          fieldSize={fieldSize}
          value={value}
          onChangeText={onChange}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          isFocused={isFocused}
          hasError={hasError}
          {...inputMaskProps}
        />
      ) : (
        <Input
          multiline={fieldSize === 'large'}
          fieldSize={fieldSize}
          value={value}
          onChangeText={onChange}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          isFocused={isFocused}
          hasError={hasError}
          {...inputProps}
        />
      )}
    </Container>
  );
};

export default Field;
