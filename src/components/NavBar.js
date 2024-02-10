import React, { useContext } from "react";
import { Context } from "..";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import {Button} from 'react-bootstrap';
import {observer} from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom';
import {ADMIN_ROUTE, BUDGET_ROUTE, DAILY_ROUTE, HOME_ROUTE, LOGIN_ROUTE, USER_ROUTE} from "../utils/consts";


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={HOME_ROUTE}> Бюджет</NavLink>


                {user.isAuth ?
                    <Nav className="le-auto">
                        <Button variant={'outline-light'} onClick={() => navigate(BUDGET_ROUTE)}>Бюджет</Button>
                        <Button variant={'outline-light'} onClick={() => navigate(DAILY_ROUTE)}>Дневной остаток</Button>
                        <Button variant={'outline-light'} onClick={() => navigate(USER_ROUTE)}>Пользователь</Button>
                        <Button variant={'outline-light'} onClick={() => logOut()}>Log out</Button>
                        <Button variant={'outline-light'} onClick={() => navigate(ADMIN_ROUTE)}>Admin panell</Button>

                    </Nav>
                    :
                    <Nav className="le-auto">
                        <Button  className="ml-2" variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Autorization</Button>

                    </Nav>
                }

            </Container>
        </Navbar>
    )
})

export default NavBar;