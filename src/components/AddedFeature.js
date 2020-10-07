import React from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { deleteFeature } from "../components/actions/actions";

const AddedFeature = (props) => {
	const dispatch = useDispatch();
	return (
		<li>
			{/* Add an onClick to run a function to remove a feature */}
			<button
				onClick={() => dispatch(deleteFeature(props.feature))}
				className="button">
				X
			</button>
			{props.feature.name}
		</li>
	);
};

export default connect(null, { deleteFeature })(AddedFeature);
