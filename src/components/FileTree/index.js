import React from "react";
import "./index.css";
import File from "../File";
import Folder from "../Folder";

const FileTree = (props) => {

  const Tree = Object.entries(props.tree).map(([key, value],i) => {

    return(
      <div key={`${key}-${i}`}>
        {
          key.includes('.') ?
          <File name={key} file={value} /> :
          <div>
            <Folder name={key}/>
            <FileTree tree={value} />
          </div>
        }
      </div>
    )
  })
  

  return (
    <div className="FileTree">
      <div>
        {Tree}
      </div>
    </div>
  );
};

export default FileTree;
