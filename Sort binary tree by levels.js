function treeByLevels(node) {
    if (!node) {
        return [];
    }
    
    const queue = [node];
    const values = [];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const levelValues = [];
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            levelValues.push(currentNode.value);
        
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
        
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        values.push(...levelValues);
    }
    
    return values;
}
  //by aziz ammar