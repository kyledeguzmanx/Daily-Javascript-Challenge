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
                else if(data > node.data){
                    if(!node.right){
                        node.right = new Node(data);
                        return;
                    }
                    else if(node.right){
                        return searchTree(node.right);
                    }
                }
                else{
                    return null;
                }
            };
            return searchTree(node);
        } 
    }
    findMin(){
        let current = this.root;
        while(current.left){
            current = current.left;
        }

        return current.data;
    }
}