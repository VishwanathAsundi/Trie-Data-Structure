// Insert and search costs O(key_length), however the memory requirements of Trie is O(ALPHABET_SIZE * key_length * N) where N is number of keys in Trie.
const ALPHABET_SIZE = 26;
class TrieNode {
    constructor() {
        this.isEndOfWord = false;
        this.children = new Array(ALPHABET_SIZE).fill(null);
    }
}
let root;
// Time O(key_length)
function insert(key) {
    let length = key.length;
    let node = root;
    let index;

    for (let level = 0; level < length; level++) {

        index = key[level].charCodeAt(0) - 'a'.charCodeAt(0);
        if (node.children[index] == null) {
            node.children[index] = new TrieNode();
        }
        node = node.children[index];
    }
    node.isEndOfWord = true;
    console.log(node);
}
//Time O(Key_length)
function search(key) {
    let length = key.length;

    let node = root;
    let index;

    for (let level = 0; level < length; level++) {
        index = key[level].charCodeAt(0) - 'a'.charCodeAt(0);
        if (node.children[index] == null) {
            return false;
        }
        node = node.children[index];
    }
    return node.isEndOfWord;
}

// Input keys (use only 'a' through 'z' and lower case)
let keys = ["the", "a", "there", "answer", "any",
    "by", "bye", "their"
];

let output = ["Not present in trie", "Present in trie"];


root = new TrieNode();

// Construct trie
let i;
//O(N)
for (i = 0; i < keys.length; i++)
    insert(keys[i]);

// Search for different keys
if (search("the") == true)
    document.write("the --- " + output[1] + "<br>");
else
    document.write("the --- " + output[0] + "<br>");

if (search("these") == true)
    document.write("these --- " + output[1] + "<br>");
else
    document.write("these --- " + output[0] + "<br>");

if (search("their") == true)
    document.write("their --- " + output[1] + "<br>");
else
    document.write("their --- " + output[0] + "<br>");

if (search("thaw") == true)
    document.write("thaw --- " + output[1] + "<br>");
else
    document.write("thaw --- " + output[0] + "<br>");

if (search("answer") == true)
    document.write("answer --- " + output[1] + "<br>");
else
    document.write("answer --- " + output[0] + "<br>");