const ffprobe = require('node-ffprobe')
const ffprobeInstaller = require('@ffprobe-installer/ffprobe')

ffprobe.FFPROBE_PATH = ffprobeInstaller.path

const getVideoInfo = vpath => {
  return new Promise((resolve, reject) => {
    ffprobe(vpath, (err, metadata) => {
      if (err) reject(err)
      resolve(metadata)
    })
  })
}

module.exports = getVideoInfo
