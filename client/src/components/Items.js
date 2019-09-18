import React from "react"
import axios from "axios"
import { Card, Header, } from "semantic-ui-react"

class Items extends React.Component {
  state = { items: [], }

  componentDidMount() {
    axios.get("/api/departments/items")
      .then( res => {
        this.setState({ items: res.data ,});
      })

  }

  renderItems = () => {
    const { items, } = this.state;

    if (items.length <= 0)
      return <h2>No Items</h2>
    return items.map( item => (
      <Card>
        <Card.Content>
          <Card.Header as="h3">{item.name}</Card.Header>
          <Card.description>
            {item.description}
          </Card.description>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <Header as="h1">Items</Header>
        <hr />
        <Card.Group>
          { this.renderItems }
        </Card.Group>
      </div>
    )
  }
}

export default Items;