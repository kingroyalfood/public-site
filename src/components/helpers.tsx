import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


type ContentSectionProps = {
  children: JSX.Element | JSX.Element[],
};

export const ContentSection: React.FC<ContentSectionProps> = ({
  children,
}) => {
  return (
    <Box component="section" mb={3}>
      {children}
    </Box>
  );
};


type ContentSectionHeadingProps = {
  text: string,
};

export const ContentSectionHeading: React.FC<ContentSectionHeadingProps> = ({
  text,
}) => {
  return (
    <Typography variant="h2" color="primary" gutterBottom>
      {text}
    </Typography>
  );
};
