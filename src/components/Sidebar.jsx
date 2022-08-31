import { Stack } from '@mui/material';
import { theme } from '../utils/theme';
import { categories } from '../utils/constants';

const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack direction='row'
      sx={{
        overflowY: 'auto',
        height: { xs: 'auto', md: '95%' },
        flexDirection: { md: 'column' }
      }}
    >
      {categories.map((category) => (
        <button
          className='category-btn'
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory
              && theme.palette.primary.main,
            color: theme.palette.common.white,
            justifyContent: 'flex-start',
            borderRadius: '20px'
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory
                ? theme.palette.common.white
                : theme.palette.primary.main,
              marginRight: '15px',
              lineHeight: 0
            }}
          >
            {category.icon}
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar