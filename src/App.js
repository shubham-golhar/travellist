import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);
  const handleAddItem = (newItem) => {
    setItems((items) => [...items, newItem]); // we did this because there current changes depend upon the previous .Here "items" is the current value which is empty first time
  };

  const handleDeleteItem = (id) => {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
    // const data = [...items];
    // const unpackedItems = data.splice(id, 1);
    // console.log("unpackedItems", unpackedItems);
    // setItems(unpackedItems);
  };
  const handleclearList = () => {
    const confirm = window.confirm("Are you sure you want to delete all items");
    if (confirm) setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />

      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        ontoggleItems={handleToggleItem}
        onClearList={handleclearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
