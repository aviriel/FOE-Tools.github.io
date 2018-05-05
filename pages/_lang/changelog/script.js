import remark from "remark";
import html from "remark-html";

const i18nPrefix = "routes.changelog.";

export default {
  head() {
    return { title: this.$t(i18nPrefix + "title") };
  },
  data() {
    this.$store.commit("SET_CURRENT_LOCATION", "changelog");
    this.$store.commit("RESTORE_HERO");

    return {
      url:
        "https://raw.githubusercontent.com/FOE-Tools/FOE-Tools.github.io/dev/CHANGELOG.md",
      markdown: ""
    };
  },
  mounted() {
    let xhr = new XMLHttpRequest();
    let self = this;
    xhr.open("GET", this.$data.url, true);
    xhr.onload = function(e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          remark()
            .use(html)
            .process(xhr.responseText, function(err, file) {
              if (err) {
                console.error(err);
              } else {
                self.$data.markdown = file.contents;
              }
            });
        } else {
          console.error(xhr.statusText);
        }
      }
    };
    xhr.onerror = function(e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);
  }
};
