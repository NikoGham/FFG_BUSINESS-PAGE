import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

function MerchItem ({box1, box1Text, box2, zoomBox, shadowBox, box3, teePrice, hoodPrice, box2Text, box3Text, box4Text, box5Text }) {
    return (
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol md="4">
            <MDBView hover zoom>
              <img
                src={box1}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-light">
                
               <p className="childrenText">{box1Text} <br></br> {teePrice} <br></br> Sizes <span className="sizeBox">S</span> <span className="sizeBox">M</span><span className="sizeBox">L</span></p>
               
                
              
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView hover zoom>
              <img
                src={box2}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-light">
              <p className="childrenText">{box2Text} <br></br> {teePrice} <br></br> Sizes <span className="sizeBox">S</span> <span className="sizeBox">M</span><span className="sizeBox">L</span></p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView hover zoom>
              <img
                src={box3}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-light">
              <p className="childrenText">{box3Text} <br></br> {teePrice} <br></br> Sizes <span className="sizeBox">S</span> <span className="sizeBox">M</span><span className="sizeBox">L</span></p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-4">
          <MDBCol md="6">
            <MDBView hover zoom>
              <img
                src={zoomBox}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center"  overlay="black-light">
              <p className="childrenText">{box4Text} <br></br> {hoodPrice} <br></br> Sizes <span className="sizeBox">S</span> <span className="sizeBox">M</span><span className="sizeBox">L</span></p>
                <p></p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="6">
            <MDBView hover zoom>
              <img
                src={shadowBox}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-light">
              <p className="childrenText">{box5Text} <br></br> {hoodPrice} <br></br> Sizes <span className="sizeBox">S</span> <span className="sizeBox">M</span><span className="sizeBox">L</span></p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }


export default MerchItem;