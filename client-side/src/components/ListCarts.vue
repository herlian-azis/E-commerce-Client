/<template>
    <div class="overflow-auto" style="max-width: auto; max-height: 700px;">
  <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">No</th>
        <th scope="col">Name</th>
        <th scope="col">Image</th>
        <th scope="col">Quantity</th>
        <th scope="col">Price</th>
        <th scope="col">Action</th>
      </tr>
    </thead>

    <tbody >
      <tr v-for="(item, index) in $store.state.carts" :key="index">
        <th scope="row">{{index+1}}</th>
        <td>{{item.Product.name}}</td>
        <td>
        <img :src="item.Product.image_url" alt="" class="productImage">
        </td>
        <td>{{item.quantity}}</td>
        <td>{{item.Product.price}}</td>
        <td><button @click.prevent="deleteCart(item.ProductId)" class="btn btn-danger">Delete</button></td>
      </tr>
    </tbody>
  </table>
    </div>

</template>

<script>
export default {

    created() {
        this.$store.dispatch("fetchCart");
    },
    computed: {
      carts(){
        return this.$store.state.carts
        }
    },
    methods: {
      deleteCart(id){
       
        this.$store.dispatch("deleteCart");
        }
    },
};
</script>

<style>
 .productImage {
   height: 150px;
   width: 150px;
   object-fit: cover;
 }
</style>