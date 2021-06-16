import React from "react";
import { Dropdown, Menu, Image, } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image spaced="right" src="" avatar />
        <Dropdown pointing="top-left" text="Kutsal">
          <Dropdown.Menu>
            <Dropdown.Item text="Cv" icon="file alternate outline" />
            <Dropdown.Item onClick={signOut} text="Sign Out" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
