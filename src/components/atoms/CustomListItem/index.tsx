import { iconClasses, ListItem, listItemButtonClasses, listItemTextClasses, styled } from "@mui/material";


export const CustomListItem = styled(ListItem)(({ theme }) => ({
    [`& .${listItemButtonClasses.root}.Mui-selected`]: {
        backgroundColor: 'transparent',

        [`& .${listItemTextClasses.primary}`]: {
            color: theme.palette.primary.main,
            fontWeight: 500
        },

        [`& .${iconClasses.root}`]: {
            color: theme.palette.primary.main
        }
    },
    [`& .${listItemButtonClasses.root}`]: {
        color: '#7b7b7b',

        [`& .${iconClasses.root}`]: {
            color: '#7b7b7b'
        }
    }
}))