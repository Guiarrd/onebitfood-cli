import React, { Component, Fragment } from 'react';
import { Box, Column, Title } from "rbx";
import WaitingImage from '../../assets/images/health-icons-orgainic-icon.png';
import "../../styles/show_order.scss";


class ShowOrder extends Component {
  render() {
    return (
      <Column.Group className="status_box">
        <Column size={4} offset={4} textAlign="centered">
          <Column.Group>
            <Column size={8} offset={2} textAlign="centered">
              <Box>         
                <Title size={4} className="has-text-custom-green-darker status_msg">Pedido a caminho</Title>
                <p className="status_description">Em breve você recebera sua comida saudável em casa</p>
                <img src={WaitingImage} className="status_img" alt="new"/>
              </Box>
            </Column>
          </Column.Group>
        </Column>
      </Column.Group>
    )
  } 
}

export default ShowOrder;