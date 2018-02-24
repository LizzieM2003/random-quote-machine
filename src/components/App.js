import React, { Component } from 'react';
import TwitterSVG from '../svgs/Twitter';
import QuotesSVG from '../svgs/Quotes';

import quotes from '../data/quotes';
import colors from '../data/colors';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0],
      color: colors[0]
    };

    this.handleNewQuote = this.handleNewQuote.bind(this);
  }

  handleNewQuote() {
    const newQuoteIndex = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[newQuoteIndex];
    const newColorIndex = Math.floor(Math.random() * colors.length);
    const newColor = colors[newColorIndex];

    this.setState({ quote: newQuote, color: newColor });
  }

  render() {
    const tweetText = encodeURIComponent(this.state.quote.quote);
    const appStyles = {
      backgroundColor: this.state.color.colorOption,
      color: this.state.color.colorOption
    };

    return (
      <div className="App" style={appStyles}>
        <div id="quote-box">
          <div id="quote">
            <QuotesSVG id="quote-svg" color={this.state.color.colorOption} />
            <p id="text">{this.state.quote.quote}</p>
          </div>
          <p id="author">{this.state.quote.author}</p>
          <div id="quote-buttons">
            <a
              id="tweet-quote"
              href={'https://twitter.com/intent/tweet?text=' + tweetText}
              target="_blank"
            >
              <TwitterSVG color={this.state.color.colorOption} />
            </a>
            <button
              id="new-quote"
              onClick={this.handleNewQuote}
              style={{
                backgroundColor: this.state.color.colorOption,
                border: `1px solid ${this.state.color.colorOption}`
              }}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
