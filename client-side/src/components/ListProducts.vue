/<template>
  <div class="col-12 col-sm-6 col-md-6 col-lg-3">
    <div class="card h-100 mb-4">
      <div class="card-header">
        <h5 class="card-title m-0 p-0 font-weight-bolder text-secondary">{{product.name}}</h5>
      </div>
      <div class="card-body text-left">
        <img class="card-img-top imageProduct" :src="product.image_url" alt />
        <!-- <p class="card-text">Arduino, Raspbery, Watson or Adafruit</p> -->
        <span class="font-lead-base font-weight-bold text-muted">20% Off!</span>
        <div class="promotion-promo">{{ getRupiah(product.price)}}</div>
        <div class="promotion-price">
          <div class="promotion-price-desc">Now</div>
          <div class="promotion-price-text">{{getRupiah(product.price)}}</div>
        </div>
      </div>
      <div class="card-footer">
        <a @click.prevent="addCart(product.id)" class="btn btn-warning">add Carts</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],

  created() {
    this.$store.dispatch("fetchProduct");
  },
  methods: {
        addCart(id) {
          console.log("object");
          this.$store.dispatch("postCart", id);
        },
    getRupiah(money) {
      return new Intl.NumberFormat("id", {
        style: "currency",
        currency: "idr"
      }).format(money);
    }
  }
};
</script>

<style >
.imageProduct {
  height: 200px;
  width: 268x;
  object-fit: cover;
}
</style>

