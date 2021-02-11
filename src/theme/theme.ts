const common = {
  fontSizeBase: "14px",
  borderRadiusBase: "2px",
};

const darkTheme = {
  ...common,
  primaryColor: "#1890ff", // primary color for all components
  linkColor: "#1890ff", // link color
  successColor: "#52c41a", // success state color
  warningColor: "#faad14", // warning state color
  dangerColor: "#ff4d4f", // danger state color
  headingColor: "rgba(0, 0, 0, 0.85)", // heading text color
  textColor: "rgba(0, 0, 0, 0.65)", // major text color
  textColorSecondary: "rgba(0, 0, 0, 0.45)", // secondary text color
  disabledColor: "rgba(0, 0, 0, 0.25)", // disable state color
  borderColorBase: "#d9d9d9", // major border color
  boxShadowBase:
    "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),0 9px 28px 8px rgba(0, 0, 0, 0.05)", // major shadow for layers
};

const lightTheme = {
  ...common,
  primaryColor: "#1890ff", // primary color for all components
  linkColor: "#1890ff", // link color
  successColor: "#52c41a", // success state color
  warningColor: "#faad14", // warning state color
  dangerColor: "#ff4d4f", // danger state color
  headingColor: "rgba(0, 0, 0, 0.85)", // heading text color
  textColor: "rgba(0, 0, 0, 0.65)", // major text color
  textColorSecondary: "rgba(0, 0, 0, 0.45)", // secondary text color
  disabledColor: "rgba(0, 0, 0, 0.25)", // disable state color
  borderColorBase: "#d9d9d9", // major border color
  boxShadowBase:
    "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),0 9px 28px 8px rgba(0, 0, 0, 0.05)", // major shadow for layers
};

export const theme = {
  dark: darkTheme,
  light: lightTheme,
};
