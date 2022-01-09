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
function insert(root, key) {
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
}

//Time O(Key_length)
function search(root, key) {
    let pCrawl = root;

    for (let i = 0; i < key.length; i++) {
        let index = key[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if (pCrawl.children[index] == null)
            return false;

        pCrawl = pCrawl.children[index];
    }

    return (pCrawl != null && pCrawl.isEndOfWord);
}

function isEmpty(root) {
    for (let i = 0; i < ALPHABET_SIZE; i++)
        if (root.children[i] != null)
            return false;
    return true;
}

// Time O(key_length)
function remove(root, key, depth) {
    // If tree is empty
    if (root == null)
        return null;

    // If last character of key is being processed
    if (depth == key.length) {

        // This node is no more end of word after
        // removal of given key
        if (root.isEndOfWord)
            root.isEndOfWord = false;

        // If given is not prefix of any other word
        if (isEmpty(root)) {
            root = null;
        }

        return root;
    }

    /// If not last character, recur for the child
    // obtained using ASCII value
    let index = key[depth].charCodeAt(0) - 'a'.charCodeAt(0);
    root.children[index] =
        remove(root.children[index], key, depth + 1);

    // If root does not have any child (its only child got
    // deleted), and it is not end of another word.
    if (isEmpty(root) && root.isEndOfWord == false) {
        root = null;
    }

    return root;
}
// Input keys (use only 'a' through 'z'
// and lower case)
let keys = ["the", "a", "there",
    "answer", "any", "by",
    "bye", "their", "hero", "heroplane"
];
let n = keys.length;

root = new TrieNode();

// Construct trie
for (let i = 0; i < n; i++)
    insert(root, keys[i]);

// Search for different keys
if (search(root, "the"))
    document.write("Yes<br>");
else
    document.write("No<br>");


remove(root, "heroplane", 0);

if (search(root, "hero"))
    document.write("Yes<br>");
else
    document.write("No<br>");

if (search(root, "heroplane"))
    document.write("Yes<br>");
else
    document.write("No<br>");