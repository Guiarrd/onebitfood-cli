import React, { Component, Fragment } from 'react';
import { Input, Column, Title, Button, Field, Control, Label, Select } from 'rbx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAddress } from '../../actions/address';
import { hideModal } from '../../actions/modal';

import stateList from './states_list';

class AddressForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //este state é do estado do endereço
      state: this.props.address.state,
      city: this.props.address.city,
      street: this.props.address.street,
      number: this.props.address.number,
      cep: this.props.address.cep,
      complement: this.props.address.complement,
      reference: this.props.address.reference
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setAddress(this.state);
    this.props.hideModal('ADDRESS_MODAL');
  }

  render() {
    return (
      <Fragment>
        <Column.Group>
          <Column size={10} offset={1}>
            <Title size={5} className="has-text-custom-gray-darker status_msg">
              Endereço de Entrega
            </Title>
          </Column>
        </Column.Group>
        <Column.Group>
          <Column size={10} offset={1}>
            <form onSubmit={this.handleSubmit}>
              <Field>
                <Label>Estado</Label>
                <Control>
                  <Select.Container fullwidth>
                    <Select required name="state" value={this.state.state} onChange={this.handleInputChange}>
                      {stateList.map((state, i) => {
                        return <Select.Option key={i} value={state}>{state}</Select.Option>
                      })}
                    </Select>
                  </Select.Container>
                </Control>
              </Field>

              <Field>
                <Label>Cidade</Label>
                <Control>
                  <Input 
                    type="text"
                    placeholder="São Paulo..."
                    name="city"
                    value={this.state.city}
                    onChange={this.handleInputChange}
                    required
                  />
                </Control>
              </Field>

              <Field>
                <Label>Endereço</Label>
                <Control>
                  <Input 
                    type="text"
                    placeholder="Av Paulista..."
                    name="street"
                    value={this.state.street}
                    onChange={this.handleInputChange}
                    required
                  />
                </Control>
              </Field>

              <Field horizontal>
                <Field.Body>
                  <Field>
                    <Label>Número</Label>
                    <Control>
                      <Input 
                        type="text"
                        placeholder="714"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleInputChange}
                        required
                      />
                    </Control>
                  </Field>

                  <Field>
                    <Label>CEP</Label>
                    <Control>
                      <Input 
                        type="text"
                        placeholder="12345-000"
                        name="cep"
                        value={this.state.cep}
                        onChange={this.handleInputChange}
                        required
                      />
                    </Control>
                  </Field>
                </Field.Body>
              </Field>

              <Field>
                <Label>Complemento</Label>
                <Control>
                  <Input
                    type="text"
                    placeholder="Apto 123..."
                    name="complement"
                    value={this.state.complement}
                    onChange={this.handleInputChange}
                  />
                </Control>
              </Field>

              <Field>
                <Label>Referência</Label>
                <Control>
                  <Input
                    type="text"
                    placeholder="Av Paulista..."
                    name="reference"
                    value={this.state.reference}
                    onChange={this.handleInputChange}
                  />
                </Control>
              </Field>
              <br />
              <Field kind="group" align="centered">
                <Control>
                  <Button size="medium" color="custom-orange">
                    <span className="has-text-white">Salvar endereço</span>
                  </Button>
                </Control>
              </Field>
            </form>
          </Column>
        </Column.Group>
      </Fragment>
    )
  }
}

const mapStateToProps = store => ({
  address: store.addressState.address
});

const mapDispatchToProps = dispatch => bindActionCreators({ setAddress, hideModal }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddressForm);