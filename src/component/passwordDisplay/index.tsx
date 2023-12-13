import React from "react";
import * as Style from "./style";

interface PasswordDisplayProps {
  generatedPassword: string;
}

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({
  generatedPassword,
}) => {
  return (
    <Style.DisplayContainer>
      <h2>Generated Password:</h2>
      <Style.PasswordText>{generatedPassword}</Style.PasswordText>
    </Style.DisplayContainer>
  );
};

export default PasswordDisplay;
