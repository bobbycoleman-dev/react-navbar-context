import { useContext } from "react";
import NavContext from "../context/NavContext";

const Navbar = () => {
	const navContext = useContext(NavContext);
	return (
		<nav class="navbar bg-success">
			<div class="container text-end">
				<span class="navbar-brand mb-0 h1">Navbar Context</span>
				<div className="h4">{navContext.name == "Enter Name" ? "" : `Hi ${navContext.name}!`}</div>
			</div>
		</nav>
	);
};

export default Navbar;
