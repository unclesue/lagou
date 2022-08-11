<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" :style="{ backgroundImage: `url(${GRIDSOME_API_URL + gereral.cover.url})` }">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="site-heading">
                        <h1>{{ gereral.title }}</h1>
                        <span class="subheading">{{ gereral.subtitle }}</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">

                <div v-for="row of $page.posts.edges" :key="row.node.title">
                    <!-- Post preview-->
                    <div class="post-preview">
                        <g-link :to="row.node.path">
                            <h2 class="post-title">{{ row.node.title }}</h2>
                            <h3 class="post-subtitle"></h3>
                        </g-link>
                        <p class="post-meta">
                            Posted by
                            <a href="#!">{{ row.node.created_by.lastname + row.node.created_by.firstname }}</a>
                            on {{ row.node.created_at }}
                        </p>
                        <p>
                            <span v-for="tag of row.node.tags" :key="tag.title">
                                <g-link :to="`/tag/${tag.id}`">{{ tag.title }}</g-link>
                            </span>
                        </p>
                    </div>
                    <!-- Divider-->
                    <hr class="my-4" />
                </div>

                <!-- Pager-->
                <Pager :info="$page.posts.pageInfo"/>
            </div>
        </div>
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  posts: allStrapiPost(perPage: 5, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        path
        title
        content
        created_at
        created_by {
          firstname
          lastname
        }
        tags {
          id
          title
        }
      }
    }
  }

  gereral: allStrapiGeneral {
    edges {
      node {
        title
        subtitle
        cover {
          url
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'

export default {
  components: {
    Pager
  },
  metaInfo: {
    title: 'Hello, world!'
  },
  computed: {
    gereral() {
      return this.$page.gereral.edges[0].node
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
