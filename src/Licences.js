import React, { Component } from 'react'
import './App.css'

// Licences Component to get all available licences in GitHub
class Licences extends Component {
  constructor(props) {
    super(props)

    this.state = {
      licences: [],
      isloading: "false",
    }
  }
  componentDidMount() {
    this.setState({ isloading: true })

    fetch('https://api.github.com/licenses')
      .then(response => response.json())
      .then(licences => {
        this.setState({ licences: licences, isloading: false })
      })
  }
  render() {
    const isloading = this.state.isloading
    let render

    if (isloading) {
    } else {
      render = (
        <div className="container contained table-responsive text-nowrap">
          <table className="table table-condensed table-striped">
            <thead className="thead-light">
              <tr>
                <td><span className="names">Name</span></td>
                <td><span className="names">URL</span></td>
              </tr>
            </thead>
            <tbody>
              {this.state.licences.map(l => (
                <tr key={l.url}>
                  <td>{l.name}</td>
                  <td><a href={l.url}>{l.url}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
    return (
      <div className="container text-center buffered">
        {render}
      </div>
    )
  }
}

export default Licences
