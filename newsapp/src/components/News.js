import React, { Component } from 'react'
import Uptodate from './Uptodate';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      error: null,
      article: [],
      loading: false,
      total : 0
    };
  }

 
  fetchData = async ()=>{
    this.setState({loading: true});
    await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=7daca153e68841808206b59113abe3fb&category=${this.props.category}&pageSize=12&page=${this.state.page + 1}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            page: this.state.page + 1,
            article: this.state.article.concat(result.articles),
            total: result.totalResults,
            loading:false
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }


  async componentDidMount() {
    this.fetchData();
  }




  render() {
    return (
      <>
        
        <div className="contain"> 
        {this.state.loading && <Loader/>}
        {this.state.loading!==true && <h1 style={{ textAlignVertical: "center", textAlign: "center", marginBottom: "10px" }}>{`Top ${this.props.category} Headlines - India`}</h1>}
        <InfiniteScroll
          dataLength={this.state.article.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.article.length !== this.state.total}
          loader={<h3 style={{ textAlignVertical: "center", textAlign: "center", marginBottom: "10px" }}>...LOADING...</h3>}
        > 
        
          
          <div className="boxes">
          {this.state.article.map(item => (
            <div key={item.url}>
              <Uptodate mainurl={item.url} urltoimage={item.urlToImage} title={item.title} desc={item.description} />
            </div>
          ))} 
          </div>
        
        </InfiniteScroll>
       </div>
      </>
    )
  }
}
