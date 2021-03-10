//ADDITIONAL DESCRIPTION AT THE BOTTTOM
import React from "react";
import { connect } from "react-redux";
import { dropdownList3, dropdownList4 } from "../../data/dropdownContent";

const InfoCard = ({
  parentId, //this value could be parent settings OR item settings
  parentComputedStyle, //window.getComputedStyle() values for the DemoScreen component
  childComputedStyle, //window.getComputedStyle() values for the clicked ActionBox component
  selectedCategoryParent, //dropdown menu selection for the parent component
  selectedCategoryChild, //dropdown menu selection for the selected child component
}) => {
  const categoryNames = Object.keys(
    //depending on parent or item setting dropdown, we use different data set to display as keys
    parentId === "parent settings" ? dropdownList3 : dropdownList4
  );
  
  const selectionToHighlight =
    parentId === "parent settings"
      ? selectedCategoryParent //drodown>store>infoCard
      : selectedCategoryChild; //drodown>store>infoCard

  const computedStyle =
    //shorthand to replace parentComputedStyle or childComputedStyle depending on where we are
    parentId === "parent settings" ? parentComputedStyle : childComputedStyle;

  //RENDERING THE KEY-VALUE PAIRS
  const renderedList = categoryNames.map((categoryName) => {
    return (
      <li
        key={categoryName}
        style={{
          color: selectionToHighlight === categoryName ? "white" : "black",
        }} //conditional styling
      >
        <p>{categoryName}:</p>
        <p>
          <span>{computedStyle ? computedStyle[categoryName] : "-"}</span>
        </p>
      </li>
    );
  });

  //REDNERING THE COMPONENT
  return (
    <React.Fragment>
      <h4>current settings:</h4>
      <ul>{renderedList}</ul>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedCategoryParent: state.parentComponent.userSelectedCategory, //this will be the key at parent settings
    selectedCategoryChild: state.childComponent.userSelectedCategory, //this will be the key at child settings
    parentComputedStyle: state.parentComponent.computedStyle, //this will be the value at parent settings
    childComputedStyle: state.childComponent.computedStyle, //this will be the value at child settings
  };
};
export default connect(mapStateToProps)(InfoCard);

/*
Parent component: SettingsPanel;
Child components: none;
The component`s task:
INFOCARD COMPONENTS SERVES AS A WRITTEN FEEDBACK ABOUT THE CURRENT FLEXBOX SETTINGS;
DEPENDING ON ITS LOCATION IT SERVES THE PARENT COMPONENT SETTTINGS 
AND THE ITEM SETTINGS (THIS IS THE INDIVIDUAL ACTIONBOX THE USER CLICKED ON)
As the user clicks on a dropdown menu, the selected flexbox category and its current value
will be highlighted with white text color (default: black)
For the ActionBox settings the values are not visible till the user clicks(selects) one

IMPORTed data: dropdownList3, dropdownList4 - this is raw data from the dropdown menus

PROPS:
parentId- this is used to determine if the component is used for parent setting or Item setting
parentComputedStyle, childComputedStyle - window.getcomputedstyle() values for the clicked ActionBox or the DemoScreen component
for the Actionboxes their value is calculated at every click; for the DemoScreen it is calculated when the user selects a value 
from the value dropdown (upper dropdowns are the category selections, the lower dropdowns are the value selections )

categoryNames-the list of all the dropdown opions ; these will be seen in every odd lines (1st, 3rd, etc)

selectionToHighlight- determines if we are in the parent setting or item setting panel. Then highlights the currently selected text for that compononent.

renderedList-map() thru all the dropdown options (options are different depending on parent or individual actionbox settings)
and create a <li/> from every dropdown line. 
in the <li/> the categoryName represents the category, computedStyle[categoryName] represents it`s current value
*/
