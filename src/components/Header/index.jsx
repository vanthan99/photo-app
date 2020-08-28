import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Header.scss';
Header.propTypes = {

};

function Header(props) {
    return (
        <div className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a
                            className="header__link header__title"
                            href="https://youtube.com/easyfrontend"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Easy Frontend
                    </a>
                    </Col>
                    <Col xs="auto">
                        <NavLink
                            exact
                            className="header__link"
                            to="/photos"
                            activeClassName="header__link--active"
                        >
                            Redux Project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;