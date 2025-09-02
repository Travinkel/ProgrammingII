import { NavLink, Outlet, useNavigation } from "react-router";

export default function App() {
    const navigation = useNavigation(); // "idle" | "loading" | "submitting"

    return (
        <div style={{maxWidth: 920, margin: '0 auto', padding: 16}}>
            <nav style={{display: 'flex', gap: 12, padding: "8px 0"}}>
                <NavLink to="/" end style={({isActive})=>({textDecoration: isActive?'underline':'none'})}>Home</NavLink>
                <NavLink to="/books" style={({isActive})=>({textDecoration: isActive?'underline':'none'})}>Books</NavLink>
                <NavLink to="/authors" style={({isActive})=>({textDecoration: isActive?'underline':'none'})}>Authors</NavLink>
            </nav>
            {/* tiny loading bar */}
            {navigation.state === "loading" && (
                <div style={{height:3, background:"#888", marginBottom:8}} />
            )}
            <Outlet/>
        </div>
    );
}