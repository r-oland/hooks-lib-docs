import styled from "styled-components";

export function flexUnit(amount, min, max, unit = "vw", prop = "font-size") {
  const minBreakpoint = (min / amount) * 100;
  const maxBreakpoint = max ? (max / amount) * 100 : false;
  const dimension = unit === "vw" ? "width" : "height";

  return `
     @media (max-${dimension}: ${minBreakpoint}px) {
       ${prop}: ${min}px;
     }
 
     ${
       max
         ? `
       @media (min-${dimension}: ${maxBreakpoint}px) {
         ${prop}: ${max}px;
       }
     `
         : ""
     }
 
     ${prop}: ${amount}${unit}
   `;
}

export const OverFlowFix = styled.div`
  overflow: hidden;
  position: relative;
`;

export const Container = styled.div`
  margin: 0 2.5%;

  @media screen and (min-width: 768px) {
    margin: 0 5%;
  }

  @media screen and (min-width: 1200px) {
    margin: 0 7.5%;
  }
`;
