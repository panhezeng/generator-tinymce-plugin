import React from "react";
import ReactDOM from "react-dom";
import tinymce from "tinymce";
import "../../src/index";
// import "../../dist/tinymce-plugin-text-indent-outdent/plugin.min";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    tinymce.init({
      selector: "textarea.tinymce",
      plugins: "code example",
      toolbar: "code | example"
    });
  }

  componentWillUnmount() {}

  render() {
    return (
      <textarea
        className="tinymce"
        defaultValue="<p>test1</p><p>test2</p>"
      ></textarea>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
