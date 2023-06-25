import { Button, styled } from '@mui/material';
import { IoLogoGithub, IoMail } from 'react-icons/io5';

import Colors from './colors';
import { FcGoogle } from 'react-icons/fc';
import React from 'react';
import { TinyColor } from '@ctrl/tinycolor';

const BasicButton = ({ children, sx, ...others }) => (
  <Button
    variant="outlined"
    sx={{
      ...sx,
      padding: '0.5em 1em',
    }}
    {...others}
  >
    {children}
  </Button>
);

const ColoredAuthButton = styled(BasicButton)(({ theme, foregroundcolor, backgroundcolor }) => {
  const baseBackgroundColor = new TinyColor(backgroundcolor);
  return {
    color: foregroundcolor || theme.palette.getContrastText(backgroundcolor),
    borderColor: 'transparent',
    backgroundColor: baseBackgroundColor.toHexString(),
    '&:hover': {
      borderColor: 'transparent',
      backgroundColor: baseBackgroundColor.darken().toHexString(),
    },
  };
});

const SignInWithGoogleButton = ({ ...props }) => (
  <BasicButton startIcon={<FcGoogle />} {...props}>
    Sign in with Google
  </BasicButton>
);

const SignInWithGitHubButton = ({ ...props }) => (
  <ColoredAuthButton startIcon={<IoLogoGithub />} backgroundcolor={Colors.Brands.GitHub} {...props}>
    Sign in with GitHub
  </ColoredAuthButton>
);


const SignInWithEmailButton = ({ ...props }) => (
  <ColoredAuthButton startIcon={<IoMail />} backgroundcolor={Colors.Email} {...props}>
    Sign in with Email
  </ColoredAuthButton>
);

export const OAuth = {
  BasicButton,
  GoogleButton: SignInWithGoogleButton,
  GitHubButton: SignInWithGitHubButton,
  EmailButton: SignInWithEmailButton,
};

export default {
  OAuth: OAuth,
};
