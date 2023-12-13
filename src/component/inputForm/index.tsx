import React, { useState } from "react";
import * as Style from "./style";

interface InputFormProps {
  onGeneratePassword: (data: {
    username: string;
    website: string;
    password: string;
  }) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onGeneratePassword }) => {
  const [username, setUsername] = useState("");
  const [website, setWebsite] = useState("");

  const handleGeneratePassword = () => {
    // Validate inputs and generate password logic here
    const generatedPassword = username + website; // Replace with your password generation logic
    onGeneratePassword({ username, website, password: generatedPassword });
  };

  return (
    <Style.FormContainer>
      <Style.StyledInput
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Style.StyledInput
        type="text"
        placeholder="Website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <Style.StyledButton onClick={handleGeneratePassword}>
        Generate Password
      </Style.StyledButton>
    </Style.FormContainer>
  );
};

export default InputForm;
