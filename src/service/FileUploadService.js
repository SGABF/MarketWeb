import axios from "axios";

const token = localStorage.getItem("token");
const username = localStorage.getItem("authenticatedUser");

const upload = (file, contentData) => {
	let formData = new FormData();

	console.log("여기는 Axios" + JSON.stringify(file));
	for (let i = 0; i < file.length; i++) {
		formData.append("file", file[i]);
	}
	formData.append(
		"BoardVO",
		new Blob([JSON.stringify(contentData)], { type: "application/json" })
	);
	return axios.post("http://192.168.0.151:8080/board/insertBoard", formData, {
		headers: {
			Authorization: "Bearer " + token,
			user_id: username,
			"content-type": "multipart/form-data",
		},
	});
	console.log("하하하");
};

const uploadQna = (file, contentData) => {
	let formData = new FormData();

	console.log("여기는 Axios" + JSON.stringify(file));
	for (let i = 0; i < file.length; i++) {
		formData.append("file", file[i]);
	}
	formData.append(
		"BackQnaVO",
		new Blob([JSON.stringify(contentData)], { type: "application/json" })
	);
	return axios.post("http://192.168.0.150:8080/MainView/qnaInsert", formData, {
		headers: {
			user_Id: username,
			"content-type": "multipart/form-data",
		},
	});
	console.log("하하하");
};

const upload_nonFile = (contentData) => {
	let formData = new FormData();
	formData.append(
		"BoardVO",
		new Blob([JSON.stringify(contentData)], { type: "application/json" })
	);

	return axios.post("http://192.168.0.151:8080/board/insertBoard", formData, {
		headers: {
			Authorization: "Bearer " + token,
			user_id: username,
			"content-type": "multipart/form-data",
		},
	});
};

const uploadQna_nonFile = (contentData) => {
	let formData = new FormData();
	formData.append(
		"BackQnaVO",
		new Blob([JSON.stringify(contentData)], { type: "application/json" })
	);

	return axios.post("http://192.168.0.150:8080/MainView/qnaInsert", formData, {
		headers: {
			user_Id: username,
			"content-type": "multipart/form-data",
		},
	});
};

const FileUploadService = {
	upload,
	uploadQna,
	upload_nonFile,
	uploadQna_nonFile,
};

export default FileUploadService;
