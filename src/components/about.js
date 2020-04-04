import React from "react";
import styled from "styled-components";
class About extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "4em" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card box-shadow">
                <div className="card-body">
                  <h3 className="bold">Tentang</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;

const FullScreenWrapper = styled.iframe`
  width: 100%;
  height: 100vh;
`;
