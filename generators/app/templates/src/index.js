import tinymce from "tinymce";
const setup = (editor, url) => {
  editor.ui.registry.addIcon(
    "my-icon",
    `<svg t="1578903647673" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="822" width="24" height="24"><path d="M770.56 460.8h250.88C998.4 220.16 803.84 25.6 563.2 2.56v250.88c104.96 20.48 186.88 102.4 207.36 207.36zM460.8 253.44V2.56C220.16 25.6 25.6 220.16 2.56 460.8h250.88c20.48-104.96 102.4-186.88 207.36-207.36z m102.4 517.12v250.88c243.2-23.04 435.2-217.6 460.8-460.8H773.12C750.08 668.16 668.16 750.08 563.2 770.56zM253.44 563.2H2.56c23.04 243.2 217.6 435.2 460.8 460.8V773.12C355.84 750.08 273.92 668.16 253.44 563.2z m0 0" p-id="823"></path></svg>`
  );
  const openDialog = function(api) {
    return editor.windowManager.open({
      title: "Example plugin",
      body: {
        type: "panel",
        items: [
          {
            type: "input",
            name: "title",
            label: "Title"
          }
        ]
      },
      buttons: [
        {
          type: "cancel",
          text: "Close"
        },
        {
          type: "submit",
          text: "Save",
          primary: true
        }
      ],
      onSubmit(api) {
        const data = api.getData();
        // Insert content when the window form is submitted
        editor.insertContent("Title: " + data.title);
        api.close();
      }
    });
  };

  // Add a button that opens a window
  editor.ui.registry.addButton("mybutton", {
    text: "My button",
    icon: "my-icon",
    tooltip: "My button",
    onAction: api => {
      // api.setDisabled(!api.isDisabled);
      openDialog(api);
    }
  });

  //======================================Custom menu items block start======================================

  // Adds a menu item, which can then be included in any menu via the menu/menubar configuration
  editor.ui.registry.addMenuItem("mymenu", {
    text: "My menu",
    icon: "my-icon",
    tooltip: "My menu",
    value: "",
    disabled: false,
    onSetup: () => {
      return () => {};
    },
    onAction: api => {
      // api.setDisabled(!api.isDisabled);
      openDialog(api);
    }
  });

  editor.ui.registry.addNestedMenuItem("mynestedmenu", {
    text: "My nested menu",
    icon: "my-icon",
    tooltip: "My nested menu",
    value: "",
    disabled: false,
    onSetup: () => {
      return () => {};
    },
    getSubmenuItems: () => {
      return [
        {
          type: "menuitem",
          text: "My submenu item",
          onAction: api => {
            openDialog(api);
          }
        }
      ];
    }
  });

  editor.ui.registry.addToggleMenuItem("mytogglemenu", {
    text: "My toggle menu",
    value: "",
    active: true,
    disabled: false,
    onAction: api => {
      api.setActive(!api.isActive);
      openDialog(api);
    },
    onSetup: api => {
      return () => {};
    }
  });

  //======================================Custom menu items block end======================================

  //======================================Custom sidebar block start======================================

  editor.ui.registry.addSidebar("mysidebar", {
    tooltip: "My sidebar",
    icon: "my-icon",
    onSetup: api => {
      console.log("Render panel", api.element());
    },
    onShow: api => {
      console.log("Show panel", api.element());
      api.element().innerHTML = "Sidebar content!";
    },
    onHide: api => {
      console.log("Hide panel", api.element());
    }
  });

  //======================================Custom sidebar block end======================================

  //======================================Custom autocompleter block start======================================

  /* An autocompleter that allows you to insert special characters */
  editor.ui.registry.addAutocompleter("specialchars", {
    ch: ":",
    fetch: pattern => {
      var matchedChars = specialChars.filter(function(char) {
        return char.text.indexOf(pattern) !== -1;
      });

      return new tinymce.util.Promise(function(resolve) {
        var results = matchedChars.map(function(char) {
          return {
            value: char.value,
            text: char.text,
            icon: char.value
          };
        });
        resolve(results);
      });
    },
    onAction: (autocompleteApi, rng, value) => {
      editor.selection.setRng(rng);
      editor.insertContent(value);
      autocompleteApi.hide();
    },
    columns: "auto",
    matches: (rng, text, pattern) => {
      return true;
    },
    maxResults: 10,
    minChars: 1
  });
  //======================================Custom autocompleter block end======================================

  return {
    getMetadata: () => {
      return {
        name: "<%= pluginID %>",
        url:
          "https://github.com/<%= githubUsername %>/<%= githubRepositoryName %>#readme"
      };
    }
  };
};
tinymce.PluginManager.add("<%= pluginID %>", setup);
