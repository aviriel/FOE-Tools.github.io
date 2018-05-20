import { gbs, gbList } from "~/lib/foe-data/gbs";

const i18nPrefix = "components.gb_investment.gb_list_select.";

export default {
  name: "GbListSelect",
  props: {
    current: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      i18nPrefix: i18nPrefix,
      foeGBList: gbList,
      gbList: this.$props.current
    };
  },
  watch: {
    gbList(val) {
      if (val in gbs) {
        this.$emit("change", val);
      }
    }
  }
};
