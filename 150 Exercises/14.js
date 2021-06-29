const file = 'file.txt';

const file2 = 'file2.mp4';

const getFileExtension = (file) => {
  return file.split('.').pop()

}
console.log(getFileExtension(file2));