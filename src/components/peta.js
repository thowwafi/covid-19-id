import React from "react";
import styled from "styled-components";
class Peta extends React.Component {
  render() {
    return (
      <div>
        <FullScreenWrapper
          // width="600"
          // height="450"
          src="https://datastudio.google.com/embed/reporting/0da1c48e-0971-4e9d-9d44-e37963d6c278/page/cytKB"
          frameborder="0"
          allowfullscreen
        ></FullScreenWrapper>
      </div>
    );
  }
}
export default Peta;

const FullScreenWrapper = styled.iframe`
  width: 100%;
  height: 100vh;
`;
