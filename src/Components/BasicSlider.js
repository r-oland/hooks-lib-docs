// Components==============
import React from "react";
import styled from "styled-components";
// =========================

const SlideWrapper = styled.div`
  /* reset */

  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    background: transparent;
    display: flex;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  input[type="range"]:focus {
    outline: none;
  }

  input[type="range"]::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  /* styling the thumb */

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 34px;
    width: 15px;
    border-radius: 30px;
    border: none;
    box-shadow: ${({ theme: { shadow } }) => shadow.small};
    background-color: ${({ theme: { white } }) => white};
    cursor: pointer;
    margin-top: -14px;
  }

  input[type="range"]::-moz-range-thumb {
    height: 34px;
    width: 15px;
    border-radius: 30px;
    border: none;
    box-shadow: ${({ theme: { shadow } }) => shadow.small};
    background-color: ${({ theme: { white } }) => white};
    cursor: pointer;
  }

  input[type="range"]::-ms-thumb {
    height: 34px;
    width: 15px;
    border-radius: 30px;
    border: none;
    box-shadow: ${({ theme: { shadow } }) => shadow.small};
    background-color: ${({ theme: { white } }) => white};
    cursor: pointer;
  }

  /* styling the track */

  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 9px;
    cursor: pointer;
    background: ${({ theme: { primary } }) => primary.s4};
    border-radius: 25px;
  }

  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: ${({ theme: { primary } }) => primary.s4};
  }

  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 9px;
    cursor: pointer;
    background: ${({ theme: { primary } }) => primary.s4};
    border-radius: 25px;
  }

  input[type="range"]::-ms-track {
    width: 100%;
    height: 9px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type="range"]::-ms-fill-lower {
    background: ${({ theme: { primary } }) => primary.s4};
    border-radius: 2.6px;
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: ${({ theme: { primary } }) => primary.s4};
  }
  input[type="range"]::-ms-fill-upper {
    background: ${({ theme: { primary } }) => primary.s4};
    border-radius: 2.6px;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: ${({ theme: { primary } }) => primary.s4};
  }
`;

export default function BasicSlider({ slideState, setSlideState }) {
  const handleChange = event => {
    setSlideState(event.target.value);
  };

  return (
    <SlideWrapper>
      <input
        id="slideBar"
        type="range"
        min="0"
        max="10"
        value={slideState}
        onChange={handleChange}
        step="1"
      />
      <p>{slideState}</p>
    </SlideWrapper>
  );
}

//   const [slideState, setSlideState] = useState(0);
// <BasicSlider slideState={slideState} setSlideState={setSlideState}/>
