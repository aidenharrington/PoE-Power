import React from "react";
import { Box, Typography } from "@mui/material";
import content from "../../../content/campaignTab/Act1Content.json"

const Act1Tab = () => {
    return (
        <Box>
            <Typography>
                {content.title}
            </Typography>
        </Box>
    );   
}

export default Act1Tab;