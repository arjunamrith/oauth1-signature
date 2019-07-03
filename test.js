const oauthS =require('./oauth-sign')

sign=oauthS.sign('test.com','askdjhanc823qnelq','kasdf8asdhfia8',(timestamp,nonce,signature)=>{
    console.log('timestamp '+timestamp)
    console.log('nonce '+nonce)
    console.log('encoded Oauth signature with SHA1 algorithm '+signature)
})