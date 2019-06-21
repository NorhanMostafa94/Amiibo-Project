import React, { Component } from 'react';
import axios from 'axios';
import 'react-bootstrap';
import { Container, Row, Form } from 'react-bootstrap'
// const AmiiboCard = React.lazy(() => import('./card'))
import AmiiboCard from './card';


class AmiiboList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            inputValue: '',
            filteredData: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(e) {
        console.log(e.target.value)
        let { inputValue } = this.state;
        inputValue = e.target.value;
        // console.log(this.state.inputValue)
        if (inputValue !== '') {
            let filteredData = this.state.data.filter(el => el.name.toLowerCase().includes(inputValue.toLowerCase()))
            this.setState({ filteredData, inputValue: inputValue })
        }
        else {
            this.setState({ filteredData: this.state.data, inputValue: inputValue })
        }
        console.log(this.state.data)
    }
    componentDidMount() {
        axios.get('https://www.amiiboapi.com/api/amiibo')
            .then((res) => {
                const data = res.data.amiibo;
                this.setState({ data, filteredData: data });
            })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        return (
            <>
                <Container>
                    <Row className="justify-content-md-center">
                        <Form.Control type="text" name="title" placeholder="Enter name" onChange={this.handleInputChange} value={this.state.inputValue} />
                    </Row>
                </Container>
                <div className="grid-layout">
                    {
                        this.state.filteredData.map((el, i) => <AmiiboCard key={i} {...el} />)
                    }
                </div>
            </>
        )
    }
}

export default AmiiboList;