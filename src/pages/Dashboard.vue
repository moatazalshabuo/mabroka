<template>
  <main>
    <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto ">
      <!-- Cards -->
      <div class="grid grid-cols-1 gap-1 md:grid-cols-2 bg-white p-4">
        <div class="">
          <BarChart></BarChart>
        </div>
        <div>
        <line-chart></line-chart>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import BarChart from "../components/charts/BarChart.vue";
import LineChart from "../components/charts/LineChart.vue";

export default {
  name: "Dashboard",
  components: {
    BarChart,
    LineChart,
  },
};
</script>
