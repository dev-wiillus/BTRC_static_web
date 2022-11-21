import NodeCache from "node-cache";

const nodeCache = new NodeCache({stdTTL: 60 * 3});

export default nodeCache