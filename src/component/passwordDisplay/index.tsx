// import React, { useState } from "react";
// import * as Style from "./style";
// import { getHash, passwordGenerator } from "../hashHandling";

// interface PasswordDisplayProps {
//   generatedPassword: string;
// }

// const PasswordDisplay: React.FC<PasswordDisplayProps> = ({
//   generatedPassword,
// }) => {
//   // const [numbersPassword, setNumbersPassword] = useState('')
//   // const [lettersPassword, setLettersPassword]  = useState('')
//   // const [numbersAndLettersPassword, setNumbersAndLettersPassword] = useState('')
//   // const [upperCasePassword, setUpperCasePassword] = useState('')
//   // const [transformToSign, setTransformToSign] = useState('')
  
//   // if (generatedPassword && generatedPassword.length > 0) {
//     const hash = getHash(generatedPassword)
//     const {numbersPassword, lettersPassword, numbersAndLettersPassword, upperCasePassword, transformToSign} = passwordGenerator(hash, 8)
//     // setNumbersPassword(numbersPassword) 
//     // setLettersPassword(lettersPassword)
//     // setNumbersAndLettersPassword(numbersAndLettersPassword)
//     // setUpperCasePassword(upperCasePassword)
//     // setTransformToSign(transformToSign)
//   // }
//   return (
//     <Style.DisplayContainer>
//       <h2>Generated Password:</h2>
//       <Style.PasswordText>{generatedPassword}</Style.PasswordText>
//       <Style.PasswordText>{numbersPassword}</Style.PasswordText>
//       <Style.PasswordText>{lettersPassword}</Style.PasswordText>
//       <Style.PasswordText>{numbersAndLettersPassword}</Style.PasswordText>
//       <Style.PasswordText>{upperCasePassword}</Style.PasswordText>
//       <Style.PasswordText>{transformToSign}</Style.PasswordText>
//     </Style.DisplayContainer>
//   );
// };

// export default PasswordDisplay;


import React from 'react';

type GeneratedPasswords = {
  [key: string]: string;
};

type PasswordType = keyof GeneratedPasswords;

const PasswordDisplay = ({
  generatedPasswords,
}: {
  generatedPasswords: GeneratedPasswords;
}) => {

  const mapGeneratedPasswords: Record<
    PasswordType,
    {label: string; securityLevel: string; color: string}
  > = {
    numbersPassword: {
      label: "Numbers only:",
      securityLevel: "Weak",
      color: 'red',
    },
    lettersPassword: {
      label: "Letters only:",
      securityLevel: "Medium",
      color: 'red',
    },
    numbersAndLettersPassword: {
      label: "Numbers and Letters:",
      securityLevel: "Strong",
      color: 'red',
    },
    upperCasePassword: {
      label: "Including capital letters:",
      securityLevel: "Very strong",
      color: 'red',
    },
    transformToSign: {
      label: "Including a sign:",
      securityLevel: "Very high",
      color: 'red',
    },
  };

  const copyToClipboard = (
    generatedPasswords: GeneratedPasswords,
    passwordType: string,
  ) => {
    // Clipboard.setString(generatedPasswords[passwordType]);
    // const password = mapGeneratedPasswords[passwordType].label;
    // CustomToast({
    //   type: 'info',
    //   title: t('generatedPasswords.copyPasswordTitle'),
    //   text: t('generatedPasswords.copyPasswordText', {password: password}),
    // });
    console.log("🚀 ~ file: index.tsx:100 ~ copyToClipboard:")
  };
  return (
    <view style={styles.outputContainer}>
      {Object.keys(generatedPasswords).map((passwordType: string) => (
        <div
          key={passwordType}
          onClick={() => copyToClipboard(generatedPasswords, passwordType)}>
          <div 
          // style={styles.securityLevelIndicator}
          >
            <text style={{...styles.label, color: 'black'}}>
              {mapGeneratedPasswords[passwordType].label}
            </text>
            <text style={{...styles.label, color: 'black'}}>
              {mapGeneratedPasswords[passwordType].securityLevel}
            </text>
          </div>
          {/* <LinearGradient
            style={styles.outputFrame}
            colors={[mapGeneratedPasswords[passwordType].color, 'transparent']}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 0}}>
            <View style={styles.outputRow}>
              <text style={styles.output}>
                {generatedPasswords[passwordType]}
              </text>
              <Svg
                height="16"
                width="16"
                viewBox="0 0 16 16"
                style={styles.copyButton}>
                <Path
                  d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"
                  fill={theme.colors.black}
                />
                <Path
                  d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"
                  fill={theme.colors.black}
                />
              </Svg>
            </View>
          </LinearGradient> */}
        </div>
      ))}
    </view>
  );
};

const styles = {
  copyButton: {
    padding: 8,
    borderRadius: 8,
    marginLeft: 100,
    borderWidth: 2,
    borderColor: 'black',
  },
  copyButtonText: {
    fontSize: 16,
    color: 'white',
  },
  output: {
    fontSize: 18,
    flex: 1,
    textAlign: 'left',
    color: 'black',
  },
  outputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  outputFrame: {
    backgroundColor: 'greyAlpha',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 10,
    color: 'black',
  },
  securityLevelIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  outputContainer: {
    width: '100%',
  },
};

export default PasswordDisplay;
