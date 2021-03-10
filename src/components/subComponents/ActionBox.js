//ADDITIONAL DESCRIPTION AT THE BOTTTOM
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import {
  ACTIONBOX_WAS_CLICKED,
  UPDATE_COMPUTED_VALUE,
} from "../../actions/actionTypes";
import { defaultFlexboxSettings } from "../../data/actionBoxData"; //css data to restore the initial settings

const ActionBox = ({
  bigLetterToDisplay, //serves as unique ID on the Actionbox
  dispatch,
  clickedActionboxLetter, //feedback fro item settings panel to notify which actionbox was clicked
  selectedCategory, //item settings panel, upper dropdown value
  selectedValue, //item settings panel, lower dropdown value
  triggerComponentToReset, //fake counter; I use it to detect change; the change triggers a full res-set to initial value for all Actionboxes
}) => {
  const thisComponent = useRef(); //useRef.current is referencing this component

  //boilerplate FN to read the current FlexBox settings
  const computedStyle = () => {
    return window.getComputedStyle(thisComponent.current, null);
  };

  //IF THE USER CLICKS ON AN ACTIONBOX, send the current styling info to the Redux Store > InfoCard
  const clickHandler = () => {
    dispatch({
      type: ACTIONBOX_WAS_CLICKED,
      payload: {
        childComponentStye: computedStyle(),
        clickedActionboxLetter: bigLetterToDisplay,
      },
    });
  };

  //IF THE USER CHANGES A DROPDOWN VALUE (on the item settings panel, lower dropdown <--value selection), apply the change to this particular ActionBox
  useEffect(() => {
    //if an action box is already selected (clicked), and this is that particular actionbox...
    if (selectedValue && clickedActionboxLetter === bigLetterToDisplay) {
      thisComponent.current.style[selectedCategory] = selectedValue; //apply the new style based on the two dropdown selections (category + value) from item settings panel
      dispatch({
        //and notify the store about the new value, so the InfoCard (current settings) can display the latest data
        type: UPDATE_COMPUTED_VALUE,
        payload: { childComponentStye: computedStyle() },
      });
    }
  }, [selectedValue]);

  //IF RESET BTN IS CLICKED, RESET TO INITIAL CSS SETTINGS
  useEffect(() => {
    thisComponent.current.style.cssText = defaultFlexboxSettings;
  }, [triggerComponentToReset]);

  //RENDERING THE ACTIONBOX COMPONENT
  return (
    <div ref={thisComponent} className="actionBox" onClick={clickHandler}>
      {bigLetterToDisplay}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    clickedActionboxLetter: state.childComponent.clickedActionboxLetter, //reference from item settiings panel to identify which is the active actionbox
    selectedCategory: state.childComponent.userSelectedCategory, //item settings panel, category dropdown selection
    selectedValue: state.childComponent.userSelectedValue, //item settings panel, value dropdown selection
    triggerComponentToReset: state.childComponent.triggerComponentToReset, //fake counter.What I use it for is to detect any change. THe change triggers all actionboxes to re-set initial css settings
  };
};
export default connect(mapStateToProps)(ActionBox);
/*
Parent component: DemoScreen;
Child components: none;
The component`s task:
to display the effects of the different Flexbox settings the user can set with dropdown menus.
Please be aware how the Flexbox works. Some settings are pallicable only to parent components  (in this app this is the DemoScreen).
Some settings are applicable to the child components (in this App these are the individual ActionBoxes)

So an ActionBox (colored box with big letter on the right side of the screen) represents a child component from Flexbox point of view.
Hence my goal with this app is to show the effect of the flexbox settings, and not allow to try all the possible options the universe can offer,
I took the liberty to limit the users` option in some cases.
What do I mean by that? For example: the flex-basis property could be a combination of any number and any unit in real life. In this app the
user can select from my a few pre-determined options only.
Although certainly we can achieve that with an inputfield or an inputfield/dropdown combo, this is beyond what I want to achieve with this App, 
which is merely to try out a few flex-box settings, or the combined effects of different settings.
*/
