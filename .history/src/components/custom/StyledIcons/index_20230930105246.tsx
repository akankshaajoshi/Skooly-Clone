import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

interface SocialIconProps {
  [propName: string]: any;
}

export const StyledFacebookIcon = styled(FacebookIcon)<SocialIconProps>`
  && {
    opacity: 0.5;
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`;

export const StyledTwitterIcon = styled(TwitterIcon)<SocialIconProps>`
  && {
    opacity: 0.5;
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`;

export const StyledYouTubeIcon = styled(YouTubeIcon)<SocialIconProps>`
  && {
    opacity: 0.5;
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`;
