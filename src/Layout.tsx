import SideBar from "./components/SideBar/SideBar"

type layoutPropType = {
    children: React.ReactNode
}

function Layout({ children }: layoutPropType) {
    return (
        <>
            <SideBar>
                {children}
            </SideBar>
        </>
    )
}

export default Layout