const IPFS = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const ipfsApi = require('ipfs-api');
const ipfs = new ipfsApi('localhost', '5001', {protocol: 'http'});

export default ipfs;
