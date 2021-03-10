//ADDITIONAL DESCRIPTION AT THE BOTTTOM
import React from "react";
import { connect } from "react-redux";
import Button from "../subComponents/Button";
import DropDown from "../subComponents/Dropdown";
import { CLICK_ON_RESET_BTN } from "../../actions/actionTypes";
import { useEffect, useState } from "react";

const DropDownCard = ({
  parentId,
  clickedActionboxLetter, //visual feedback to show which actionbox is currently selected
  actionboxStyle, //background color for clickedActionboxLetter
}) => {
  //SET UP BACKGROUND COLOR FOR REFERENCE LETTER (SAME COLOR AS THE CURRENTLY CLICKED ACTIONBOX HAS)
  const [letterBackground, setLetterBackground] = useState("transparent");
  useEffect(() => {
    if (actionboxStyle) {
      setLetterBackground(actionboxStyle.backgroundColor);
    } else {
      setLetterBackground("transparent");
    }
  }, [actionboxStyle]); //depending on the currently clicked actionbox

  //COMPONENT RENDERING:
  return (
    <div>
      <React.Fragment>
        {/* colored reference letter box - visible only at item settings panel*/}
        {parentId === "item settings" && clickedActionboxLetter ? (
          <div
            className="referenceLetter"
            style={{ backgroundColor: letterBackground }}
          >
            {clickedActionboxLetter}
          </div>
        ) : null}
      </React.Fragment>
      {/* two dropdowns with titles and reset button: parent settings: ALWAYS visible, item settings: VISIBLE ONLY IF....*/}
      {parentId === "parent settings" ||
      (parentId === "item settings" && clickedActionboxLetter) ? (
        <React.Fragment>
          <h4>select a category</h4>
          <DropDown parentId={parentId} usedFor={"categorySelection"} />
          <h4>select a value</h4>
          <DropDown parentId={parentId} usedFor={"valueSelection"} />
          <Button
            btnSign={"RESET"}
            toDispatch={{ text: CLICK_ON_RESET_BTN, payload: parentId }}
          />
        </React.Fragment>
      ) : (
        <p>click on a colored box to activate this panel</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    clickedActionboxLetter: state.childComponent.clickedActionboxLetter,
    actionboxStyle: state.childComponent.computedStyle,
  };
};
export default connect(mapStateToProps)(DropDownCard);

/*
Parent component: SettingsPanel;
Child components: Dropdown, Button;
The component`s task:
-at parent setting provide two dropdowns to modify the flexbox settings applicable to parent component (DemoScreen);
  the reset button will re-set the initial flexbox values for the DemoScreen;
-at item setting: modify the flexbox settings applicable for child component (only to the clicked ActionBox)
  the reset button will re-set all actionbox settings to the initial values;
  please note that the item setting`s elements are visible only if the user clicks on any colored actionbox.

parentId - determines if the dropdown is used for parent component setting (=modify the DemoScreen component) 
or item setting (=modify the clicked actionbox solely);
It is coming from the SettingsPanel, and it value is the same as the panel title (parent settings or item settings)

usedFor -determines if the drpdown is for category selection, or
finetuning the category with value selection; example: align-items(=category) flex-start/center/baseline/normal etc(=value)

clickedActionboxLetter- is the feedback of the selected(clicked) actionbox. Should be the same character as on the clicked actionBox. 
It appears only when an actionbox is clicked so the user knows which is the 'child compononent' for the flexbox settings;
the background color for the square that contains the clickedActionboxLetter is the same as the currently selected ActionBox has.
If nothing is selected, the background color is transparent.

the HTML structure of this component in plain English:
the colored reference letter box is visible only at item settings panel
the two dropdowns with titles and reset button at parent setting panel -ALWAYS VISIBLE
the two dropdowns with titles and reset button at parent item panel is VISIBLE ONLY IF clickedActionboxLetter is true (the user clicked on any actionbox)
*/
