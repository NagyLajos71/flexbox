//ADDITIONAL DESCRIPTION AT THE BOTTTOM
import React from "react";
import { connect } from "react-redux";

const Button = ({ toDispatch, btnSign, dispatch }) => {
  const clickHandler = (toDispatch) => {
    dispatch({ type: toDispatch.text, payload: toDispatch.payload });
  };

  return (
    <button
      className={`btn ${btnSign!=='RESET'? 'btnPlusMinus' : ''}`}
      onClick={() => {
        clickHandler(toDispatch);
      }}
    >
      {btnSign}
    </button>
  );
};

export default connect()(Button);
/*
Parent component: SettingsPanel, DropdownCard;
Child components: none;
The component`s task:
providing plus/minus functionality to change the number of ActionBoxes
reset parent setting dropdowns, clear redux store and trigger the change in the DemoScreen component`s css settings
reset item (child component) setting dropdowns, clear redux store and trigger the change in all the Actionbox component`s css settings

toDispatch - object with text and payload properties
the toDispatch.text can be: CLICK_ON_PLUS_BTN, CLICK_ON_MINUS_BTN, CLICK_ON_RESET_BTN
btnSign - can be: + or - or reset
*/
