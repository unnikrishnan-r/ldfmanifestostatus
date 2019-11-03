import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";

import Select from "react-select";
// import Form from "react-bootstrap/Form";
// import ToggleButton from "react-bootstrap/ToggleButton";
// import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

import { Input, TextArea, FormBtn, RemainingChar } from "../components/Form";

const STATUS_LIST = [
  { value: "COMPLETED", label: "Completed" },
  { value: "IN PROGRESS", label: "In Progress" },
  { value: "DROPPED", label: "Dropped" },
  { value: "TO BE STARTED", label: "To Be Started" }
];

console.log(STATUS_LIST)
class Manifesto extends Component {
  state = {
    manifestoItems: [],
    manifestoHeader: {
      itemNumber: 0,
      title: "",
      description: "",
      department: "",
      status: "",
      thirtyFivePointProgram: false
    },
    remainingCharCountTitle: 100
  };
  componentDidMount() {
    this.loadMainfestoItems();
  }

  loadMainfestoItems = () => {
    API.getManifestoItems()
      .then(res => {
        this.setState({
          manifestoItems: res.data,
          manifestoHeader: {
            itemNumber: 0,
            title: "",
            description: "",
            department: "",
            status: "",
            thirtyFivePointProgram: false
          },
          remainingCharCountTitle: 100
        });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      manifestoHeader: {
        ...this.state.manifestoHeader,
        [name]: value
      },
      remainingCharCountTitle: 100 - this.state.manifestoHeader.title.length
    });
    console.log(this.state.manifestoHeader.title);
    console.log(this.state.remainingCharCountTitle, "left");
  };

  handleInputChangeTest = (state, value) => {
    // const { name, value } = event.target;

    this.setState((state, value) => {
      console.log(state)
      // console.log(Object.keys(props))
      console.log(value)

      // const { name, value } = event.target;
    });
  };

  handleStatusChange = selectedOption => {
    console.log(
      "Dropdown selection",
      selectedOption.value,
      selectedOption.label
    );
    // this.setState({ selectedOption });
    this.setState({
      manifestoHeader: {
        ...this.state.manifestoHeader,
        status: selectedOption.value
      }
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.manifestoHeader.itemNumber &&
      this.state.manifestoHeader.title &&
      this.state.manifestoHeader.description &&
      this.state.manifestoHeader.department &&
      this.state.manifestoHeader.status
    ) {
      console.log(this.state.manifestoHeader);
      API.saveManifestoHeader(this.state.manifestoHeader)
        .then(res => {
          console.log("1243");
          this.loadMainfestoItems();
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <br></br>
        <br></br>
        <Row>
          <Col size="md-6">
            <form>
              <Input
                value={this.state.manifestoHeader.itemNumber}
                onChange={this.handleInputChange}
                name="itemNumber"
              />
              <Input
                value={this.state.manifestoHeader.title}
                // onChange={this.handleInputChangeTest(state, value)}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Enter the title of the manifesto item"
              />
              <RemainingChar
                remainingCharCount={this.state.remainingCharCountTitle}
              ></RemainingChar>
              <TextArea
                value={this.state.manifestoHeader.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Enter the details of the manifesto item"
              />
              <Input
                value={this.state.manifestoHeader.department}
                onChange={this.handleInputChange}
                name="department"
                placeholder="Enter the department under which the item belongs to"
              />
              <Select
                className="mt-4 col-offset-4"
                onChange={this.handleStatusChange}
                options={STATUS_LIST}
                label={this.state.manifestoHeader.status}
                placeholder="Status"
              />
              <FormBtn
                disabled={
                  !(
                    this.state.manifestoHeader.itemNumber &&
                    this.state.manifestoHeader.title &&
                    this.state.manifestoHeader.description &&
                    this.state.manifestoHeader.department &&
                    this.state.manifestoHeader.status
                  )
                }
                onClick={this.handleFormSubmit}
              >
                Add Manifesto Item
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Manifesto Items</h1>
            </Jumbotron>
            <List>
              {this.state.manifestoItems.map(manifestoItem => (
                <ListItem key={manifestoItem.itemNumber}>
                  <strong>{manifestoItem.title}</strong>
                </ListItem>
              ))}
            </List>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Manifesto;
