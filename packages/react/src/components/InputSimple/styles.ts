import { styled } from "../../styles";

export const InputSimpleContainer = styled("div", {
  position: "relative",
  display: "inline-block",

  svg: {
    width: "$5",
    height: "$5",
    position: "absolute",
    top: "$1",
    right: "$1",
    fontSize: "lg",
    color: "$gray100",
  },
});

export const Input = styled("input", {
  border: "none",
  backgroundColor: "transparent",
  borderBottom: "2px solid black",
  paddingLeft: "$2",
  height: "$8",
  paddingRight: "$8",
  fontSize: "$md",
  color: "$gray100",

  "&:focus": {
    outline: "none",
    borderColor: "$green300",
  },
  
  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },

  variants: {
    size: {
      sm: {
        width: "$80",
      },

      md: {
        width: "$64",
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
});
