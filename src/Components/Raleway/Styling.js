// Components==============
import styled from "styled-components";
import { flexUnit } from "../../style/Mixins";
// =========================

// add to mixins

export const S = styled.p`
  ${flexUnit(2.5, 15, 16, "vw", "font-size")}
  line-height: 1.3;
`;

export const M = styled.p`
  ${flexUnit(2.5, 16, 17, "vw", "font-size")}
  font-weight: 500;
  line-height: 1.3;
`;

export const L = styled.p`
  ${flexUnit(2.5, 18, 19, "vw", "font-size")}
  font-weight: 500;
  line-height: 1.4;
`;

// add to global components

// h1 {
//   ${flexUnit(4, 32, 55, "vw", "font-size")}
// }

// h2 {
//   ${flexUnit(3, 24, 34, "vw", "font-size")}
// }

// h3 {
//   ${flexUnit(2, 20, 25, "vw", "font-size")}
// }

// h4 {
//   ${flexUnit(2, 20, 25, "vw", "font-size")}
// }

// h5 {
//   ${flexUnit(2, 20, 25, "vw", "font-size")}
// }

// h6 {
//   ${flexUnit(2, 20, 25, "vw", "font-size")}
// }

// p,
// a,
// strong,
// span {
//   ${flexUnit(2.5, 16, 17, "vw", "font-size")}
// }
