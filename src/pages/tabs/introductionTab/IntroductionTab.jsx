import React from "react";
import { Box, Typography } from "@mui/material";
import content from "../../../content/introductionTab/IntroductionContent.json"

const IntroductionTab = () => {
    return (
        <Box>
            <Typography>
                {content.title}
            </Typography>
        </Box>
    );   
}

export default IntroductionTab;