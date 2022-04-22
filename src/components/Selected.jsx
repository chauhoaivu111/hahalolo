import React from "react";
import { useState } from "react";

import Box from "@mui/material/Box";

import {
 
  MenuItem,
} from "@mui/material";

import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";

const Selected = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <Select
            onChange={handleChange}
            defaultValue="none"
            className="style_selected"
            // sx={{borderRadius:"20px"}}
          >
            <MenuItem value="none" className="menuItem_selected">
              Most Recent{" "}
            </MenuItem>
            <MenuItem value={20}>Curated by admin </MenuItem>
            <MenuItem value={30}>Most Appreciated</MenuItem>
            <MenuItem value={30}>Most Discussed</MenuItem>
            <MenuItem value={20}>Most Viewed</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default Selected;
