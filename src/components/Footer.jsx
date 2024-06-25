import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Footer = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" >
            <div className="container" style={{ flexWrap: 'wrap' }}>
                <Navbar.Brand href="/home" ><img src="../images/logo.png" style={{ width: '70px' }} /></Navbar.Brand>
                <div className="phone-number">Телефон: +7 (123) 456-78-90</div>
                <div className="navigation">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <Nav.Link href="/home">Главная</Nav.Link>
                            <Nav.Link href="/cart">Каталог</Nav.Link>
                        </Nav>
                        <Nav className="me-auto" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <Nav.Link href="/overlay">Корзина</Nav.Link>
                            <Nav.Link href="/liked">Избранное</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <div className="foot-info">
                    <p>HORIZONT VINYL</p>
                    <p>Все права защищены</p>
                    <p>Разработка сайта: merrcurys</p>
                </div>
            </div>
        </Navbar>
    )
}

export default Footer