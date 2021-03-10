import { createStore } from "redux";
import { reducer } from "../reducers";
import { quantity, IDList } from "./actionBoxData";

const initialStore = {
  actionBox: {
    quantity, //how many boxes to display
    IDList, //string of unique letters and characters to display on Actionboxes and to act as unique ID for them
  },
  parentComponent: {
    computedStyle: null, //window.getComputedStyle() for DemoScreen component
    userSelectedCategory: null, //dropdown selection from the upper menu (parent settings)
    userSelectedValue: null, //dropdown selection from the lower menu (parent settings)
    triggerComponentToReset: 0,
  },
  childComponent: {
    computedStyle: null, //window.getComputedStyle() for the clicked ActionBox
    userSelectedCategory: null, //dropdown selection from the upper menu (item settings)
    userSelectedValue: null, //dropdown selection from the lower menu (item settings)
    clickedActionboxLetter: null, //letter to display under the dropdown
    triggerComponentToReset: 0,
  },
};
export const store = createStore(reducer, initialStore);
