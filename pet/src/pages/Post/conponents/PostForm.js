import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {requestCommentCreate} from '../../../model/axios'

const PostForm=(props)=>{
    const {id, title,content, comment}=props?.variable
    const [show, setShow] = useState(false);
    const [Content, setContent] = useState("")
    const [Comment, setComment] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const commentHandler=(e)=>{
      let body={
        postId : id,
        content : Content
      }
      requestCommentCreate(body).then(response=>{
        if(response.success){
          window.location.reload(`/post/${id}`)
        }else{
          alert(response.error.message)
        }
      })
    }
    const commentTextHandler=(e)=>{
      setContent(e.currentTarget.value) 
    }
    useEffect(() => {
      setComment(comment)
    }, [])
    

    return (
      <>
        <a onClick={handleShow}>
          {content}
        </a>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Modal.Body>
                게시물 제목 : {title}
                </Modal.Body>
                <Modal.Body>
                내용 <p>{content}</p>
                </Modal.Body>
                <div>댓글작성</div>
                <Form.Control as="textarea" rows={2} value={Content} onChange={commentTextHandler} />
                
                <Modal.Body>
                <Button variant="secondary" onClick={commentHandler} style={{float:"right"}}>
                  댓글등록
                </Button> <br/><br/>
                {Comment?.length === 0 ? (
                  <h5>댓글이 없습니다.</h5>
                ):
                (
                <>
                  <div style={{marginBottom:"8px"}}>
                    <div style={{float:"left"}}><b>내용</b></div>
                    <div style={{float:"right"}}><b>작성자</b></div>
                  </div>
                  <br/>
                  {Comment?.map((value,index)=>(
                        <div key={index}>
                          <div style={{float:"left"}}>{value.content}</div>
                          <div style={{float:"right"}}>{value.member.nickname}</div>
                          <br/>
                        </div>
                  ))}
                </>
                )}

                </Modal.Body>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>

            <Button variant="dark" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
export default PostForm;