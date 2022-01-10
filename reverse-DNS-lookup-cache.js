class TrieNode {
    constructor() {
        this.child = new Map();
    }
}

function insert(root, ipAdd, urls) {
    for (let i = 0; i < ipAdd.length; i++) {
        insertUtil(root, ipAdd[i], urls[i], 0);
    }
}
// Time O(ipadd_length)
function insertUtil(node, ipAdd, url, pos) {
    let temp = null;
    if (node.child.has(ipAdd[pos])) {
        temp = node.child.get(ipAdd[pos]);
    } else {
        temp = new TrieNode();
        node.child.set(ipAdd[pos], temp);
    }
    if (pos == ipAdd.length - 1) {
        temp.url = url;
        return;
    }
    this.insertUtil(temp, ipAdd, url, pos + 1);
}

// Time O(ipadd_length)
function search(node, ipAdd, pos) {
    let temp = null;
    if (pos == ipAdd.length - 1) {
        temp = node.child.get(ipAdd[pos]);
        if (temp != null) {
            return temp.url;
        }
        return temp;
    }
    if (node.child.has(ipAdd[pos])) {
        temp = node.child.get(ipAdd[pos]);
        return search(temp, ipAdd, pos + 1);
    }
    return "Invalid IP address/ No Domain assoiciated";
}

let ipAdd = ["107.108.11.123", "107.109.123.255", "74.125.200.106"];
let urls = ["www.samsung.com",
    "www.samsung.net", "www.google.in"
];

let root = new TrieNode();
insert(root, ipAdd, urls);
//System.out.println(root);
document.write("74.125.200.106 : " +
    search(root, "74.125.200.106", 0) + "<br>");
document.write("107.109.123.245 : " +
    search(root, "107.109.123.245", 0) + "<br>");
document.write("107.108.11.123 : " +
    search(root, "107.108.11.123", 0) + "<br>");