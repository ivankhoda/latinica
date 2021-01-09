import React, { useState } from "react";
import styled from "styled-components";
import lettersObj, { ILetter } from "../../lib/letters";
const WorkingFields = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 1280px;
  margin: auto;
`;
const TranslateField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: grey solid 1px;
  min-width: 500px;
  min-height: 200px;
`;
const TextToTranslate = styled.input`
  width: 99%;
  min-height: 300px;
  border: none;
  ::-webkit-input-placeholder {
    text-align: center;
  }
`;
const TranslateButton = styled.button`
  border-radius: 50px;
`;
const TranslateForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const TranslatedText = styled.div`
  background-color: rgba(238, 232, 232, 0.5);
  min-height: 300px;
  max-width: 500px;
`;

const WorkingField = () => {
  const [text, setText] = useState("Введите текст...");
  const [translate, setTranslate] = useState("");

  const onChange = (e) => {
    let text = e.currentTarget.value;
    setText(text);
  };
  const onSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    let wordsArr = text.split("");

    let cyryllicLetters: Array<ILetter["cyr"]> = [];
    wordsArr.forEach((word) => {
      cyryllicLetters.push(
        lettersObj.find((letter) => letter.cyr === word)?.lat!
      );
    });
    setTranslate(cyryllicLetters.join(""));
  };

  return (
    <WorkingFields>
      <TranslateField>
        <TranslateForm>
          <h4 className="translate-form_title">Введите здесь</h4>
          <TextToTranslate
            className="translate-form_input"
            placeholder={text}
            onChange={onChange}
          ></TextToTranslate>
        </TranslateForm>
      </TranslateField>
      <TranslateButton
        className="far fa-angle-double-right"
        type="submit"
        onClick={onSubmit}
      >
        Нажми, чтобы перевести
      </TranslateButton>
      <TranslateField>
        <h4 className="translated-field_title">Vash perevod</h4>
        <TranslatedText>{translate}</TranslatedText>
      </TranslateField>
    </WorkingFields>
  );
};

export default WorkingField;
