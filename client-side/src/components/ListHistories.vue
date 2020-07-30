/<template>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in $store.state.histories" :key="index">
      <th scope="row">{{item}}</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  
  </tbody>
</table>
</template>

<script>
export default {

computed: {
  
  
},

created() {
  this.$store.dispatch('fetchHistory')
  console.log(this.$store.state.histories);
  
},
}
</script>

<style>

</style>