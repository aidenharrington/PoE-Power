import React from "react";
import { Box, Typography } from "@mui/material";
import content from "../../../content/endgameTab/EndgameContent.json"

const EndgameTab = () => {
    return (
        <Box>
            <Typography>
                {content.title}
            </Typography>
        </Box>
    );   
}

export default EndgameTab;