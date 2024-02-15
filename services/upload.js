let multer = require("multer")
const { Storage } = require('@google-cloud/storage');
let gcpCredentials = {
    keyFilename : __dirname+'/key.json',
    bucketName : 'hiring-site'
}

const storage = new Storage({
    keyFilename: gcpCredentials.keyFilename,
});

const bucket = storage.bucket(gcpCredentials.bucketName);

exports.uploadFile = async (file,cb) => {
  try {
    
    console.log('get inside this function')
    if(!file) return cb(true,data = 'file missing')
    const blob = bucket.file(file.originalname);
  
    const stream = blob.createWriteStream({
      metadata: {
        contentType: file.mimetype,
        acl: [
          {
            entity: 'allUsers',
            role: storage.acl.READER_ROLE,
          },
        ],
      },
    });
  
    stream.on('error', (err) => {
      console.error(err);
     return cd(true, data = 'upload failed')
    });
  
    stream.on('finish', async () => {
      const [url] = await blob.getSignedUrl({
        action: 'read',
        expires: '01-01-2030', // Set an expiration date for the URL
      });
      return cb (false, data = url)
    });
  
    stream.end(file.buffer);
  
  } catch (error) {

    return cb(true, data = 'error')
    
  }
}