import tinymce from "tinymce";
const setup = (editor, url) => {
  editor.ui.registry.addIcon(
    "example",
    `<svg t="1575356818205" class="icon" viewBox="0 0 1451 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4743" width="24" height="24"><path d="M253.41656 255.809641H0v-85.351983h253.41656V0.176293l301.385713 191.8341-301.385713 191.8341V255.809641z m429.415564 85.358235h768.189108V170.457658H682.832124v170.710218zM426.768671 511.873094h1024.252561v-85.351984H426.768671v85.351984z m0 170.710219h1024.252561v-85.356985H426.768671v85.356985z m0 170.706468h1024.252561V767.936547H426.768671v85.353234z m0 170.710219h768.189108v-85.353234H426.768671v85.353234z" fill="#000000" p-id="4744"></path></svg>`
  );
  editor.ui.registry.addButton("example", {
    tooltip: "example",
    icon: "example",
    onAction: () => {}
  });
  return {
    getMetadata: function() {
      return {
        name: "example",
        url: "https://github.com/panhezeng/example#readme"
      };
    }
  };
};
tinymce.PluginManager.add("example", setup);
