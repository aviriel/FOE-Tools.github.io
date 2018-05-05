import foeGBData from "~/scripts/foe-gb-data";

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
      foeGBData,
      gbList: this.$props.current
    };
  },
  watch: {
    gbList(val) {
      if (val in foeGBData.gbs) {
        this.$emit("change", val);
      }
    }
  }
};
