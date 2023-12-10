import { wp } from "../utils";

const colors = {
  primary: "#308BFD",
  secoundry: "#ECF2FF",
  textlight: "#F8F8F8",
  textdark: "#8D8D8D",
  heading: "#000000",
  link: "#05A7DE",
};

const gradiants = {
  background:
    "linear-gradient(180deg, rgba(48, 139, 253, 0.329) -8.44%, rgba(48, 139, 253, 0.7) 103.39%)",
};

const fonts = {
  heading: wp(6),
  small: wp(2.8),
  medium: wp(3.5),
  large: wp(4),
};

const fontFamily = {
  main: "Poppins",
};

const border = {
  input: "1px solid #000000",
};

export { fonts, colors, gradiants, fontFamily, border };
