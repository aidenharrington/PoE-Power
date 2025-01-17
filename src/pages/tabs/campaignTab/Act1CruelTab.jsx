import React from "react";
import { Box, Typography } from "@mui/material";
import content from "../../../content/campaignTab/Act1CruelContent.json"

const Act1CruelTab = () => {
    return (
        <Box>
            <Typography>
                {content.title}
            </Typography>
        </Box>
    );   
}

export default Act1CruelTab;