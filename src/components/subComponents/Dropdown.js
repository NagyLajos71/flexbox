//ADDITIONAL DESCRIPTION AT THE BOTTTOM
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import {
  dropdownList1, //source of the parent category dropdown list
  dropdownList2, //source of the child category dropdown list
  dropdownList3, //source of the parent value dropdown lists
  dropdownList4, //source of the child value dropdown lists
} from "../../data/dropdownContent";
import {
  //for code readability I deliberately use 3 different actions, although even 1 could achieve the same goal
  DROPDOWN_SELECTION_HAPPENED,
  RESET_PARENT_VALUE_SELECTION_TO_NULL,
  RESET_CHILD_VALUE_SELECTION_TO_NULL,
} from "../../actions/actionTypes";

const Dropdown = ({
  dispatch,
  parentCategory, //category selection for parent component
  childCategory, //category selection for child component
  parentId, //value can be 'parent settings' OR 'item settings'
  usedFor, //value can be 'categorySelection' OR 'valueSelection'
}) => {
  const thisDropdown = useRef(); //reference to the dropdown list

  //TO DETERMINE WHICH OF THE 4 DROPDOWN ROLES TO APPLY TO THIS PARTICULAR CASE:
  const dropdownSelector = (parentId, usedFor) => {
    switch (true) {
      case parentId === "parent settings" && usedFor === "categorySelection":
        return { id: "PC", menu: dropdownList1 }; //PC=parent category
      case parentId === "parent settings" && usedFor === "valueSelection":
        return {
          id: "PV", //PV=parent value
          menu: parentCategory ? dropdownList3[parentCategory] : null,
        };
      case parentId === "item settings" && usedFor === "categorySelection":
        return { id: "IC", menu: dropdownList2 }; //IC=item category
      case parentId === "item settings" && usedFor === "valueSelection":
        return {
          id: "IV", //IV=item value
          menu: childCategory ? dropdownList4[childCategory] : null,
        };
      default:
        return;
    } //end switch
  }; //end dropdownSelector

  //WHAT IS THE CURRENT ID, AND WHAT OPTION LIST TO APPLY?
  const dropdownID = dropdownSelector(parentId, usedFor).id; //can be one of these four options: PC/PV/IC/IV
  const dropdownMenu = dropdownSelector(parentId, usedFor).menu;

  //RENDERING THE OPTIONS FOR <select/> ELEMENT:
  const renderedMenuOptions = dropdownMenu
    ? dropdownMenu.map((item) => {
        return (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        );
      })
    : null;

  //BOILERPLATE FN TO DISPATCH DROPDOWN SELECTION TO REDUX STORE:
  const dispatchTheseValues = (text, id, value) => {
    dispatch({
      type: text,
      payload: {
        dropdownID: id,
        selectedValue: value,
      },
    });
  };

  //BOILERPLATE FN TO CLEAR PREVIOUS SELECTION
  const clearPreviousValueFromDropdownMenu = () => {
    thisDropdown.current.selectedIndex = -1;
  };

  //IF A DROPDOWN OPTION IS SELECTED:
  const handleSelection = () => {
    const selectedValue = thisDropdown.current.value; //this is the current dropdown selection
    dispatchTheseValues(DROPDOWN_SELECTION_HAPPENED, dropdownID, selectedValue);
  };

  //SOMETIMES WE NEED THE DROPDOWN MENU DISABLED:
  const [disabledOnOrOff, setdisabledOnOrOff] = useState(true); //hande <select disabled/>

  //WHAT SHOULD HAPPEN WITH THE VALUE DROPDOWN IF CATEGORY SELECTION CHANGES?
  //...if this is happening in the parent settings component:
  useEffect(() => {
    if (dropdownID === "PV") {
      //reset the value in Redux store
      dispatchTheseValues(
        RESET_PARENT_VALUE_SELECTION_TO_NULL, //if parent category dropdown changes, reset value dropdown
        dropdownID,
        null //new value for value selection
      );
      clearPreviousValueFromDropdownMenu(); //clear dropdown menu @ value selection
      //toggle access and visibility (disabled property)
      if (!parentCategory) {
        //note: this if is embedded >>> (if dropdownID==='PV' && !parendSelectedCategory); dont confuse it with what is happening a few lines below!
        setdisabledOnOrOff(true);
      } else {
        setdisabledOnOrOff(false);
      }
    } //end if dropdownID === "PV"
    if (!parentCategory) {
      //this code snippet belongs to reset button click
      clearPreviousValueFromDropdownMenu(); //reset button click triggers the change in
      //state.parentComponent.userSelected Category/value = null in the Redux Store;
      //this action requires to clear the dropdownfield as well
    }
  }, [parentCategory]);
  //...if this is happening in the item settings component:
  useEffect(() => {
    if (dropdownID === "IV") {
      //if child category dropdown changes, reset it`s value selection dropdown menu
      dispatchTheseValues(
        RESET_CHILD_VALUE_SELECTION_TO_NULL, //reset the value in Redux store
        dropdownID,
        null //to this new value
      );
      clearPreviousValueFromDropdownMenu(); //clear dropdown menu
      //toggle access and visibility (disabled property)
      if (!childCategory) {
        //note: this is also an embedded if statement, not the same as a few lines below!
        setdisabledOnOrOff(true); //<select/> is disabled
      } else {
        setdisabledOnOrOff(false); //NOT disabled
      }
    } //end if dropdownID === "IV"
    if (!childCategory) {
      //this code snippet belongs to reset button click
      clearPreviousValueFromDropdownMenu();
      //reset button click triggers change in state.childComponent.userSelected Category/Value = null in the Redux Store.
      //This action requires to clear the dropdownfield as well
    }
  }, [childCategory]);
  //END OF: WHAT SHOULD HAPPEN WITH THE VALUE.... code snippet

  //RENDERING THE DROPDOWN COMPONENT:
  return (
    <div>
      <select
        ref={thisDropdown} //part of useRef hook
        onChange={handleSelection}
        disabled={usedFor === "valueSelection" ? disabledOnOrOff : false}
      >
        <option></option>
        {renderedMenuOptions}
      </select>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    parentCategory: state.parentComponent.userSelectedCategory,
    childCategory: state.childComponent.userSelectedCategory,
  };
};
export default connect(mapStateToProps)(Dropdown);

