import React from "react";
import ReactDOM from "react-dom";
import tinymce from "tinymce";
import "../../src/index";
import "../../static/langs/zh_CN";
// import "../../dist/<%= pluginID %>/langs/zh_CN";
// import "../../dist/<%= pluginID %>/plugin.min";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    tinymce.init({
      selector: "textarea.tinymce",
      plugins: "code <%= pluginID %>",
      menu: {
        myallmenus: { title: "My all menus", items: "mymenu | mynestedmenu | mytogglemenu" }
      },
      menubar: "edit myallmenus",
      toolbar: "code | mybutton | mysidebar"
    });
  }

  render() {
    return (
      <textarea
        className="tinymce"
        defaultValue="<p>test</p><p>Type : below and then keep typing to reduce further matches. For example, typing :amp should show the ampersand item in the menu. Pressing esc should close the autocomplete menu.</p>"
      ></textarea>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
