import axios from "axios";

const upload = (file, contentData) => {
  let formData = new FormData();

  console.log("여기는 Axios" + JSON.stringify(file));
  for (let i = 0; i < file.length; i++) {
    formData.append("file", file[i]);
  }
  formData.append(
    "contents",
    new Blob([JSON.stringify(contentData)], { type: "application/json" })
  );
  return axios.post("http://192.168.0.76:8080/board/insertBoard", formData, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};

const upload_nonFile = (contentData) => {
  let formData = new FormData();
  formData.append(
    "contents",
    new Blob([JSON.stringify(contentData)], { type: "application/json" })
  );

  return axios.post("http://192.168.0.76:8080/board/insertBoard", formData, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};

const FileUploadService = {
  upload,
  upload_nonFile,
};

export default FileUploadService;