/*
Parent component: DropdownCard;
Child component: none;
The component`s task:
the dropdown menu provides 4 dropdowns:
-parent component setting: flexbox category selection
-parent component setting: flexbox value selection for the selected category
-child component setting: flexbox category selection
-child component setting: flexbox value selection for the selected category
to determine which use of the 4 roles above is applied to the <Dropdown/> component
there is a function called: dropdownSelector

dropdownSelector FN takes to arguments (parent component and usedFor), and generates an ID 
and a dropdown menu (=options to select) for every usecase
If the dropdown is used for value selection (the two lower dropdowns), the menu always
reset to clear line whenever the category changes (also it`s value stored in Redux Store will be null)

dispatchTheseValues FN will dispatch the selection to the Redux Store

handleSelection FN is linked to the selection`s onChange property. It will call the dispatchTheseValues FN,
and assigns value to it.

clearPreviousValueFromDropdownMenu FN makes the dropdown line empty

there is a huge section of the code above with this comment: //WHAT SHOULD HAPPEN WITH THE VALUE DROPDOWN IF CATEGORY SELECTION CHANGES?
two useEffects are dealing with this question: one for parent settings and the other for item settings
if the category changes, the previous value selection should be cleared, and it`s previous value should be cleared from the Redux Store.

if the RESET button is clicked, it clears the dropdown selection to empty (both category and value selections for both parent/item panels)
it will turn the category data and the value selection data in the Redux Store to null. (this code is among Button/DropdownCard component code)
When the category data becomes null, here the two useEffects notice this change, and the if (!parentCategory) or if (!childCategory) code 
snippets take care that part when they need to clear the previous displayed option to empty line.
*/
