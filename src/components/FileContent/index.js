import React, {Component} from "react"
import "./index.css"
import {connect} from 'react-redux'
import {selectedFileSelector} from '../../selectors'

class FileContent extends Component {
  render() {
    const file = this.props.selectedFile
    if(!file) {
      return "Select a file"
    }
    return (
      <div>
        <div className="FileContent">
          {file.content}
        </div>
        <div className="FileContent">
          Created At: {file.createdAt}
        </div>
        <div className="FileContent">
          Updated At: {file.updatedAt}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return{
    selectedFile: selectedFileSelector(state)
  }
}

export default connect(mapStateToProps)(FileContent);
