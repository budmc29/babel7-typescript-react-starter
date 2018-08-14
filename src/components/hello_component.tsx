import React from 'react'

export interface HelloProps {
  name?: string
}

export default class HelloComponent extends React.Component<HelloProps> {
  render () {
    return <div>Hello, {this.props.name || 'World'}!</div>
  }
}
