<template>
  <div>
    <div>Arrow</div>
    <div class="title" @click="scrollTo(round)">Next-Round {{ round }}</div>
    <div class="title sub">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    name: String,
    round: String,
  },
  methods: {
    scrollTo: (round) => {
      var target = document.getElementById("round-" + round);
      console.log("scroll to round", "id: round-" + round, target);
      animate(target);
    },
  },
};

function animate(target) {
  const { scrollX, scrollY } = window;
  const offsetTop = target.offsetTop;
  const viewTop = window.scrollY;
  const viewBottom = window.scrollY + window.innerHeight;
  if (offsetTop < viewTop) {
    //element above curret viewport => scroll up
    window.scrollTo(scrollX, scrollY - 20);
  } else if (offsetTop + target.clientHeight > viewBottom) {
    //element over curret viewport => scroll down
    window.scrollTo(scrollX, scrollY + 20);
  }

  let isInView =
    offsetTop >= viewTop && offsetTop + target.clientHeight <= viewBottom;
  if (!isInView)
    requestAnimationFrame(() => {
      // console.log(
      //   "keep going",
      //   "offsetTop:",
      //   offsetTop,
      //   `top:${window.scrollY + window.innerHeight}`
      // );
      animate(target);
    });
}
</script>

<style scoped></style>
