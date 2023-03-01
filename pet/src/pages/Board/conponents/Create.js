import { useState } from 'react';
import { Button ,Form , Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { requestBoardCreate } from '../../../model/axios';


const Create=()=>{
    const [show, setShow] = useState(false);
    const [Title, setTitle] = useState("")
    const navigate= useNavigate()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const createHandler=()=>{
        let body={
            title : Title,
        }
        requestBoardCreate(body).then(response=>{
            if(response.success){
                console.log("response",response)
                setShow(false)
                window.location.reload('/board')
            }else{
                console.log("dsadasd",response.errorMessage)
                alert(response.error.message)
            }
        })
    }
    console.log(Title)
    const onTitleHandler=(e)=>{
        setTitle(e.currentTarget.value)
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          게시판 추가
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>게시판 생성</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>동물 게시판 이름</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="고양이, 강아지 등을 입력하세요"
                  autoFocus
                  value={Title}
                  onChange={onTitleHandler}
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