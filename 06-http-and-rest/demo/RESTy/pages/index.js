import React from 'react';
import superagent from 'superagent';
import JSONPretty  from 'react-json-pretty';

export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      header: '',
      body: '',
    };

  }

  changeURL = (event) => {
    let url = event.target.value;
    this.setState({url});
  };

  callAPI = (event) => {
    event.preventDefault();
    superagent.get(this.state.url)
      .then( response => {
        let body = JSON.stringify(response.body);
        this.setState({body});
      })
  };


  render() {

    return (
      <section>
        <form onSubmit={this.callAPI}>
          <input placeholder="URL" onChange={this.changeURL}/>
        </form>
        <JSONPretty json={this.state.body}></JSONPretty>
      </section>
    );
  }

}
