<template>
  <div id="container" v-on:scroll="handleScroll" v-if="!loading">
    <div
      v-for="(post,index) in this.posts"
      @click="gotoPost(index)"
      class="short-post"
      :key="index"
    >
      <img class="img" src="https://picsum.photos/200" />
      <div class="more">
        <div class="title">
          <p>{{post.title}}</p>
        </div>
        <div class="text">
          <p>{{post.description}}</p>
        </div>
        <div class="info">
          <p>{{post.author}}</p>
          <p>{{post.created_at}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home-page",
  created: function() {
    axios
      .get("https://blog.parsasam.ir/rest/api/read.php?off=0")
      .then(res => {
        let recs = res.data.records;
        if (recs) {
          this.posts = recs;
          this.offset = recs.length;
        }
        this.loading = false;
      })
      .catch(err => console.log(error.response.status));
    window.addEventListener("scroll", this.handleScroll);
  },
  data: function() {
    return {
      loading: true,
      isLoadingMore: false,
      offset: 0,
      posts: []
    };
  },
  methods: {
    gotoPost(index) {
      this.$router.push({
        name: "post",
        params: {
          id: this.posts[index].markdown,
          data: this.posts[index]
        }
      });
    },
    handleScroll() {
      let container = document.getElementById("container");
      if (
        window.scrollY + window.innerHeight >= container.clientHeight &&
        !this.isLoadingMore
      ) {
        this.isLoadingMore = true;
        this.loadMore();
      }
    },
    loadMore() {
      console.log("loadMore");
      axios
        .get(`https://blog.parsasam.ir/rest/api/read.php?off=${this.offset}`)
        .then(res => {
          let recs = res.data.records;
          if (recs) {
            let array = this.posts.slice();
            this.posts = array.concat(recs);
            this.offset += recs.length;
            this.isLoadingMore = false;
          }
        })
        .catch(error => {
          if (error.response.status === 404) {
            window.removeEventListener("scroll", this.handleScroll);
          }
        });
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(27, 18, 26);
}

.short-post {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70vw;
  margin: 5vh;
  border-bottom: solid 2px white;
  border-bottom-left-radius: 20px;
  transition: transform 0.5s;
}

.img {
  width: 20vw;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.title {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
}

.title > p {
  font-size: 20px;
}

.text {
  box-sizing: border-box;
  padding: 10px;
  margin-top: 10px;
}

.info {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 10px;

  border-bottom-left-radius: 23px;
}

.short-post:active {
  transform: scale(0.98);
}
</style>