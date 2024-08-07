import { Dialog } from "@mui/material";
import { StytchB2B } from '@stytch/react/b2b';
import { AuthFlowType, B2BProducts, StytchB2BUIConfig } from '@stytch/vanilla-js/b2b';


interface StytchLoginProps {
  open: boolean;
  onClose: (value: string) => void;
}

export const StytchLoginDialog = (props: StytchLoginProps) => {
  const { onClose, open } = props;
  // Step (4): Create the config for Pre-built UI Client 
 /* ... */

  return (
    <Dialog onClose={onClose} open={open}>
      {/*  Step 4.1 Add the <StytchB2B> UI Component */}
    </Dialog>
  );
}