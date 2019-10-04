import React from 'react'
import {Row, Col, Table} from 'reactstrap';

export default function Weather(props) {

    const {data} = props;
    if (!data)
        return (<div></div>);
    
    const img = 0;
    console.log(data["main"]['temp'])
    return (
        <Row className="weathe">
            <Col sm="12" md={{size:4, offset:4}}>
()                <h2>{data.name}</h2>
               <img src={`http://openweathermap.org/img/wn/${img}.png`} alt="weather icon"/>
                <span>{data.weather[0].main}</span>&nbsp;
                <span>{Math.floor(data.main.temp)}&deg;F</span>
                <Table>
                    <tbody>
                        <tr>
                            <td>wind</td>
                            <td>{Math.floor(data.wind.speed)}</td>
                        </tr>
                        <tr>
                            <td>Pressure</td>
                            <td>{Math.floor(data.wind.pressure)} hPa</td>
                        </tr>
                        <tr>
                            <td>Humidity</td>
                            <td>{Math.floor(data.wind.humidity)} %</td>
                        </tr>
                        <tr>
                            <td>Min Temp</td>
                            <td>{Math.floor(data.wind.temp_min)} &deg;F</td>
                        </tr>
                        <tr>
                            <td>Max Temp</td>
                            <td>{Math.floor(data.wind.temp_max)} &deg;F</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}
