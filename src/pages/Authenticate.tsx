import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useStytchUser } from '@stytch/react';
import { useStytchB2BClient } from '@stytch/react/b2b';
import { Typography } from '@mui/material';

const MAGIC_LINKS_TOKEN = 'magic_links';

export default function Authenticate() {
  const stytch = useStytchB2BClient();
  const { user } = useStytchUser();

  const navigate = useNavigate();

  //Step (5): Handle the Redirect
  /* ... */

  return (
    <>
      <Typography>please wait while we authenticate your token.</Typography>
    </>
  )
}