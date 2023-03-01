import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';
import {requestPostCreate} from '../../../model/axios';
function Create(){
  const boardId=useParams()
  console.log("보드 아이디", boardId)
  const [show, setShow] = useState(false);
  const [Title, setTitle] = useState("")
  const [Content, setContent] = useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const onTitleHandler=(e)=>{
        setTitle(e.currentTarget.value)
  }
  const onContentHandler=(e)=>{
      setContent(e.currentTarget.value)
  }
  const createHandler=()=>{
    let body={
      boardId : boardId.id,
      title : Title,
      content : Content,
    }
    console.log(body)
    requestPostCreate(body).then(response=>{
      if(response.success){
        window.location.reload(`/post/${boardId}`)
      }else{
        alert(response.error.message)
      }
    })
  }

  return (
    <>
        <Button variant="primary" onClick={handleShow}>
          게시글 추가
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>게시글 생성</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>제목</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="제목을 입력해주세요"
                  autoFocus
                  value={Title}
                  onChange={onTitleHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>내용</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="내용을 입력해주세요"
                  value={Content}
                  onChange={onContentHandler}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={createHandler}>
              저장
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              닫기
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Create;