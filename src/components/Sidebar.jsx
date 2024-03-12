import React from "react";

export default function Sidebar() {
  return (
    <div>
      <ul className='sticky top-0 left-0 w-56 h-screen menu bg-primary text-secondary '>
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Parent</a>
          <ul>
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
            <li>
              <a>Parent</a>
              <ul>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  );
}
