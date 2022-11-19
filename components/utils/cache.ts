import NodeCache from "node-cache";

const nodeCache = new NodeCache({stdTTL: 60 * 3});

class Cache {
    cache;

    constructor(){
        this.cache = nodeCache;
    }

    getCache(key: string){
        return this.cache.get(key);
    }

    setCache(key: string, value: string | number){
        this.cache.set(key, value);
    }
};

// export default function cache(){ return new Cache(); };

export default nodeCache