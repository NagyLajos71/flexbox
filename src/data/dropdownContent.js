/*

dropdownList1 - category selection for parent component settings
dropdownList2 - category selection for child component settings
dropdownList3 - value selections for parent component settings
dropdownList4 - value selections for child component settings
 */
export const dropdownList1 = [
  {
    value: "flexDirection",
    label: "flex-direction",
  },
  {
    value: "flexWrap",
    label: "flex-wrap",
  },
  {
    value: "justifyContent",
    label: "justify-content",
  },
  {
    value: "alignItems",
    label: "align-items",
  },
  {
    value: "alignContent",
    label: "align-content",
  },
];
export const dropdownList2 = [
  {
    value: "alignSelf",
    label: "align-self",
  },
  {
    value: "flexBasis",
    label: "flex-basis",
  },
  {
    value: "order",
    label: "order",
  },
  {
    value: "flexGrow",
    label: "flex-grow",
  },
  {
    value: "flexShrink",
    label: "flex-shrink",
  },
];

export const dropdownList3 = {
  flexDirection: [
    {
      value: "row",
      label: "row",
    },
    {
      value: "row-reverse",
      label: "row-reverse",
    },
    {
      value: "column",
      label: "column",
    },
    {
      value: "column-reverse",
      label: "column-reverse",
    },
  ],

  flexWrap: [
    {
      value: "nowrap",
      label: "nowrap",
    },
    {
      value: "wrap",
      label: "wrap",
    },
    {
      value: "wrap-reverse",
      label: "wrap-reverse",
    },
  ],
  justifyContent: [
    {
      value: "normal",
      label: "normal",
    },
    {
      value: "flex-start",
      label: "flex-start",
    },
    {
      value: "flex-end",
      label: "flex-end",
    },
    {
      value: "center",
      label: "center",
    },
    {
      value: "space-between",
      label: "space-between",
    },
    {
      value: "space-around",
      label: "space-around",
    },
    {
      value: "space-evenly",
      label: "space-evenly",
    },
  ],
  alignItems: [
    {
      value: "normal",
      label: "normal",
    },
    {
      value: "stretch",
      label: "stretch",
    },
    {
      value: "center",
      label: "center",
    },
    {
      value: "flex-start",
      label: "flex-start",
    },
    {
      value: "flex-end",
      label: "flex-end",
    },
    {
      value: "baseline",
      label: "baseline",
    },
  ],
  alignContent: [
    {
      value: "normal",
      label: "normal",
    },
    {
      value: "stretch",
      label: "stretch",
    },
    {
      value: "center",
      label: "center",
    },
    {
      value: "flex-start",
      label: "flex-start",
    },
    {
      value: "flex-end",
      label: "flex-end",
    },
    {
      value: "space-between",
      label: "space-between",
    },
    {
      value: "space-around",
      label: "space-around",
    },
    {
      value: "space-evenly",
      label: "space-evenly",
    },
  ],
};

export const dropdownList4 = {
  alignSelf: [
    { value: "auto", label: "auto" },
    { value: "normal", label: "normal" },
    { value: "start", label: "start" },
    { value: "end", label: "end" },
    { value: "self-start", label: "self-start" },
    { value: "self-end", label: "self-end" },
    { value: "flex-start", label: "flex-start" },
    { value: "flex-end", label: "flex-end" },
    { value: "baseline", label: "baseline" },
    { value: "stretch", label: "stretch" },
  ],
  flexBasis: [
    { value: "auto", label: "auto" },
    { value: "50%", label: "50%" },
    { value: "25vw", label: "25vw" },
    { value: "350px", label: "350px" },
  ],
  order: [
    { value: 0, label: 0 },
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
  ],
  flexGrow: [
    { value: 0, label: 0 },
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
  ],
  flexShrink: [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
  ],
};
