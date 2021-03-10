import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

const FlippingCard = ({ parentId, quantity }) => {
  let previousNbr = useRef(quantity); //tracking previous ActionBox quantity
  let frontFace = useRef(); //front side of the flipping card
  let backFace = useRef(); //back side of the flipping card

  useEffect(() => {
    //when ActionBox quantity changes, save the 'old' number value and add new classNames to frontSide and backSide f the flipping card
    if (parentId === "items") {//only if we are at the right panel (items)      
      previousNbr.current = quantity; //save the old value
      frontFace.current.classList.toggle("rotateFrontFace"); //toggle className responsible for rotating the front side
      backFace.current.classList.toggle("rotateBackFace"); //toggle className responsible for rotating the back side
    }
  }, [quantity]);

  //RENDERING THE COMPONENT:
  return (
    <React.Fragment>
      <div className="flippingCard frontFace" ref={frontFace}>
        {quantity % 2 === 1 ? previousNbr.current : quantity}
      </div>
      <div className="flippingCard backFace" ref={backFace}>
        {quantity % 2 === 0 ? previousNbr.current : quantity}
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    quantity: state.actionBox.quantity,
  };
};
export default connect(mapStateToProps)(FlippingCard);

