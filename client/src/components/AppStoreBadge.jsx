import React from 'react';
import { Box, Image } from '@chakra-ui/react';

// URL for the App Store badge image
const APP_STORE_BADGE_URL = 'https://link-to-your-app-store-badge-image.com/app-store-badge.png';

const AppStoreBadge = () => {
  return (
    <Box>
      <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
        <Image
          src={APP_STORE_BADGE_URL}
          alt="Download on the App Store"
          boxSize="150px" // Adjust size as needed
          objectFit="contain"
        />
      </a>
    </Box>
  );
};

export default AppStoreBadge;