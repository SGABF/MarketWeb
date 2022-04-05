import React, { useState, useEffect, useRef } from "react";
import FileUploadService from "./FileUploadService";
import UploadService from "./FileUploadService";

const UploadFiles = () => {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [message, setMessage] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [gooddata, setGoodData] = useState([]);
  const selectFiles = (event) => {
    setSelectedFiles(event.target.files);
  };

  const uploadFiles = () => {
    if (selectedFiles != null) {
      const uploadPromises = upload(selectedFiles);
    } else {
      const uploadPromises = FileUploadService.upload_nonFile(gooddata);
    }
    setMessage([]);
  };

  const upload = (file) => {
    return UploadService.upload(file, gooddata);
  };

  useEffect(() => {
    console.log(title);
    console.log(content);
    console.log(gooddata);
    console.log(selectedFiles);
    dataSetting(title, content);
  }, [title, content, selectedFiles]);

  const changeTitle = (e) => {
    let { value } = e.target;
    setTitle(value);
  };

  const changeContent = (e) => {
    let { value } = e.target;
    setContent(value);
  };

  const dataSetting = (title, content) => {
    setGoodData({
      board_name: title,
      board_content: content,
    });
  };

  return (
    <div>
      <br />
      <span>title : </span>
      <input type="text" onChange={changeTitle} value={title} />
      <hr />
      <span>content : </span>
      <input type="textarea" onChange={changeContent} value={content} />
      <hr />
      <div className="row my-3">
        <div className="col-8">
          <label className="btn btn-default p-0">
            <input type="file" multiple onChange={selectFiles} />
          </label>
        </div>
        <div className="col-4">
          <button
            className="btn btn-success btn-sm"
            // disabled={!selectedFiles}
            onClick={uploadFiles}
          >
            Upload
          </button>
        </div>
      </div>
      {message.length > 0 && (
        <div className="alert alert-secondary" role="alert">
          <ul>
            {message.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadFiles;
