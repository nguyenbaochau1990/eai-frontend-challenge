import React, {Component} from 'react'
import {connect} from 'react-redux'
import { selectFile } from '../../actions'

class File extends Component {
  render(){
    return(
      <li onClick={() => this.props.selectFile(this.props.file)}>
        {this.props.name}
      </li>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    selectFile : (file) => dispatch(selectFile(file))
  }
}

export default connect(null, mapDispatchToProps)(File)