import React from 'react'
import { Table } from 'react-bootstrap'

var BearsList = React.createClass({
  render () {
    var bears = this.props.bears.map(function (item) {
      return (<tr><td>item.name</td><td>item.species</td><td>item.age</td><td>item.weight</td><td>item.location</td><td>item.attitude</td></tr>);
    })
    return (
      <Table hover>
        <thead>
        </thead>
        <tbody>
          {bears}
        </tbody>
      </Table>
    )
  }
})

export default BearsList;
