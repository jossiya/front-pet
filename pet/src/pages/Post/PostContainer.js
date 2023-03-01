import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestBoard } from '../../model/axios';
import Create from './conponents/Create';
import PostTable from './conponents/PostTable';

const PostContainer=()=>{
        const id=useParams()
        console.log(id)
        const [Board, setBoard] = useState([])
        useEffect(() => {
            requestBoard(id)
            .then(response=>{
                if(response.success){
                    setBoard(response.data)
                }else{alert(response.error.message)}
            })
        }, [])
    return(
        <div>
            <h1 style={{textAlign:"center" ,marginTop:"5%"}}>{Board?.title} 게시판 입니다.</h1>
            <div style={{marginLeft: "87%"}}><Create/></div>
            <div className='' style={{marginLeft : "7rem", marginRight:"7rem"}}>
                <PostTable list={Board.postResponseDtoList}/>
            </div>
        </div>
    )
}
export default PostContainer;