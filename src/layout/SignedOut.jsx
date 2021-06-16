import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut({signIn}) {
  return (
    <div>
      <Menu.Item>
        <Button primary >Register</Button>
        <Button primary style={{marginLeft:"0.5em"}} onClick={signIn}>Sign In</Button>
      </Menu.Item>
    </div>
  );
}
