import React from "react";
import { Box, Typography } from "@mui/material";
import content from "../../../content/campaignTab/Act2Content.json"

const Act2Tab = () => {
    return (
        <Box>
            <Typography>
                {content.title}
            </Typography>
        </Box>
    );   
}

export default Act2Tab;