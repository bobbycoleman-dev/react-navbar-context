import { useContext } from "react";
import NavContext from "../context/NavContext";

const Form = () => {
	const navContext = useContext(NavContext);
	return (
		<div>
			<form>
				<div>
					<label htmlFor="" className="form-label">
						Your Name:
					</label>
					<input
						type="text"
						className="form-control"
						placeholder={navContext.name}
						onChange={(e) => navContext.setName(e.target.value)}
					/>
				</div>
			</form>
		</div>
	);
};

export default Form;
