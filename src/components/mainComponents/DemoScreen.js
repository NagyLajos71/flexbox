//ADDITIONAL DESCRIPTION AT THE BOTTTOM
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import ActionBox from "../subComponents/ActionBox"; //colored small boxes with big letters on them
import { resetToInitialFlexboxSettings } from "../../data/demoScreenData"; //css settings in string format
import { PARENTCOMPONENT_GETCOMPUTEDSTYLE } from "../../actions/actionTypes";

const DemoScreen = ({
  actionBox, //all actionbox data: quantity & IdList
  selectedCategory, //dropdown value for parent component category selection
  selectedValue, //dropdown value for parent component value selection
  dispatch, //to dispatch data to Redux Store
  triggerComponentToReset, //fake counter; it`s change triggers this component to re-set initial flexbox values
}) => {
  const thisComponent = useRef(); //useRef.current is referencing to this component (from flexbox perspective this is the entire PARENT COMPONENT)

  //READ CURRENT SETTING & APPLLY NEW FLEXBOX SETTINGS:
  useEffect(() => {
    //get and dispatch current computed style of the PARENT component whenever any change occurs in dropdown selection:
    const parentComponentStye = window.getComputedStyle(
      thisComponent.current,
      null
    ); //reading the current css settings
    dispatch({
      //sending it to Redux Store
      type: PARENTCOMPONENT_GETCOMPUTEDSTYLE,
      payload: { parentComponentStye }, //a few lines earlier previously read via window.getComputedStyle()
    });
    //setting new flexbox values as per the user changes dropdown selection:
    if (selectedValue) {
      thisComponent.current.style[selectedCategory] = selectedValue;
      //no need to trigger this event with selectedCategory, because the user can access to value selection if already the category is already selected.
      //the complete new setting consist the category and the value selection together. Value selection is the last step, so that can trigger to apply the new settings to the component/
    }
  }, [selectedValue]);

  //RESET INITIAL FLEXBOX SETTINGS:
  useEffect(() => {
    thisComponent.current.style.cssText = resetToInitialFlexboxSettings; //reset button click will assign the initial flexbox settings to this component
  }, [triggerComponentToReset]);

  //ACTIONBOXES TO SHOW INSIDE THE COMPONENT
  //get a slice from all possible actionBox IDs - this will determine how many boxes can we see on the screen
  const renderedIDs = Array.from(actionBox.IDList.slice(0, actionBox.quantity)); //quantity can be adjusted by +/- button clicks
  //rendering as many actionboxes as many IDs we have above
  const renderedActionBoxes = renderedIDs.map((bigLetterToDisplay) => {
    return (
      <ActionBox
        key={bigLetterToDisplay}
        bigLetterToDisplay={bigLetterToDisplay}
      />
    );
  });

  //RENDERING THE DEMOSCREEN COMPONENT ITSELF:
  return (
    <div
      ref={thisComponent} //useRef was assigned above
      className={"demoScreen"}
    >
      {renderedActionBoxes}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    actionBox: state.actionBox, //all actionbox data: quantity & IdList
    selectedCategory: state.parentComponent.userSelectedCategory, //dropdown menu (category) selection - parent settings
    selectedValue: state.parentComponent.userSelectedValue, //dropdown menu (value) selection - parent settings
    triggerComponentToReset: state.parentComponent.triggerComponentToReset, //to oversee if the component needs to reset to initial Flexbox setting (to pre-userselections)
  };
};
export default connect(mapStateToProps)(DemoScreen);
/*
Parent component: App.js;
Child components: ActionBox;
The component`s task:
to display the effects of all kind of flexbox settings. Those can be selected and adjusted by the user via the dropdown menus.
Please be aware that there are two major branches of all the flexbox settings. One branch is applicable to the parent component (this is it)
and the other branch of settings is applicable on child component (in this app: ActionBoxes)
All the accumulated effect of the  parent settings dropdowns will be visible on this component (if the effect is visible by nature)
*/
