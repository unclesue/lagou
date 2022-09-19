import React from "react"
import Banner from "../components/banner"
import Sidebar from "../components/sidebar"
import Toggle from "../components/toggle"
import { graphql, Link } from "gatsby"
import { useGetArticlesQuery } from "../store/services/article"
import { useSelector } from "react-redux"

export default function Home({ data, pageContext }) {
  const { skip, limit } = pageContext
  useGetArticlesQuery({ offset: skip, limit })
  const article = useSelector(state => state.article)
  return (
    <div className="home-page">
      <Banner />
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <Toggle />
            <ArticleList articles={article.articles || data.allArticle.nodes} />
          </div>
          <div className="col-md-3">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

const ArticleList = ({ articles }) => {
  return articles.map(article => (
    <div key={article.slug} className="article-preview">
      <div className="article-meta">
        <Link to="">
          <img src={article.author.image} alt="" />
        </Link>
        <div className="info">
          {/* <a className="author">{article.author.username}</a> */}
          <Link to="" className="author">{article.author.username}</Link>
          <span className="date">{article.createdAt}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart" /> {article.favoritesCount}
        </button>
      </div>
      <Link to={`/articles/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
      </Link>
    </div>
  ))
}

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allArticle(skip: $skip, limit: $limit) {
      nodes {
        author {
          username
          image
        }
        createdAt
        description
        favoritesCount
        slug
        title
      }
    }
  }
`
