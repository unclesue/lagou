<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="site-heading">
                        <h1># {{ $page.tag.title }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">

                <div v-for="row of $page.tag.posts" :key="row.title">
                    <!-- Post preview-->
                    <div class="post-preview">
                        <g-link :to="`/post/${row.id}/`">
                            <h2 class="post-title">{{ row.title }}</h2>
                            <h3 class="post-subtitle"></h3>
                        </g-link>
                        <p class="post-meta">
                            <!-- Posted by -->
                            <!-- <a href="#!">{{ row.created_by.lastname + row.created_by.firstname }}</a> -->
                            on {{ row.created_at }}
                        </p>
                    </div>
                    <!-- Divider-->
                    <hr class="my-4" />
                </div>

            </div>
        </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  tag: strapiTag(id: $id) {
    id
    title
    posts {
      id
      title
      content
      created_at
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
