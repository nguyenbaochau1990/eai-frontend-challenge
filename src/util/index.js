export const transformToTree = (files) => {
  const tree = {}

  if(files.length > 0) {
    files.forEach((file) => {
      //Delete / and transform to array
      const path = file.path.split('/');

      //Delete the first element, because it's "" after split
      if(path[0] === "") {
        path.shift()
      }

      //If the file is on /
      if (!path[1]) {
        return (tree[path[0]] = file);
      }

      var currentNode = tree;
      path.forEach((element, i) => {
        //File!
        if(i === path.length - 1) {
          currentNode[element] = file
        }
        if(currentNode[element] === undefined) {
          currentNode[element] = {}
        }
        currentNode = currentNode[element]
      })
    });
  }

  return tree;
}
