import Wrapper from "./views/Wrapper";
import Navbar from "./components/Navbar";
import NavContext from "./context/NavContext";
import { useState } from "react";
import FormWrapper from "./views/FormWrapper";

function App() {
	const [name, setName] = useState("Enter Name");

	return (
		<div>
			<NavContext.Provider value={{ name, setName }}>
				<Wrapper>
					<Navbar />
					<FormWrapper />
				</Wrapper>
			</NavContext.Provider>
		</div>
	);
}

export default App;
