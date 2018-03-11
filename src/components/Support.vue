<template>
	<div class="support">
		<div class="container" style="border-top: 1px solid #eee; padding: 40px 0">
			<ul v-if="posts && posts">
		    <li v-for="post of posts">
		      <p><strong>{{post.title}}</strong></p>
		      <p>{{post.body}}</p>
		    </li>
		  </ul>
			<ul v-if="errors && errors.length">
		    <li v-for="error of errors">
		      {{error.message}}
		    </li>
		  </ul>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	name: 'Blog',
	data() {
		return {
			posts: [],
			errors: []
		}
	},
	created() {
		axios.get(`http://jsonplaceholder.typicode.com/posts`)
		.then(response => {
			this.posts = response.data
		})
		.catch(e => {
			this.errors.push(e)
		})
	}
}
</script>
<style lang="sass">
.support
	color: gray
</style>
