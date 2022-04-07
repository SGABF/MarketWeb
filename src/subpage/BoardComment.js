import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useForm } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { ButtonGroup } from "react-bootstrap";
import { SettingsInputAntenna } from "@material-ui/icons";
import { Input } from "@mui/material";

function BoardComment() {
	const token = localStorage.getItem("token");
	const username = localStorage.getItem("authenticatedUser");
	const [replyList, setReplyList] = useState([]);
	const [comment, setComment] = useState([]);
	const [updatedComment, setUpdatedComment] = useState("");
	const location = useLocation();
	const id_data = location.state;
	const { register, handleSubmit } = useForm();
	const [thisReplyIdx, setThisReplyIdx] = useState("");
	// const [thisDeleteIdx, setThisDeleteIdx] = useState("");

	useEffect(() => {
		getComment(id_data);
	}, []);

	// 댓글 리스트 읽어오기
	const getComment = async (idx) => {
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
				// console.log(res.data.replyList);
				// console.log(res.data.replyList[0].user_id);
				setReplyList(res.data.replyList);
			})
			.catch((error) => {
				console.log(`getComment 에러 :  ${error.message}`);
			});
	};

	// 새로운 댓글 담기
	const changeComment = (e) => {
		let { value } = e.target;
		setComment(value);
	};

	// 댓글 입력
	const insertReply = () => {
		axios({
			method: "post",
			url: "http://192.168.0.76:8080/reply/insertReply",
			headers: { Authorization: "Bearer " + token },
			data: {
				user_id: username,
				board_idx: id_data,
				reply_content: comment,
			},
		});
		reloadPage();
	};
	// 댓글 입력 후 리로드
	const reloadPage = () => {
		window.location.reload();
	};

	// 댓글 수정
	const updateComment = () => {
		axios({
			method: "post",
			url: "http://192.168.0.76:8080/reply/updateReply",
			headers: { Authorization: "Bearer " + token },
			data: {
				user_id: username,
				board_idx: id_data,
				reply_idx: thisReplyIdx,
				reply_content: updatedComment,
			},
		});
		reloadPage();
	};

	// 수정 버튼 클릭시 해당 댓글 idx 담기
	const handleClick = (reply_idx) => {
		setThisReplyIdx(reply_idx);
	};

	// 수정된 댓글 담기
	const updateThis = (e) => {
		let { value } = e.target;
		setUpdatedComment(value);
	};

	// // 삭제 버튼 클릭시 해당 댓글 idx 담기
	// const handleDelete = (reply_idx) => {
	// 	setThisDeleteIdx(reply_idx);
	// 	if (window.confirm("댓글을 삭제하시겠습니까?")) {
	// 		deleteComment();
	// 	} else {
	// 		reloadPage();
	// 	}
	// };

	// 댓글 삭제
	const deleteComment = (reply_idx) => {
		console.log(username);
		console.log(id_data);
		console.log(reply_idx);
		axios({
			method: "post",
			url: "http://192.168.0.76:8080/reply/deleteReply",
			headers: { Authorization: "Bearer " + token },
			data: {
				user_id: username,
				board_idx: id_data,
				reply_idx: reply_idx,
			},
		});
		reloadPage();
	};

	return (
		<>
			<Input onChange={changeComment} />
			<Button onClick={insertReply}>댓글남기기</Button>
			<br />
			<br />
			{replyList &&
				replyList.map((item) => (
					<ul>
						<li>
							<strong>{item.user_id}님 댓글</strong> &nbsp; {item.reply_regDate}
							<br />
							{thisReplyIdx === item.reply_idx ? (
								<ButtonGroup>
									<Input onChange={updateThis} />
									<Button onClick={updateComment}>수정</Button>
									<Button onClick={reloadPage}>취소</Button>
								</ButtonGroup>
							) : (
								item.reply_content
							)}
							<br />
							{username === item.user_id && thisReplyIdx !== item.reply_idx ? (
								<ButtonGroup>
									<Button onClick={() => handleClick(item.reply_idx)}>
										수정
									</Button>
									<Button onClick={() => deleteComment(item.reply_idx)}>
										삭제
									</Button>
								</ButtonGroup>
							) : (
								<br />
							)}
						</li>
					</ul>
				))}
		</>
	);
}

export default BoardComment;
