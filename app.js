const oauthsignature = require('oauth-signature')
const uuidV4 = require('uuid/v4')


var httpmethod='GET'


const sign=(url,CI,CS,callback)=>{
    var timestamp=Math.floor(new Date()/1000)
    const nonce=uuidV4()
    const parameters = {
        oauth_consumer_key : CI,
        oauth_nonce : nonce,
        oauth_timestamp: timestamp,
        oauth_signature_method: 'HMAC-SHA1',
        oauth_version:1.0,
    }
    encodedsignature=oauthsignature.generate(httpmethod,url,parameters,CS)
    callback(timestamp,nonce,encodedsignature)
}

sign('test.com','asdkjhaslkd','123kj4hsxcljkh',(timestamp,nonce,encodedsignature)=>{
    
})