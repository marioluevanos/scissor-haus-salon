<script setup lang="ts">
import categoryData from "@/data/category-data";

const category_items = categoryData.filter((c) => c.productType === "beauty");

const router = useRouter();
// handle parent
const handleParentCategory = (value: string) => {
  const newCategory = value.toLowerCase().replace("&", "").split(" ").join("-");
  router.push(`/shop?category=${newCategory}`);
};
</script>

<template>
  <section class="tp-category-area pt-95">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-lg-6 col-md-8">
          <div class="tp-section-title-wrapper-3 mb-45">
            <span class="tp-section-title-pre-3">Lookbook Collection</span>
            <h3 class="tp-section-title-3">Discover Your Look</h3>
          </div>
        </div>
        <div class="col-lg-6 col-md-4">
          <div class="tp-category-more-3 text-md-end mb-55">
            <nuxt-link href="/shop" class="tp-btn">
              Shop All Products
              <svg-sm-arrow />
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="item in category_items"
          :key="item.id"
          class="col-lg-3 col-sm-6"
        >
          <div
            class="tp-category-item-3 p-relative black-bg text-center z-index-1 fix mb-30"
          >
            <div
              class="tp-category-thumb-3 include-bg"
              :style="`background-image:url(${item.img})`"
            ></div>
            <div class="tp-category-content-3 transition-3">
              <h3 class="tp-category-title-3">
                <a
                  @click="handleParentCategory(item.parent)"
                  class="cursor-pointer"
                >
                  {{ item.parent }}
                </a>
              </h3>
              <span class="tp-categroy-ammount-3">
                {{ item.products.length }} Products
              </span>
              <div class="tp-category-btn-3">
                <a
                  @click="handleParentCategory(item.parent)"
                  class="tp-link-btn tp-link-btn-2 cursor-pointer"
                >
                  View Now
                  <svg-sm-arrow-2 />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
