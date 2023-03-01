import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import PostForm from './PostForm';
import moment from 'moment'
// import { useNavigate } from 'react-router-dom';
// import { requestBoardAll } from '../../../model/axios';

const PostTable=(props)=>{
    const {list,reload} =props
        console.log("그위에 여기", reload)
    
    const [PostList, setPostList] = useState([])
    console.log("포스트"+PostList)
    useEffect(() => {    
                setPostList(props?.list)

    }, [list!=null])



    const Boards =()=>PostList?.map((list,index)=>{
        let time = moment(list.modifiedAt).format("YY년 MM월 DD일 hh:mm:ss")
        let variable={
            id : list.id,
            title : list.title,
            content : list.content,
            comment : list.comments,
        }
            return(
                <tbody key={index}>
                    <tr>
                        <td>{list.id}</td>
                        <td>{list.title}</td>
                        <td ><PostForm reload ={reload}variable={variable}/></td>
                        
                        <td>{list.member.nickname}</td>
                        <td>{time}</td>
                    </tr>
                </tbody>
                )
        })
    
        return (
            <>
            {PostList?.length === 0 ?(<div><h2>등록된 게시물이 없네요!</h2></div>):
            (<Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>번호</th>
                          <th>제목</th>
                          <th>내용</th>
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
export default PostTable;