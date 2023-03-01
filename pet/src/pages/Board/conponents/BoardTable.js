import { useEffect, useState } from 'react';
import moment from 'moment'
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { requestBoardAll, requestBoardDelete } from '../../../model/axios';

const BoardTable=()=>{
    const [BoardList, setBoardList] = useState([])
    
    const navigate = useNavigate();

    useEffect(() => {
        requestBoardAll().then(response=>{
            if(response.success){
                console.log(response.data)
                setBoardList(response.data)
            }else{
                alert(response.error.message)
            }
        })
    }, [])

    const onDeleteHandler = (id) => {
        requestBoardDelete(id).then(response=>{
            if(response.success){
                window.location.reload('/board')
            }else{
                alert(response.eroor.message)
            }
        })
    }

    const Boards =()=>BoardList?.map((list,index)=>{
            let time = moment(list.modifiedAt).format("YY년 MM월 DD일 hh:mm:ss")
            return(
                <tbody key={index}>
                    <tr>
                        <td>{list.id}</td>
                        <td><a href={`/post/${list.id}`}>{list.title}</a></td>
                        <td>{list.member.nickname}</td>
                        <td>{time}</td>
                        <td>
                            <button onClick={(e) => {
                                e.stopPropagation();
                                const result = window.confirm("이 게시판을 지울까요?");
                                if (result) {
                                    return onDeleteHandler(list.id);
                                } else {
                                    return;
                                }}}>
                            삭제
                            </button>
                        </td>
                    </tr>
                </tbody>
                )
        })
    
        return (
            <>
            {BoardList.length === 0 ?(<div><h2>등록된 게시판이 없네요!</h2></div>):
            (<Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>번호</th>
                          <th>제목</th>
                          <th>작성자</th>
                          <th>날짜</th>
                        </tr>
                      </thead>
                        <Boards/>
                    </Table>
                )}
            </>
            )
}
export default BoardTable;