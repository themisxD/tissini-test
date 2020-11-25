<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      fade
      background="#ababab"
      img-width="1024"
      img-height="450"
      style="text-shadow: 1px 1px 2px #333;"
      
    >
      <!-- Text slides with image 
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>
      -->

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block w-100"
            width="1024"
            height="450"
            src="../assets/carousel/clothes1.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="d-block w-100"
            width="1024"
            height="450"
            src="../assets/carousel/clothes2.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="d-block w-100"
            width="1024"
            height="450"
            src="../assets/carousel/clothes3.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {

    }
  }
</script>