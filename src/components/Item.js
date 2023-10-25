import React from "react";

const Item = ({ item, onDeleteItems, ontoggleItems }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => ontoggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}

        {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>X</button>
    </li>
  );
};

export default Item;
