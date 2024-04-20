import styled from "styled-components";
import { BeatLoader } from "react-spinners"; // BeatLoader is just one of many loaders you can choose from
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

function Indicator() {
  const [color, setColor] = useState("");

  useEffect(() => {
    const colorValue = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-primary")
      .trim();
    setColor(colorValue);
  }, []);

  return (
    <Container>
      <BeatLoader color={color} size={18} />
    </Container>
  );
}

export default Indicator;
