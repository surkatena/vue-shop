<template>
    <div>
      <a class="catalog__pic" href="#">
        <img :src="image" :alt="title">
      </a>

      <h3 class="catalog__title">
        <a href="#">
          {{ title }}
        </a>
      </h3>

      <span class="catalog__price">
        {{ price }} ₽
      </span>

      <!-- <ul class="colors colors--black">
        <li class="colors__item">
          <label class="colors__label" for="color-1">
            <input class="colors__radio sr-only" type="radio" name="color-1"
              value="#73B6EA" checked="" id="color-1">
            <span class="colors__value" style="background-color: #73B6EA;">
            </span>
          </label>
        </li>
        <li class="colors__item">
          <label class="colors__label" for="color-2">
            <input class="colors__radio sr-only" type="radio" name="color-1"
              value="#8BE000" id="color-2">
            <span class="colors__value" style="background-color: #8BE000;">
            </span>
          </label>
        </li>
        <li class="colors__item">
          <label class="colors__label" for="color-3">
            <input class="colors__radio sr-only" type="radio" name="color-1"
              value="#222" id="color-3">
            <span class="colors__value" style="background-color: #222;">
            </span>
          </label>
        </li>
      </ul> -->
    </div>
</template>

<script>
export default {
  props: ['title', 'image', 'price'],
};
</script>
