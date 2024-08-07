import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useStytchMember } from '@stytch/react/b2b';
import { useStytchB2BClient } from '@stytch/react/b2b';
import { StytchLoginDialog } from '../components/StytchLoginDialog';

const MAGIC_LINKS_TOKEN = 'magic_links';

export default function Authenticate() {
  const stytch = useStytchB2BClient();
  const { member } = useStytchMember();

  const navigate = useNavigate();

  //Step (5): Handle the Redirect
  /* ... */

  return (
    <>
      <StytchLoginDialog open={true} onClose={()=>{}}/>
    </>
  )
}
