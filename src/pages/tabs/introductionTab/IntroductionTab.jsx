import React from "react";
import { Box, Typography } from "@mui/material";
import content from "../../../content/introductionTab/introduction.json"

const IntroductionTab = () => {
    return (
        <Box>
            <Typography>
                {content.introductionParagraph1}
            </Typography>
        </Box>
    );   
}

export default IntroductionTab;