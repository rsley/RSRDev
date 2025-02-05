export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: "16px",
        md: "18px",
        lg: "20px",
        xl: "22px",
        big: ["90px", { lineHeight: "1.1" }],
      },
    },
  },
};
