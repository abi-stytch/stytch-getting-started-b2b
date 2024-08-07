import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { useState } from 'react';
import StytchLogo from "../assets/logo-white-stytch.svg";
import { StytchLoginDialog } from './StytchLoginDialog';
import { useStytchB2BClient, useStytchMemberSession } from '@stytch/react/b2b';


export default function NavBar() {
  const [openLogin, setOpenLogin] = useState(false);

  const stytch = useStytchB2BClient();
  const { session } = useStytchMemberSession();

  const handleLoginSignup = async () => {
    if (!openLogin) {
      setOpenLogin(true);
    } else {
      setOpenLogin(false);
    }
  }

  return (
    <AppBar position='relative'>
      <Toolbar>
        <a
          href='/'
        >
          <img src={StytchLogo} alt='The letters STYTCH' className='stytchLogoImg' />
        </a>
        <Box
          sx={{ ml: 'auto' }}
        >
          {!session &&
            <Button
              variant='contained'
              onClick={handleLoginSignup}
            >
              Sign Up / Login
            </Button>
          }
          {session &&
            <Button
              variant='contained'
              href="/account"
              sx={{
                ml: '7px'
              }}
            >
              Account
            </Button>
          }
          <Button
            variant='contained'
            sx={{
              ml: '7px'
            }}
            onClick={() => stytch.session.revoke()}
          >
            Log out
          </Button>
        </Box>
      </Toolbar>
      <StytchLoginDialog open={openLogin} onClose={() => setOpenLogin(false)} />
    </AppBar>
  )
}