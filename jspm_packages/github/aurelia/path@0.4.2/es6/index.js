/* */ 
"format register";
function trimDots(ary) {
  var i, part;
  for (i = 0; i < ary.length; ++i) {
      part = ary[i];
      if (part === '.') {
          ary.splice(i, 1);
          i -= 1;
      } else if (part === '..') {
          // If at the start, or previous value is still ..,
          // keep them so that when converted to a path it may
          // still work when converted to a path, even though
          // as an ID it is less than ideal. In larger point
          // releases, may be better to just kick out an error.
          if (i === 0 || (i == 1 && ary[2] === '..') || ary[i - 1] === '..') {
              continue;
          } else if (i > 0) {
              ary.splice(i - 1, 2);
              i -= 2;
          }
      }
  }
}

export function relativeToFile(name, file){
  var lastIndex,
      normalizedBaseParts,
      fileParts = (file && file.split('/'));

  name = name.trim();
  name = name.split('/');

  if (name[0].charAt(0) === '.' && fileParts) {
      //Convert file to array, and lop off the last part,
      //so that . matches that 'directory' and not name of the file's
      //module. For instance, file of 'one/two/three', maps to
      //'one/two/three.js', but we want the directory, 'one/two' for
      //this normalization.
      normalizedBaseParts = fileParts.slice(0, fileParts.length - 1);
      name = normalizedBaseParts.concat(name);
  }

  trimDots(name);

  return name.join('/');
}

export function join(path1, path2) {
  var url1, url2, url3, i, ii, urlPrefix;

  if(!path1){
    return path2;
  }

  if(!path2){
    return path1;
  }
  
  urlPrefix = path1.indexOf('/') === 0 ? '/' : '';

  url1 = path1.split('/');
  url2 = path2.split('/');
  url3 = [];

  for (i = 0, ii = url1.length; i < ii; ++i) {
    if (url1[i] == '..') {
      url3.pop();
    } else if (url1[i] == '.' || url1[i] == '') {
      continue;
    } else {
      url3.push(url1[i]);
    }
  }

  for (i = 0, ii = url2.length; i < ii; ++i) {
    if (url2[i] == '..') {
      url3.pop();
    } else if (url2[i] == '.' || url2[i] == '') {
      continue;
    } else {
      url3.push(url2[i]);
    }
  }

  return urlPrefix + url3.join('/').replace(/\:\//g, '://');;
}