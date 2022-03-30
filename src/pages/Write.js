import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";

export default function Write() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  let history = useHistory();

  const Input = styled("input")({
    display: "none",
  });

  return (
    <>
      <h1>글쓰기</h1>

      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>본문을 남겨주세요.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],

          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <br />
      <TextField
        id="date"
        label="오늘날짜"
        type="date"
        defaultValue="2022-03-18"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>

      <br />
      <br />
      <Button variant="outlined" onClick={log}>
        확인
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          history.goBack();
        }}
      >
        뒤로가기
      </Button>
    </>
  );
}
