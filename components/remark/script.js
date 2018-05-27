import remark from "remark";
import html from "remark-html";
import emoji from "remark-emoji";

export default {
  name: "Remark",
  props: {
    markdown: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      value: ""
    };
  },
  watch: {
    markdown() {
      let self = this;
      remark()
        .use(emoji)
        .use(html)
        .process(this.$props.markdown, function(err, file) {
          if (err) {
            console.error(err);
          } else {
            self.$data.value = file.contents;
          }
        });
    }
  }
};
