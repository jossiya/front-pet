import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { requestLogout } from '../../model/axios';
import { removeToken , getToken } from '../../model/Token';

const Navication=(props)=>{

  const navigation=useNavigate()

  const [Token, setTokens] = useState(null)
  console.log("토큰 여부" + Token)
          useEffect(() => {
            setTokens(getToken("Authorization"))
          }, [])
          
          const  logoutHandler= async()=>{
            removeToken ("Authorization")
            removeToken ("Refresh_Token")
           await requestLogout().then(response=>{
              console.log("로그아웃 데이터",response)
              if(response.success){
                alert("로그아웃이 완료되었습니다.")
                window.location.replace("/")
                // navigation('/')
              }else{
                alert(response.data.error.message)
              }
            })
          }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Pet Community</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/board">Board</Nav.Link>
              </Nav>
              <Nav>
                {!Token&&<Nav.Link href="/signup">signup</Nav.Link>}
                {!Token&&<Nav.Link href="/login">login</Nav.Link>}
                {Token&&<Nav.Link href="#" onClick={logoutHandler}>
                  logout
                </Nav.Link>}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}
export default Navication;