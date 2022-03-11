import React, {useState} from "react";
import {Carousel, className, DropdownButton, Dropdown} from "react-bootstrap";
import "./Registration.css";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ModalUnstyled from '@mui/base/ModalUnstyled';

import Moment from 'react-moment';
import Button from '@mui/material/Button';
import Footer from 'components/Footer';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Input = styled('input')({
    display: 'none',
});


function ChildModal() {

    const style = {
        position : 'absolute',
        top      : '50%',
        left     : '50%',
        transform: 'translate(-50%, -50%)',
        width    : 400,
        bgcolor  : 'background.paper',
        border   : '2px solid #000',
        boxShadow: 24,
        pt       : 2,
        px       : 4,
        pb       : 3,
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button onClick={handleOpen}>입찰하기</Button>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{...style, width: 200}}>
                    <h2 id="child-modal-title">입찰 성공 했습니다!</h2>
                    <p id="child-modal-description">
                        감사합니다.
                    </p>
                    <Button onClick={handleClose}>닫기</Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
}


function Registration(props) {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = (event) => {
        setShowPopup(event.target.value)
    };

    const style = {
        position : 'absolute',
        top      : '50%',
        left     : '50%',
        transform: 'translate(-50%, -50%)',
        width    : 400,
        bgcolor  : 'background.paper',
        border   : '2px solid #000',
        boxShadow: 24,
        pt       : 2,
        px       : 4,
        pb       : 3,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="Subpage">
                <div className="Subpage-container">

                    <label htmlFor="icon-button-file">
                        <Input accept="image/*" id="icon-button-file" type="file" />
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label>


                    <div className="title">
                        <Checkbox {...label} defaultChecked />직거래 물품
                        <Checkbox {...label} /> 택배 물품
                        <br/><br/>
                        <h1>
                           상품 이름 :  <input type="text"/>
                        </h1>

                        <p>상품 상한가 : <input type="text"/>
                            <br/>상품 현재가 : <input type="text"/>
                            <br/>상품 최소가격 : <input type="text"/>
                            <br/>입찰 잔여시간 : <input type="text"/>

                                   <br /> 상품 설명 : <input type="text" className="size"/>
                        </p>




                        <Button variant="contained" endIcon={<SendIcon />}>
                            Send
                        </Button>


                        <br/>

                    </div>

                </div>


            </div>
            <br/> <br/> <br /> <br /> <br />

            <Footer />

        </>


    );
}

export default Registration;
