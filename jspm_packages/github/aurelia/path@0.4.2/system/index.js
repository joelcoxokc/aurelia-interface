/* */ 
System.register([], function (_export) {
  "use strict";

  _export("relativeToFile", relativeToFile);

  _export("join", join);

  function trimDots(ary) {
    var i, part;
    for (i = 0; i < ary.length; ++i) {
      part = ary[i];
      if (part === ".") {
        ary.splice(i, 1);
        i -= 1;
      } else if (part === "..") {
        if (i === 0 || i == 1 && ary[2] === ".." || ary[i - 1] === "..") {
          continue;
        } else if (i > 0) {
          ary.splice(i - 1, 2);
          i -= 2;
        }
      }
    }
  }

  function relativeToFile(name, file) {
    var lastIndex,
        normalizedBaseParts,
        fileParts = file && file.split("/");

    name = name.trim();
    name = name.split("/");

    if (name[0].charAt(0) === "." && fileParts) {
      normalizedBaseParts = fileParts.slice(0, fileParts.length - 1);
      name = normalizedBaseParts.concat(name);
    }

    trimDots(name);

    return name.join("/");
  }

  function join(path1, path2) {
    var url1, url2, url3, i, ii, urlPrefix;

    if (!path1) {
      return path2;
    }

    if (!path2) {
      return path1;
    }

    urlPrefix = path1.indexOf("/") === 0 ? "/" : "";

    url1 = path1.split("/");
    url2 = path2.split("/");
    url3 = [];

    for (i = 0, ii = url1.length; i < ii; ++i) {
      if (url1[i] == "..") {
        url3.pop();
      } else if (url1[i] == "." || url1[i] == "") {
        continue;
      } else {
        url3.push(url1[i]);
      }
    }

    for (i = 0, ii = url2.length; i < ii; ++i) {
      if (url2[i] == "..") {
        url3.pop();
      } else if (url2[i] == "." || url2[i] == "") {
        continue;
      } else {
        url3.push(url2[i]);
      }
    }

    return urlPrefix + url3.join("/").replace(/\:\//g, "://");;
  }
  return {
    setters: [],
    execute: function () {}
  };
});