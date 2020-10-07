export const ADD_FEATURE = "ADD_FEATURE";
export const DELETE_FEATURE = "DELETE_FEATURE";

export const addFeature = (newFeatureItem) => {
	return { type: ADD_FEATURE, payload: newFeatureItem };
};
export const deleteFeature = (deleteFeatureItem) => {
	return { type: DELETE_FEATURE, payload: deleteFeatureItem };
};
