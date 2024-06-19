import React, {useState, useEffect} from "react";
import {useAction} from "@gadgetinc/react";
import {useNavigate, Link} from "react-router-dom";
import {useUser} from "@gadgetinc/react";
import {api} from "../api";
import Chip from "@material-ui/core/Chip";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayIcon from "@material-ui/icons/NightsStay";
const UserOperations = () => {
	const navigate = useNavigate();
	const user = useUser(api);
	const [keys, setKeys] = useState([
		{
			handle: "",
			shopId: "",
		},
	]);
	const [name, setName] = useState("");
	const [{data, loading, error}, updateUser] = useAction(api.user.update);
	const [feedbackMessage, setFeedbackMessage] = useState("");
	const [isEditing, setIsEditing] = useState(false);
	const [profilePic, setProfilePic] = useState(user?.profilePic || "");
	const [newKey, setNewKey] = useState(null);
	const validKeys = keys.filter(
		(key) => key.handle.trim() && key.shopId.trim(),
	);
	const handleNavigate = (path) => {
		navigate(path);
	};
	const shops = [
		{
			value: "57144868925",
			label: "YNM",
		},
		{
			value: "62983274690",
			label: "YNE",
		},
	];
	useEffect(() => {
		setName(user?.firstName || "");
		const initialKeys = Array.isArray(user?.keys)
			? user.keys
			: [
					{
						handle: "",
						shopId: "",
					},
				];
		setKeys(initialKeys);
	}, [user]);
	const toggleEditMode = () => {
		setIsEditing(!isEditing);
	};
	const handleInputChange = (index, field, value) => {
		const updatedKeys = keys.map((key, i) => {
			if (i === index) {
				return {
					...key,
					[field]: value,
				};
			}
			return key;
		});
		setKeys(updatedKeys);
	};
	const handleAddKey = () => {
		if (!newKey) {
			// Ensure that only one new key can be added at a time
			setNewKey({
				handle: "",
				shopId: shops[0].value,
			});
		}
	};
	const confirmAddKey = () => {
		if (newKey) {
			setKeys([...keys, newKey]);
			setNewKey(null); // Reset the new key input
		}
	};
	const handleDeleteKey = (index) => () => {
		setKeys(keys.filter((_, i) => i !== index));
	};
	const handleNameChange = (event) => {
		setName(event.target.value);
	};
	const handleProfilePicChange = (event) => {
		const file = event.target.files[0];
		const url = URL.createObjectURL(file);
		setProfilePic(url);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsEditing(false);
		try {
			const result = await updateUser({
				id: user.id,
				firstName: name,
				keys: JSON.stringify(keys),
			});
			if (!error && result) {
				setFeedbackMessage("User keys updated successfully!");
			} else {
				setFeedbackMessage("Failed to update user keys.");
			}
		} catch (err) {
			console.error("Error updating user keys:", err);
			setFeedbackMessage("Error updating user keys.");
		}
	};
	return (
		<div className="app-content d-flex justify-content-center align-items-center">
			<div className="custom-form rounded-container p-4">
				<h1 className="form-title mb-4 text-center">User Settings </h1>{" "}
				<form onSubmit={handleSubmit} className="mb-3">
					{" "}
					{isEditing ? (
						<>
							<input
								className="custom-input form-control mb-2"
								type="text"
								value={name}
								onChange={handleNameChange}
								placeholder="Name"
							/>{" "}
							{/* File input for profile picture is commented out, uncomment if needed */}{" "}
							{/* <input className="custom-input form-control mb-2" type="file" onChange={handleProfilePicChange} /> */}{" "}
							{keys.map((key, index) => (
								<Chip
									key={index}
									label={`${key.tag} - ${shops.find((shop) => shop.value === key.shopId)?.label || "Unknown"}`}
									onDelete={
										isEditing ? () => handleDeleteKey(index) : undefined
									}
									color="primary"
									icon={index % 2 === 0 ? <WbSunnyIcon /> : <NightsStayIcon />}
									className="chip mr-2 mb-2"
								/>
							))}{" "}
							{isEditing && newKey && (
								<div className="custom-form-2 mb-3">
									<input
										type="text"
										placeholder="Tag"
										value={newKey.tag}
										onChange={(e) =>
											setNewKey({
												...newKey,
												tag: e.target.value,
											})
										}
										className="form-control m-1"
									/>
									<select
										className="form-control m-1"
										value={newKey.shopId}
										onChange={(e) =>
											setNewKey({
												...newKey,
												shopId: e.target.value,
											})
										}>
										{" "}
										{shops.map((shop, shopIndex) => (
											<option key={shopIndex} value={shop.value}>
												{" "}
												{shop.label}{" "}
											</option>
										))}{" "}
									</select>{" "}
									<button
										type="button"
										className="btn btn-success m-1 2 "
										onClick={confirmAddKey}>
										& #10003; {/* Unicode checkmark */}
									</button>
								</div>
							)}
							<button
								type="button"
								className="mr-2 mb-2"
								onClick={handleAddKey}>
								{" "}
								Add New Key{" "}
							</button>{" "}
						</>
					) : (
						<>
							<h4> Hi {name}! </h4> <h4>These are your keys: </h4>{" "}
							{keys.map((key, index) => (
								<Chip
									key={index}
									label={`${key.tag} - ${shops.find((shop) => shop.value === key.shopId)?.label || "Unknown"}`}
									color="primary"
									icon={index % 2 === 0 ? <WbSunnyIcon /> : <NightsStayIcon />}
									className="chip mr-2 mb-2"
								/>
							))}{" "}
						</>
					)}{" "}
					<div className="d-flex justify-content-center align-items-center mt-3">
						<button
							type="button"
							className="btn btn-dark border m-1"
							onClick={toggleEditMode}>
							{" "}
							{isEditing ? "Cancel" : "Edit"}{" "}
						</button>{" "}
						{isEditing && (
							<button type="submit" className="btn btn-dark border m-1">
								Save Changes{" "}
							</button>
						)}{" "}
						{!isEditing && (
							<button
								onClick={() => handleNavigate("/signed-in")}
								className="btn btn-dark border m-1">
								Back{" "}
							</button>
						)}{" "}
					</div>{" "}
				</form>{" "}
				{feedbackMessage && (
					<div
						className={`alert ${error ? "alert-danger" : "alert-success"}`}
						role="alert">
						{" "}
						{feedbackMessage}{" "}
					</div>
				)}{" "}
			</div>{" "}
		</div>
	);
};
export default UserOperations;
