import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

export default function Card(props) {

  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);

  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")

  const handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;
        break;
      }
    }

    if (food != []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
        return
      }
      return
    }


    await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
    //console.log(data);
  }


  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value)


  }, [])

  const cardRef = useRef(null);
  const handleHover = () => {
    cardRef.current.style.transform = 'scale(1.1)'; // Zoom in on hover (10% increase)
    cardRef.current.style.transition = 'transform 0.3s ease-in-out'; // Add smooth transition
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = 'scale(1)'; // Reset zoom on mouse leave
    cardRef.current.style.transition = 'transform 0.3s ease-in-out'; // Maintain smooth transition
  };
  return (
    <div>
      <div class="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}
        ref={cardRef} // Assign ref to the card element

        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}>
        <img
          src={props.foodItem.img} class="card-img-top" alt="..." style={{ height: "150px", objectFit: "fill" }} />
        <div class="card-body">
          <h5 class="card-title">{props.foodItem.name}</h5>

          <div className="container w-100">
            <select className="m-2 h-100 btn-outline-primary rounded" onChange={(e) => setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select className="m-2 h-100 btn-outline-primary rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
              {priceOptions.map((data) => {
                return <option key={data} value={data}>{data}</option>
              })}
            </select>

            <div className="d-line h-100 fs-5">
              ₹{finalPrice}/-
            </div>
          </div>

          <hr></hr>
          <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
