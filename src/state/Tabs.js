import React from "react";

class Tabs extends React.Component {
  static defaultProps = { 
    tabs: [],
  };
  state = {
    currentTabIndex: 0
  };
  handleButtonClick = () => {
    debugger;
    console.log('button clicked!')
  }
  renderButtons() {
    return this.props.tabs.map((tab, index) => (
      <button key={index} onClick={this.handleButtonClick}>
        {tab.name}
      </button>
    ))
  }
  renderContent() {
    const currentTab = this.props.tabs[this.state.currentTabIndex]
    return (
      <div className='content'>
        {currentTab.content}
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.renderButtons()}
        {this.props.tabs.length && this.renderContent()}
      </div>
    )
  }
}

export default Tabs;