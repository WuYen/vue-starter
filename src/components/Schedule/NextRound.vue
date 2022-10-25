<template>
  <div class="flex" @click="scrollTo(round)">
    <div class="box">
      <div class="arrow">
        <div class="icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="shift0"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="shift1"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="shift2"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
      </div>
    </div>
    <div class="pl10">
      <div class="title sub">Next-Round {{ round }}</div>
      <div class="title">{{ name }}</div>
    </div>
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
    window.scrollTo(scrollX, scrollY - 40);
  } else if (offsetTop + target.clientHeight > viewBottom) {
    //element over curret viewport => scroll down
    window.scrollTo(scrollX, scrollY + 40);
  }

  let isInView =
    offsetTop >= viewTop && offsetTop + target.clientHeight <= viewBottom;
  if (!isInView) {
    requestAnimationFrame(() => {
      animate(target);
    });
  } else {
    //highlight target
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  border: none;
  border-radius: 0.5rem;
  border-color: #c4c4c4;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px hsl(0deg 0% 77% / 40%);
}
.title {
  text-transform: capitalize;
  font-weight: 600;
}

.title.sub {
  margin-top: 10px;
  font-size: 14px;
  color: #787878;
}
.box {
  background-color: #e10600;
}
.pl10 {
  padding-left: 10px;
}
.arrow {
  height: 100%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.icons {
  color: white;
}
svg {
  position: relative;
  transform: rotate(-90deg);
  display: block;
}
.shift0 {
  top: 15px;
}
.shift2 {
  top: -15px;
}
</style>
