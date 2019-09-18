import React from "react";
import axios from "axios"
// import Items from "./components/Items"
import { Card, Header, } from "semantic-ui-react"

class Departs extends React.Component {
  state = { departs: [], };

  componentDidMount() {
    // debugger
    axios.get("/api/departs")
    .then( res => {
      this.setState({ departs: res.data, });
    })
    .catch( err => {
      console.log("error thrown");
    })
  }

  renderDeparts = () => {
    const { departs, } = this.state;

    if (departs.length <= 0)
      return <h2>No Departments</h2>
    return departs.map( depart => (
      <Card key={depart.id}>
        <Card.Content>
          <Card.Header>{ depart.name }</Card.Header>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    // debugger
    return (
      <div>
        <Header as="h1">Departments</Header>
        <hr />
        <Card.Group>
          { this.renderDeparts() }
        </Card.Group> 
      </div>
    )
  }
}

export default Departs;