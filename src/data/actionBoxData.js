/*
list of unique IDs to render the ActionBoxes;
every character in the string serves as unique id for the ActionBoxes 
the maximum number of actionBoxes is limited to the legth of this string- not that we need all of them...ever!
*/
export const IDList =
  "ABCDEFGHIJKLMNOPQRSTUVXYWZ0123456789!@#$%&*()-+=<>/?|abcdefghijklmnopqrstuvxywz";
/*
number of initial ActionBoxes;
amount can be modified with +/- buttons
*/
export const quantity = 5;

//pressing the reset button will trigger to re-set all the actionbox flexbox settings to the initial state, which is this:
export const defaultFlexboxSettings =
  "alignSelf: 'auto'; flexBasis: 'auto'; order: 0; flexGrow: 0;flexShrink: 1;";
