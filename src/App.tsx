import * as Style from "./styleApp";
import NavBar from "./component/navBer";
import InputForm from "./component/inputForm";
import PasswordDisplay from "./component/passwordDisplay";
import { useState } from "react";

interface GeneratedPasswordData {
  username: string;
  website: string;
  password: string;
}

function App() {
  const [generatedPassword, setGeneratedPassword] = useState("");

  const handleGeneratePassword = ({
    username,
    website,
    password,
  }: GeneratedPasswordData) => {
    // You can perform any additional logic here
    setGeneratedPassword(password);
  };

  return (
    <Style.AppContainer>
      <NavBar />
      <InputForm onGeneratePassword={handleGeneratePassword} />
      <PasswordDisplay generatedPassword={generatedPassword} />
    </Style.AppContainer>
  );
}

export default App;
