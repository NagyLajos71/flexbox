//ADDITIONAL DESCRIPTION AT THE BOTTTOM
import React from "react";
import Button from "../subComponents/Button";
import DropDownCard from "../subComponents/DropdownCard";
import InfoCard from "../subComponents/InfoCard";
import FlippingCard from "../subComponents/FlippingCard";
import {
  CLICK_ON_PLUS_BTN,
  CLICK_ON_MINUS_BTN,
} from "../../actions/actionTypes";

const addlPanelClassName = (title) => {
  if (title === "panel") {
    return "itemsPanel";
  } else if (title === "parent settings") {
    return "parentSettingsPanel";
  } else {
    return "itemSettingsPanel";
  }
};
const SettingsPanel = ({ title }) => {
  return (
    <div className={`panel ${addlPanelClassName(title)}`}>
      <div className="panelTitle">
        <h3>{title}</h3>
      </div>
      <div className="panelColumn">
        {title === "items" ? (
          <FlippingCard parentId={title} />
        ) : (
          <DropDownCard parentId={title} />
        )}
      </div>

      <div className="panelColumn">
        {title === "items" ? (
          <>
            <Button
              btnSign={"+"}
              toDispatch={{ text: CLICK_ON_PLUS_BTN, payload: null }}
            />
            <Button
              btnSign={"-"}
              toDispatch={{ text: CLICK_ON_MINUS_BTN, payload: null }}
            />
          </>
        ) : (
          <InfoCard parentId={title} />
        )}
      </div>
    </div>
  );
};
export default SettingsPanel;
/*
Parent component: App.js;
Child components: DropdownCard, Button, InfoCard, FlippingCard;
The component`s task:
This panel occupies the left column of the screen. There are 3 settingspanels present on the left column.
Depending on it`s task it can accomodate the

-ITEMS : buttons and a flipping sign about the quantity of the ActionBoxes

-PARENT SETTINGS: a dropdownCard with two dropdowns(left) and an Infocard (right) to inform
  the current parent component flexbox settings

-ITEM SETTINGS: (or child component settings). It also contains a a dropdownCard with two dropdowns,
  and an Infocard. The settings and the information is directing/getting from the currently clicked ActionBox
*/
