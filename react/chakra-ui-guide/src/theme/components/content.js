const Content = {
  baseStyle: {
    bgColor: "gray.200",
    mt: "40px",
    mx: "auto",
  },
  sizes: {
    sm: {
      fontSize: "12px",
      lineHeight: "18px",
      w: "30%",
      p: "10px",
    },
    lg: {
      fontSize: "20px",
      lineHeight: "36px",
      w: "80%",
      p: "20px",
    },
  },
  variants: {
    solid: {
      border: "1px",
      borderColor: "gray.800",
    },
    card: {
      boxShadow: "md",
    },
  },
  defaultProps: {
    size: "sm",
    variant: "solid",
  },
};

export default Content;
