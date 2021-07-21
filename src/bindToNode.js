export default function bindToNode(node, name, fn) {
    node[name] = fn.bind(node);
}