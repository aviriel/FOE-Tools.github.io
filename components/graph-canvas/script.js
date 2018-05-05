import Chart from "chart.js";

export default {
  name: "GraphCanvas",
  props: {
    gtype: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    labels: {
      type: Array,
      required: true
    },
    datasets: {
      type: Array,
      required: true
    },
    goptions: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    labels: {
      handler(val) {
        this.$data.chart.destroy();
        this.$data.chart_data.labels = val;

        this.updateCanvas();
      },
      deep: true
    },
    datasets: {
      handler(val) {
        this.$data.chart.destroy();
        this.$data.chart_data.datasets = val;

        this.updateCanvas();
      },
      deep: true
    }
  },
  data() {
    return {
      type: this.$props.gtype,
      chart_data: {
        labels: this.$props.labels,
        datasets: this.$props.datasets
      },
      options: this.$props.goptions
    };
  },
  methods: {
    updateCanvas() {
      const ctx = document.getElementById(this.$props.id).getContext("2d");
      this.$data.chart = new Chart(ctx, {
        type: this.$data.type,
        data: this.$data.chart_data,
        options: this.$data.options
      });
    }
  },
  mounted() {
    this.updateCanvas();
  }
};
