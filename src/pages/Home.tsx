import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useStytchMemberSession } from "@stytch/react/b2b";


export default function Home() {
  const { session } = useStytchMemberSession();

  return (
    <Stack alignItems="center" spacing={4}>  
      {session ? (
        <>
          <Stack
            direction='row'
            gap={2}
            alignItems='center'
          >
            <Typography>
              Welcome!
            </Typography>
          </Stack>
        </>
      ): <h2>Login or Sign up</h2>} 
    </Stack>
  )
}