const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg')
const ffmpeg = require('fluent-ffmpeg')

ffmpeg.setFfmpegPath(ffmpegInstaller.path)

/**
 *
 * inputPath {string} 视频传入地址
 * outputPath {string} 视频输出地址
 * format {string} 输出视频格式
 * size {string} 视频码率
 *  */
const videoResize = opts => {
  return new Promise((resolve, reject) => {
    const { inputPath, outputPath, format, size } = opts
    if (!inputPath) reject(new Error('please add video inputPath!!'))
    if (!outputPath) reject(new Error('please add video outputPath!!'))
    if (!format) reject(new Error('please add video format!!'))
    if (!size) reject(new Error('please add video bitRate!!'))
    ffmpeg(inputPath)
      .videoCodec('libx264')
      .format(format)
      .size(size)
      .on('error', err => {
        reject(err)
      })
      .on('end', () => {
        resolve({
          info: {
            inputPath,
            outputPath,
            format,
            size
          }
        })
      })
      .save(outputPath)
  })
}

module.exports = videoResize
