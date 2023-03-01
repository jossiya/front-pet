import BoardTable from './conponents/BoardTable';
import Create from './conponents/Create';

const BoardContainer=()=>{


    return(
        <div>
            <h1 style={{textAlign:"center" ,marginTop:"5%"}}>
                애견인 게시판
            </h1>
            <div style={{marginLeft: "87%"}}><Create/></div>
            <div className='' style={{marginLeft : "7rem", marginRight:"7rem"}}>
                <BoardTable/>
            </div>
            
        </div>
    )
}
export default BoardContainer;