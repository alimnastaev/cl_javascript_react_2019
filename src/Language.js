import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import LanguageForm from "./LanguageForm";

// Language Component with external LanguageForm in render method

class Language extends Component {
  state = {
    count: null
  }
  getLanguage = (e) => {
    e.preventDefault();
    const language = e.target.elements.language.value;
    if (language) {
      axios.get(`https://api.github.com/search/repositories?q=${language}`) 
      .then((res) => {
        const count = res.data.total_count;
        this.setState({ count });
      })
    } else return;
  }
  render() {
    return (
      <div className="subform">
        <LanguageForm getLanguage={this.getLanguage} />
        { this.state.count ? <p>Total number of repos: { this.state.count }</p> : <p>Please type language</p> }
      </div>
    );
  }
};

export default Language;
