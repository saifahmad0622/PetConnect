import React from 'react';
import { Box, Image } from '@chakra-ui/react';

// URL for the Play Store badge image
const PLAY_STORE_BADGE_URL = 'https://link-to-your-play-store-badge-image.com/play-store-badge.png';

const PlayStoreBadge = () => {
  return (
    <Box>
      <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
        <Image
          src={PLAY_STORE_BADGE_URL}
          alt="Get it on Google Play"
          boxSize="150px" // Adjust size as needed
          objectFit="contain"
        />
      </a>
    </Box>
  );
};

export default PlayStoreBadge;