import { Box, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { Drawer } from "../../atoms/Drawer";
import { useMenuStore } from "../../../shared/hooks/useMenuStore/useMenuStore"
import { ListNav } from "../../atoms/ListNav";
import { CustomListItem } from "../../atoms/CustomListItem";
import { ListButton } from "../../molecules/ListButton";


interface ISideMenu {
    children: ReactNode
}

export const SideMenu = ({ children }: ISideMenu) => {
    const { spacing, breakpoints } = useTheme()
    const mdDown = useMediaQuery(breakpoints.down('md'))

    const isMenuOpen = useMenuStore(state => state.isMenuOpen)
    const menuOptions = useMenuStore(state => state.menuOptions)
    const toggleMenuOpen = useMenuStore(state => state.toggleMenuOpen)
    return (
        <>
            <Drawer variant={mdDown ? 'temporary' : 'permanent'} isOpen={isMenuOpen} onClose={toggleMenuOpen}>
                <Box height={spacing(6.5)} />
                <ListNav>
                    {
                        menuOptions.map(option => (
                            <CustomListItem key={option.label} disablePadding>
                                <ListButton label={option.label} icon={option.icon} to={option.path} onClick={mdDown ? toggleMenuOpen : undefined} />
                            </CustomListItem>
                        ))
                    }
                </ListNav>

            </Drawer>
            <Box height={spacing(6.5)} />
            <Box marginLeft={mdDown ? 0 : spacing(23)} >
                {children}
            </Box>
        </>

    )
}

