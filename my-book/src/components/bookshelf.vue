<template>
  <div class="bookshelf">
		this is bookshelf
  </div>
</template>

<script>
export default {
  name: 'bookshelf',
  data () {
    return {
      
    }
  },
	created(){
		this.getData('/api/getUser',{},res => console.log(res.data))
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
