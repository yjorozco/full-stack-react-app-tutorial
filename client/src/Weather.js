import React from 'react'
import {Row, Col, Table} from 'reactstrap';

export default function Weather(props) {

    const {data} = props;
  
    if (!data)
        return (<div></div>);
   
    const img = data.data.weather[0].icon;

    return (
        <Row className="weathe">
            <Col sm="12" md={{size:4, offset:4}}>
                <h2>{data.data.name}</h2>
               <img src={`http://openweathermap.org/img/wn/${img}.png`} alt="weather icon"/>
                <br />
                <span>{data.data.weather[0].main}</span>&nbsp;
                <br />
                <span>{Math.floor(parseFloat(data.data.main.temp))}&deg;F</span>
                <Table>
                    <tbody>
                        <tr>
                            <td>wind</td>
                            <td>{Math.floor(data.data.wind.speed)}</td>
                        </tr>
                        <tr>
                            <td>Pressure</td>
                            <td>{Math.floor(data.data.main.pressure)} hPa</td>
                        </tr>
                        <tr>
                            <td>Humidity</td>
                            <td>{Math.floor(data.data.main.humidity)} %</td>
                        </tr>
                        <tr>
                            <td>Min Temp</td>
                            <td>{Math.floor(data.data.main.temp_min)} &deg;F</td>
                        </tr>
                        <tr>
                            <td>Max Temp</td>
                            <td>{Math.floor(data.data.main.temp_max)} &deg;F</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}
