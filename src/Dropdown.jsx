import React from "react";
import { DropdownProvider, useDropdown } from "./DropdownContext";

const DropdownButton = () => {
  const { toggleDropdown, selectedItem } = useDropdown();
  console.log(selectedItem);
  return (
    <button onClick={toggleDropdown}>
      {" "}
      {selectedItem ? `${selectedItem}` : "Dropdown Button"}
    </button>
  );
};

const DropdownMenu = ({ items }) => {
  const { isOpen, selectItem, toggleDropdown } = useDropdown();
  return (
    <>
      {isOpen ? (
        <ul>
          {items.map((item) => (
            <li
              key={item}
              onClick={() => {
                selectItem(item);
                toggleDropdown();
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

const Dropdown = ({ items }) => {
  return (
    <DropdownProvider>
      <div>
        <DropdownButton />
        <DropdownMenu items={items} />
      </div>
    </DropdownProvider>
  );
};

export default Dropdown;
