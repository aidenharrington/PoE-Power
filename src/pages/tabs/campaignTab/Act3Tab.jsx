import React from "react";
import { Box, Typography } from "@mui/material";
import content from "../../../content/campaignTab/Act3Content.json"

const Act3Tab = () => {
    return (
        <Box>
            <Typography>
                {content.title}
            </Typography>
        </Box>
    );   
}

export default Act3Tab;