import React from "react";
import { Box, Typography } from "@mui/material";
import content from "../../../content/craftingTab/CraftingContent.json"

const CraftingTab = () => {
    return (
        <Box>
            <Typography>
                {content.title}
            </Typography>
        </Box>
    );   
}

export default CraftingTab;