import { AppBar, Box, IconButton, useMediaQuery, useTheme } from "@mui/material"
import { useMenuStore } from "../../../shared/hooks/useMenuStore/useMenuStore"
import { Icon } from "../../atoms/Icon"


export const Header = () => {
    const theme = useTheme()
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))

    const toggleMenu = useMenuStore(state => state.toggleMenuOpen)
    return (
        <Box component={AppBar} height={theme.spacing(6.5)} width='100vw' sx={{ zIndex: theme.zIndex.drawer + 1 }}>
            <Box paddingX={2} display='flex' flex={1} height='100%'>
                <Box display='flex' alignItems='center' height='100%' width={mdDown ? theme.spacing(9) : theme.spacing(28)}>
                    {mdDown &&
                        <IconButton
                            size='medium'
                            edge='end'
                            color='inherit'
                            onClick={toggleMenu}
                        >
                            <Icon name="menu" />
                        </IconButton>
                    }
                </Box>

            </Box>
        </Box>
    )

}