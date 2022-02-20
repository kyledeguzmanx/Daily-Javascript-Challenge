class Node{
    constructor(data, left=null, right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    add(data){
        const node = this.root;
        if (!node){
            this.root = new Node(data);
            return;
        }
        else{
            const searchTree = (node) => {
                if(data < node.data){
                    if(!node.left){
                        node.left = new Node(data);
                        return;
                    }
                    else if(node.left){
                        return searchTree(node.left);
                    }
                }
            }
        }
    }
}