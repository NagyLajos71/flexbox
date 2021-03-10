import {
  CLICK_ON_PLUS_BTN, //dispatch is coming from SettingsPanel>Button
  CLICK_ON_MINUS_BTN, //dispatch is coming from SettingsPanel>Button
  CLICK_ON_RESET_BTN, //dispatch is coming from DropdownCard>Button
  DROPDOWN_SELECTION_HAPPENED, //dispatch is coming from Dropdown
  RESET_PARENT_VALUE_SELECTION_TO_NULL, //dispatch is coming from Dropdown
  RESET_CHILD_VALUE_SELECTION_TO_NULL, //dispatch is coming from Dropdown
  PARENTCOMPONENT_GETCOMPUTEDSTYLE, //dispatch is coming from DemoScreen
  UPDATE_COMPUTED_VALUE, //dispatch is coming from Actionbox
  ACTIONBOX_WAS_CLICKED, //dispatch is coming from Actionbox
} from "../actions/actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case CLICK_ON_PLUS_BTN: //the nuber of actionboxes will increase
      if (state.actionBox.quantity < state.actionBox.IDList.length) {
        return {
          ...state,
          actionBox: {
            ...state.actionBox,
            quantity: state.actionBox.quantity + 1,
          },
        };
      }
      return state; //end case CLICK_ON_PLUS_BTN

    case CLICK_ON_MINUS_BTN: //the nuber of actionboxes will decrease
      if (state.actionBox.quantity > 0) {
        return {
          ...state,
          actionBox: {
            ...state.actionBox,
            quantity: state.actionBox.quantity - 1,
          },
        };
      }
      return state; //end case CLICK_ON_MINUS_BTN

    case CLICK_ON_RESET_BTN: //all the previously changed settings will be re-set to initial values
      if (action.payload === "parent settings") {
        //re-set Parent component
        return {
          ...state,
          parentComponent: {
            ...state.parentComponent,
            userSelectedCategory: null,
            userSelectedValue: null,
            triggerComponentToReset:
              state.parentComponent.triggerComponentToReset + 1, //false counter; what i need is a usefect to monitor the change; copul.d be boolean, too
          },
        };
      } else {
        //re-set child component
        return {
          ...state,
          childComponent: {
            ...state.childComponent,
            userSelectedCategory: null,
            userSelectedValue: null,
            clickedActionboxLetter:null,
            computedStyle:null,
            triggerComponentToReset:
              state.childComponent.triggerComponentToReset + 1, //false counter; what i need is a usefect to monitor the change; copul.d be boolean, too
          },
        };
      } // end case CLICK_ON_RESET_BTN:

    //these are all Dropdown component dispatches;
    //the reason I did use 3 different messages for the same effect  is the code readability
    case DROPDOWN_SELECTION_HAPPENED:
    case RESET_PARENT_VALUE_SELECTION_TO_NULL:
    case RESET_CHILD_VALUE_SELECTION_TO_NULL:
      if (action.payload.dropdownID === "PC") {
        return {
          ...state,
          parentComponent: {
            ...state.parentComponent,
            userSelectedCategory: action.payload.selectedValue,
          },
        };
      } else if (action.payload.dropdownID === "PV") {
        return {
          ...state,
          parentComponent: {
            ...state.parentComponent,
            userSelectedValue: action.payload.selectedValue,
          },
        };
      } else if (action.payload.dropdownID === "IC") {
        return {
          ...state,
          childComponent: {
            ...state.childComponent,
            userSelectedCategory: action.payload.selectedValue,
          },
        };
      } else if (action.payload.dropdownID === "IV") {
        return {
          ...state,
          childComponent: {
            ...state.childComponent,
            userSelectedValue: action.payload.selectedValue,
          },
        };
      } else {
        return state;
      } //end case DROPDOWN_SELECTION/RESET_PARENT_VALUE_SELECTION/RESET_CHILD_VALUE

    case PARENTCOMPONENT_GETCOMPUTEDSTYLE: //update current style info so the Infocard can display the latest one
      return {
        ...state,
        parentComponent: {
          ...state.parentComponent,
          computedStyle: action.payload.parentComponentStye,
        },
      }; //end case PARENTCOMPONENT_GETCOMPUTEDSTYLE

    case ACTIONBOX_WAS_CLICKED: //update current style info so the Infocard can display the latest one
      return {
        ...state,
        childComponent: {
          ...state.childComponent,
          computedStyle: action.payload.childComponentStye,
          clickedActionboxLetter: action.payload.clickedActionboxLetter,
          userSelectedCategory: null, //clear previous data that belongs to different actionBox
          userSelectedValue: null,
        },
      }; //end case ACTIONBOX_WAS_CLICKED:

    case UPDATE_COMPUTED_VALUE: //update actionbox styling with the latest dropdown selections
      return {
        ...state,
        childComponent: {
          ...state.childComponent,
          computedStyle: action.payload.childComponentStye,
        },
      }; //end case UPDATE_COMPUTED_VALUE

    default:
      return state;
  } //end if switch statement
};
