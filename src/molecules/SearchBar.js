import React from "react";
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ align = 'center' }) => {
    return (
        <TextField
        variant="outlined"
        placeholder="Search here..."
        // align={align}
        //onChange={onChange}
        sx={{ width: '50%' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    );
}

export default SearchBar