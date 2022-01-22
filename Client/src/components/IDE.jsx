import { useState, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/webpack-resolver";

import "./Styles/IDE.scss";

export default function IDE(props) {
  const [code, setCode] = useState("");
  const [codeResult, setCodeResult] = useState("");

  const evalCode = () => {
    // eslint-disable-next-line no-eval
    setCodeResult(eval(code));
  };

  const test = (e) => {
    setCode(e);
  };

  useEffect(() => {
    return code;
  }, [test]);

  return (
    <form>
      <AceEditor
        placeholder="Write some code!"
        mode="javascript"
        theme="twilight"
        onChange={(e) => {
          test(e);
        }}
        name="devsden"
        fontSize={14}
        tabSize={2}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          fontFamily: "Fira Code",
        }}
        showGutter={true}
      />
      <textarea className="console" value={codeResult} disabled></textarea>
      <button
        onClick={() => {
          evalCode();
        }}
      >
        Run
      </button>
      <button
        onClick={() => {
          this.refs.editor.editor.redo();
        }}
      >
        Redo
      </button>
    </form>
  );
}
