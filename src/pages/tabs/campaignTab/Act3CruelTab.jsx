import React from "react";
import { Box, Typography } from "@mui/material";
import content from "../../../content/campaignTab/Act3CruelContent.json"

const Act3CruelTab = () => {
    return (
        <Box>
            <Typography>
                {content.title}
            </Typography>
        </Box>
    );   
}

export default Act3CruelTab;