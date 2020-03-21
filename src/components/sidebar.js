import React from "react";
import { slide as Menu } from "react-burger-menu";

const styles = {
    menuItem: {
        padding: '10px 0',
        margin: '5px 0'
    }
}

export default props => {
  return (
    <Menu {...props}>
      <a style={styles.menuItem} href="/">
        Talking Points
      </a>

      <a style={styles.menuItem} href="/burgers">
        Proposed Ordinances
      </a>

      <a style={styles.menuItem} href="/pizzas">
        Calendar
      </a>

      <a style={styles.menuItem} href="/desserts">
        FAQ
      </a>
    </Menu>
  );
};
