import { Paper, IconButton, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";
import { theme } from "../utils/theme";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }
  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme.palette.common.white,
        paddingLeft: 2,
        boxShadow: 'none',
        mr: { sm: 5 }
      }}
    >
      <InputBase
        className="search-bar"
        placeholder="Search..."
        sx={{ 
          padding: 0, 
          width: {xs: '30vw', sm: '350px'} 
        }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{
          padding: '10px', color: theme.palette.primary.main
        }}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar