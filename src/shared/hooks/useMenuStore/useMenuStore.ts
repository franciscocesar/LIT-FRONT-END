import create from 'zustand'

type SideMenuOptions = {
    label: string
    icon: string
    path: string
}

type SideMenuStoreFormat = {
    isMenuOpen: boolean
    toggleMenuOpen: () => void
    menuOptions: SideMenuOptions[]
    setMenuOptions: (newtMenuOptions: SideMenuOptions[]) => void
}

export const useMenuStore = create<SideMenuStoreFormat>(
    (set) => ({
        isMenuOpen: false,

        menuOptions: [],

        toggleMenuOpen: () => set(state => ({
            isMenuOpen: !state.isMenuOpen
        })),

        setMenuOptions: (newtMenuOptions: SideMenuOptions[]) => set(() => ({
            menuOptions: newtMenuOptions
        }))
    })
)