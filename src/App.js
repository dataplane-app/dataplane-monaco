import React, {useEffect} from 'react';
import path from 'path';
import './App.css';
// import * as monaco from "monaco-editor";
import Editor, { useMonaco } from "@monaco-editor/react";
import loader from "@monaco-editor/loader";
// import path from 'path';

// loader.config({ monaco });

// loader.config({
// paths: {
//   vs: uriFromPath(
//     path.join(__dirname, "../node_modules/monaco-editor/min/vs")
//   )
// }
// });
// loader.config({ paths: { vs: "../node_modules/monaco-editor/min/vs" } });

// loader.init().then((monaco) => {
//   const wrapper = document.getElementById("monaco");
//   wrapper.style.height = "100vh";
//   const properties = {
//     value: "function hello() {\n\talert('Hello world!');\n}",
//     language: "javascript"
//   };

//   monaco.editor.create(wrapper, properties);
// });
// var process = {platform: "other"}

// const uriFromPath = _path => {
//   let pathName = path.resolve(_path).replace(/\\/g, '/');

//   if (pathName.length > 0 && pathName.charAt(0) !== '/') {
//     pathName = `/${pathName}`;
//   }
//   return encodeURI(`file://${pathName}`);
// };

// loader.config({
//     urls: {
//       monacoLoader: uriFromPath(
//         path.join(__dirname, '../node_modules/monaco-editor/min/vs/loader.js')
//       ),
//       monacoBase: uriFromPath(
//         path.join(__dirname, '../node_modules/monaco-editor/min/vs')
//       )
//     }
//   });

function ensureFirstBackSlash(str) {
  return str.length > 0 && str.charAt(0) !== "/"
      ? "/" + str
      : str;
}

function uriFromPath(_path) {
  const pathName = path.resolve(_path).replace(/\\/g, "/");
  return encodeURI("file://" + ensureFirstBackSlash(pathName));
}

// loader.config({
// paths: {
//   vs: uriFromPath(
//     path.join(__dirname, "../node_modules/monaco-editor/min/vs")
//   )
// }
// });

loader.config({ paths: { vs: "./node_modules/monaco-editor/min/vs" } });

// loader.init().then((monaco) => {
//   const wrapper = document.getElementById("root");
//   wrapper.style.height = "100vh";
//   const properties = {
//     value: "function hello() {\n\talert('Hello world!');\n}",
//     language: "javascript"
//   };

//   monaco.editor.create(wrapper, properties);
// });

function App() {
  // const path = require('path');
  const monaco2 = useMonaco();

  useEffect(() => {
    if (monaco2) {
      console.log("here is the monaco instance:", monaco2);
    }
  }, [monaco2]);

  // function ensureFirstBackSlash(str) {
  //   return str.length > 0 && str.charAt(0) !== "/"
  //       ? "/" + str
  //       : str;
  // }
  
  // function uriFromPath(_path) {
  //   const pathName = path.resolve(_path).replace(/\\/g, "/");
  //   return encodeURI("file://" + ensureFirstBackSlash(pathName));
  // }

  return (
    <div className="App">
      {/* <div id="monaco"></div> */}
      <Editor
                        height="90vh"
      defaultValue="// some comment"
      defaultLanguage="javascript"
                    />

    </div>
  );
}

export default App;
