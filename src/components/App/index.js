import React, {Component} from "react";
import "./index.css";
import FileTree from "../FileTree";
import FileContent from "../FileContent";
import fileFixtures from "../../fixtures/files.json";
import { transformToTree } from "../../util";


class App extends Component {
  state = {
    tree: {},
  }

  componentDidMount(){
    const tree = transformToTree(fileFixtures)
    this.setState({tree})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">ElementAI Frontend Challenge</header>
        <div className="App-content">
          <FileTree tree={this.state.tree}/>
          <FileContent/>
        </div>
      </div>
    );
  }
};

export default App;
