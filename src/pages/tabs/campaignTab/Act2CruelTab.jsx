import React from "react";
import { Box, Typography } from "@mui/material";
import content from "../../../content/campaignTab/Act2CruelContent.json"

const Act2CruelTab = () => {
    return (
        <Box>
            <Typography>
                {content.title}
            </Typography>
        </Box>
    );   
}

export default Act2CruelTab;