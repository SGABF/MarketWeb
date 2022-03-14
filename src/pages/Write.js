import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import TextField from '@mui/material/TextField';

export default function Write() {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <>
            <h1>고객센터 입니다.</h1>


            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue="<p>고객센터 입니다. 문의사항을 남겨주세요.</p>"
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}


            />
            <br />
            <TextField
                id="date"
                label="오늘날짜"
                type="date"
                defaultValue="2022-03-14"
                sx={{ width: 220 }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <br />
            <button onClick={log}>글쓰기</button>
        </>
    );
}
