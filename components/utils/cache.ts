import NodeCache from "node-cache";

const nodeCache = new NodeCache({stdTTL: 60 * 3, checkperiod: 60 * 3, deleteOnExpire: true});

export default nodeCache