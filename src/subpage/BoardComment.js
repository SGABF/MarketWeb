import React, { useState, useEffect } from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import axios from "axios";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function BoardComment() {
	const token = localStorage.getItem("token");
	const username = localStorage.getItem("authenticatedUser");
	const [comment, setComment] = useState([]);
	const [realcomment, setRealcomment] = useState([]);
	const location = useLocation();
	const id_data = location.state;

	useEffect(() => {
		console.log(id_data);
		getComment(id_data);
		getRealcomment(id_data);
	}, []);

	const getComment = async (idx) => {
		console.log(idx);
		await axios
			.post(
				"http://192.168.0.76:8080/home/selectByIdxBoard",

				{
					headers: { Authorization: "Bearer " + token },
				},

				{
					params: { board_idx: idx },
				}
			)
			.then((res) => {
				console.log("가져온값 : " + res.data.length);
				console.log("가져온값 : " + JSON.stringify(res.data));
				setComment(res.data);
			})
			.catch((error) => {
				console.log(`getComment 에러 :  ${error.message}`);
			});
	};

	const getRealcomment = async (idx) => {
		const token = localStorage.getItem("token");
		await axios
			.post(
				"http://192.168.0.76:8080/reply/insertReply",

				{
					headers: { Authorization: "Bearer " + token },
				},

				{
					params: { board_idx: idx },
				}
			)
			.then((res) => {
				console.log("가져온값 : " + res.data.length);
				console.log("가져온값 : " + JSON.stringify(res.data));
				setRealcomment(res.data);
			})
			.catch((error) => {
				console.log(`getComment 에러 :  ${error.message}`);
			});
	};
	return (
		<>
			<TextField
				id="input-with-icon-textfield"
				label="comment"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<AccountCircle />
						</InputAdornment>
					),
				}}
				variant="standard"
			/>
			<Button>댓글 남기기</Button>
			<br />
			<br />
			{comment.replyList &&
				comment.replyList.map((item) => (
					<p>
						comment : {item.reply_content}
						<Button>수정</Button>
						<Button>삭제</Button>
					</p>
				))}
		</>

		/* <Comment>
    <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
    <Comment.Content>
    <Comment.Author as="a">Matt</Comment.Author>
    <Comment.Metadata>
    <div>Today at 5:42PM</div>
    </Comment.Metadata>
    <Comment.Text>How artistic!</Comment.Text>
    <Comment.Actions>
    <Comment.Action>Reply</Comment.Action>
    </Comment.Actions>
    </Comment.Content>
		</Comment>
    
		<Comment>
    <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
    <Comment.Content>
    <Comment.Author as="a">Elliot Fu</Comment.Author>
    <Comment.Metadata>
    <div>Yesterday at 12:30AM</div>
    </Comment.Metadata>
				<Comment.Text>
        <p>This has been very useful for my research. Thanks as well!</p>
				</Comment.Text>
				<Comment.Actions>
        <Comment.Action>Reply</Comment.Action>
				</Comment.Actions>
        </Comment.Content>
        <Comment.Group>
				<Comment>
        <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
        <Comment.Content>
        <Comment.Author as="a">Jenny Hess</Comment.Author>
        <Comment.Metadata>
        <div>Just now</div>
        </Comment.Metadata>
        <Comment.Text>Elliot you are always so right :)</Comment.Text>
        <Comment.Actions>
        <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
        </Comment.Content>
				</Comment>
        </Comment.Group>
		</Comment>
    
		<Comment>
    <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
    <Comment.Content>
    <Comment.Author as="a">Joe Henderson</Comment.Author>
    <Comment.Metadata>
    <div>5 days ago</div>
    </Comment.Metadata>
    <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
    <Comment.Actions>
    <Comment.Action>Reply</Comment.Action>
    </Comment.Actions>
    </Comment.Content>
		</Comment>
    
		<Form reply>
    <Form.TextArea />
    <Button content="Add Reply" labelPosition="left" icon="edit" primary />
		</Form>
	</Comment.Group>; */
	);
}

export default BoardComment;
