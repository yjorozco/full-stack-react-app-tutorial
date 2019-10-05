import React, { Component } from 'react'
import {
  Container,
  Navbar,
  NavbarBrand,
  Row,
  Col,
  Jumbotron,
  Input,
  InputGroup,
  Button,
  InputGroupAddon,
  FormGroup
} from 'reactstrap';

import Weather from './Weather';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      cityList: [],
      newCityName: ''
    };
  }
  getCityList = async () => {
    try {
      const response = await fetch('/api/city');
      const res = await response.json();
      const cityList = res.data.map(r => r.city_name);
      this.setState({
        cityList
      })
    } catch (e) {
      console.log(e);
    }
  }
  handleInputChange = (e) => {
    this.setState({
      newCityName: e.target.value
    })

  }
  handleAddCity = async (e) => {
    try {

      await fetch('/api/city', {
        method: 'POST',
        body: JSON.stringify({ city: this.state.newCityName }),
        headers: { 'Content-Type': 'application/json' }
      });
      this.setState({ newCityName: '' })
      this.getCityList()
      // window.location.href = "/";
    } catch (e) {
      console.log(e);
    }
  }
  getWeather = async (city) => {
    try {
      const res = await fetch(`/api/city/${city}`);
      const weather = await res.json();
      this.setState({ weather });
    } catch (e) {
      console.log(e);
    }
  }
  handleChangeCity = (e) => {
    this.getWeather(e.target.value);
  }
  componentDidMount() {
    this.getCityList();

  }
  render() {
    return (
      <Container fluid className="centered">
        <Navbar dark color="dark">
          <NavbarBrand href="/">MyWeather</NavbarBrand>
        </Navbar>
        <Row>
          <Col>
            <Jumbotron>
              <Row>
                <Col>
                  <h1 className="display-3">MyWeather</h1>
                  <p className="lead">This current weather for your favorite cities</p>
                </Col>
              </Row>
              <Row >
                <Col className="col-md-3">
                <div class="form-group">
                    <Input 
                      placeholder="new city name.."
                      value={this.state.newCityName}
                      onChange={this.handleInputChange}
                    />
                 </div>
                
                    
         
                </Col>
                <Col className="col-md-3" >
                   <Button color="primary" onClick={this.handleAddCity}>Add City</Button>
                </Col>
              </Row>
            </Jumbotron>

          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-5">Current Weather</h1>
            <FormGroup>
              <Input type="select" onChange={this.handleChangeCity}>
                {
                  this.state.cityList.length === 0 && <option>No cities added yet.</option>
                }
                {
                  this.state.cityList.length > 0 && <option>Select a city.</option>
                }
                {
                  this.state.cityList.map((city, i) => <option key={i}>{city}</option>)
                }

              </Input>
            </FormGroup>
          </Col>
        </Row>
        {

          this.state.weather && <Weather data={this.state.weather} />
        }
      </Container>
    )
  }
}

