import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class NewsBase extends Component {

  static defaultProps = {      // default values
    country: "in",
    pageSize: 6,
    category: "general",
  }

  static propTypes = {         // value types
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }


  // we will comment out these manual array news to use API 
    // articles = [
    //     {
    //       "source": { "id": "the-washington-post", "name": "The Washington Post" },
    //       "author": "Elizabeth Dwoskin",
    //       "title": "Twitter is experiencing a widespread global outage - The Washington Post",
    //       "description": "Attempts to log into the Twitter desktop app were met with « error » messages late Wednesday.",
    //       "url": "https://www.washingtonpost.com/technology/2022/12/28/twitter-global-outage/",
    //       "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/LCX32WDKRQ3DJY5AGLC5TCTM3E.JPG&w=1440",
    //       "publishedAt": "2022-12-29T04:11:08Z",
    //       "content": "Comment on this story\r\nTwitter experienced a global outage late Wednesday, according to numerous reports from Twitter users and the online tracker Downdetector.\r\nIt wasnt immediately clear how many T… [+1785 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "CBS Sports" },
    //       "author": null,
    //       "title": "Kansas Jayhawks vs. Arkansas Razorbacks Live Score and Stats - December 28, 2022 Gametracker - CBS Sports",
    //       "description": "Live COLLEGEFOOTBALL scores at CBSSports.com. Check out the COLLEGEFOOTBALL scoreboard, box scores and game recaps.",
    //       "url": "https://www.cbssports.com/college-football/gametracker/recap/NCAAF_20221228_KANSAS@ARK/",
    //       "urlToImage": "https://sportsfly.cbsistatic.com/fly-0379/bundles/sportsmediacss/images/fantasy/default-article-image-large.png",
    //       "publishedAt": "2022-12-29T03:22:30Z",
    //       "content": "MEMPHIS, Tenn. (AP) KJ Jefferson passed to Rashod Dubinion for a 2-point conversion in the third overtime and Arkansas held off a furious second-half rally by Kansas for a 55-53 win the AutoZone Libe… [+2595 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "CBS Sports" },
    //       "author": "",
    //       "title": "Raiders' Davante Adams addresses Derek Carr benching: 'Obviously I support my guy' - CBS Sports",
    //       "description": "Adams says he supports his friend, but Vegas has to finish out the season on a strong note",
    //       "url": "https://www.cbssports.com/nfl/news/raiders-davante-adams-addresses-derek-carr-benching-obviously-i-support-my-guy/",
    //       "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/12/29/b7ea46a3-5261-4a95-a39e-a886df7cdfbf/thumbnail/1200x675/2a4fb58a58540ef56918e6c388cc94dc/davante-adams-derek-carr.jpg",
    //       "publishedAt": "2022-12-29T02:53:00Z",
    //       "content": "The Las Vegas Raiders made a massive decision on Wednesday, as head coach Josh McDaniels announced that the team was benching starting quarterback Derek Carr for Jarrett Stidham. This move may not be… [+1959 chars]"
    //     },
    //     {
    //       "source": { "id": "the-washington-post", "name": "The Washington Post" },
    //       "author": "Azi Paybarah",
    //       "title": "George Santos is under investigation in New York - The Washington Post",
    //       "description": "D.A. Anne T. Donnelly said residents “must have an honest and accountable representative” after more than a week of media stories unraveled much of his self-professed biography.",
    //       "url": "https://www.washingtonpost.com/politics/2022/12/28/george-santos-investigation/",
    //       "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NEYEVTGQQKJUZPGK7R2R2FAOUQ.jpg&w=1440",
    //       "publishedAt": "2022-12-29T01:47:00Z",
    //       "content": "Comment on this story\r\nThe Nassau County district attorney announced that she is opening an investigation into Rep.-elect George Santos (R-N.Y.), whose surprise victory in November was quickly follow… [+5389 chars]"
    //     },
    //     {
    //       "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
    //       "author": "Al Jazeera",
    //       "title": "Protesting Serbs in northern Kosovo agree to remove barricades - Al Jazeera English",
    //       "description": "Serbian President Aleksandar Vucic said the dismantling of barricades that have blocked roads will begin on Thursday.",
    //       "url": "https://www.aljazeera.com/news/2022/12/29/protesting-serbs-in-northern-kosovo-agree-to-remove-barricades",
    //       "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/12/2022-12-28T120417Z_1456762815_RC2XEY9LY7H2_RTRMADP_3_KOSOVO-SERBS.jpg?resize=1920%2C1440",
    //       "publishedAt": "2022-12-29T01:26:06Z",
    //       "content": "Serb protesters have agreed to start removing barricades and end their blockade of roads in northern Kosovo, Serbian President Aleksandar Vucic has said.\r\nVucic, who met Serbs from northern Kosovo in… [+4835 chars]"
    //     },
    //     {
    //       "source": { "id": "cbs-news", "name": "CBS News" },
    //       "author": "Simrin Singh",
    //       "title": "Every planet in the solar system to be visible in rare \"planet parade\" Wednesday - CBS News",
    //       "description": "The astronomical phenomenon will give skywatchers a good view of Mercury, Venus, Mars, Jupiter and Saturn with the naked eye.",
    //       "url": "https://www.cbsnews.com/news/every-planet-solar-system-visible-rare-planet-parade/",
    //       "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2022/12/28/db227569-ae8a-4bee-9010-fc2fc5fc1ce5/thumbnail/1200x630/1b5a8224ad91e0da24859c1ce41c88d9/gettyimages-460712793.jpg",
    //       "publishedAt": "2022-12-29T01:00:00Z",
    //       "content": "The planets of the solar system will be lined up in the sky Wednesday night in an astronomical phenomenon, visible from Earth, known as a \"planet parade.\"  \r\nThe phenomenon, which was also visible Tu… [+1945 chars]"
    //     },
    //     {
    //       "source": { "id": "cnn", "name": "CNN" },
    //       "author": "Celina Tebor",
    //       "title": "Buffalo woman saves man with severe frostbite after getting him out of the storm and pleading for help in a Facebook livestream - CNN",
    //       "description": "As a powerful storm battered western New York with blinding blizzard conditions in the early hours of Christmas Eve, a Buffalo woman jumped into action when she saw a man who was caught in the storm.",
    //       "url": "https://www.cnn.com/2022/12/27/us/buffalo-woman-saves-man-frostbite-facebook/index.html",
    //       "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221228115033-04-buffalo-woman-saves-man-frostbite-facebook.jpg?c=16x9&q=w_800,c_fill",
    //       "publishedAt": "2022-12-29T00:48:00Z",
    //       "content": "As a powerful storm battered western New York with blinding blizzard conditions in the early hours of Christmas Eve, a Buffalo woman jumped into action when she saw a man who was caught in the storm.… [+3680 chars]"
    //     },
    //     {
    //       "source": { "id": "fox-news", "name": "Fox News" },
    //       "author": "Chantz Martin",
    //       "title": "Gunman, 9 others convicted in near-fatal shooting of Red Sox legend David Ortiz - Fox News",
    //       "description": "A Dominican Republic court convicted 10 of the 13 defendants accused of attempting to murder Hall of Famer David “Big Papi” Ortiz in Santo Domingo in June 2019.",
    //       "url": "https://www.foxnews.com/sports/gunman-9-others-convicted-near-fatal-shooting-red-sox-legend-david-ortiz",
    //       "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/12/David-Ortiz.jpg",
    //       "publishedAt": "2022-12-29T00:30:26Z",
    //       "content": "A Dominican court convicted 10 people connected to the 2019 attempted murder of legendary Boston Red Sox slugger David Ortiz, authorities confirmed Tuesday.\r\nA man ambushed the baseball Hall of Famer… [+3534 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "The Guardian" },
    //       "author": "Guardian staff reporter",
    //       "title": "Southwest Airlines under investigation as more flights canceled after storm - The Guardian",
    //       "description": "US government says it will look into why the company’s recovery from winter storm chaos lags behind other carriers",
    //       "url": "https://www.theguardian.com/world/2022/dec/28/southwest-airlines-investigation-flight-cancellations-winter-storm",
    //       "urlToImage": "https://i.guim.co.uk/img/media/2ba1f9add04829add1ec8f4a1c7c77e99ccbaffe/0_0_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3303f2e415e94498ce11662001b91362",
    //       "publishedAt": "2022-12-29T00:27:00Z",
    //       "content": "Southwest Airlines scrubbed thousands of flights again on Tuesday in the aftermath of the massive winter storm that wrecked Christmas travel plans across the US, and the federal government said it wo… [+3639 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "BBC News" },
    //       "author": "https://www.facebook.com/bbcnews",
    //       "title": "Ukraine fighting is deadlocked, spy chief Kyrylo Budanov tells BBC - BBC",
    //       "description": "Kyrylo Budanov says neither side can make significant advances, and eyes advanced Western weapons.",
    //       "url": "https://www.bbc.com/news/world-europe-64109024",
    //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/15E7C/production/_128142798_0b6f0c65-89a7-4263-af33-039a3d525b28.jpg",
    //       "publishedAt": "2022-12-29T00:03:51Z",
    //       "content": "Fighting in Ukraine is currently at a deadlock as neither Ukraine nor Russia can make significant advances, the head of the Ukrainian military intelligence agency has said, while Kyiv waits for more … [+4596 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "Deadline" },
    //       "author": "Bruce Haring",
    //       "title": "Bill Cosby Plans Tour: “So Much Fun To Be Had In This Storytelling That I Do” - Deadline",
    //       "description": "Controversial comedian Bill Cosby is hoping to put his legal troubles aside and get back on the road next year, he revealed today in a radio interview. “WGH Talk” host Scott Spears asked Cosb…",
    //       "url": "https://deadline.com/2022/12/bill-cosby-plans-live-comedy-tour-in-2023-1235208071/",
    //       "urlToImage": "https://deadline.com/wp-content/uploads/2022/12/GettyImages-1040552476.jpg?w=1024",
    //       "publishedAt": "2022-12-28T23:40:00Z",
    //       "content": "Controversial comedian Bill Cosby is hoping to put his legal troubles aside and get back on the road next year, he revealed today in a radio interview. \r\n“WGH Talk” host Scott Spears asked Cosby if h… [+1247 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "The Detroit News" },
    //       "author": null,
    //       "title": "Second Whitmer kidnap plot ringleader sentenced to nearly 20 years in prison - Detroit News",
    //       "description": null,
    //       "url": "https://www.detroitnews.com/restricted/?return=https:%2F%2Fwww.detroitnews.com%2Fstory%2Fnews%2Flocal%2Fmichigan%2F2022%2F12%2F28%2Fbarry-croft-second-ringleader-in-whitmer-kidnapping-plot-sentenced-to-19-5-years%2F69759600007%2F",
    //       "urlToImage": null,
    //       "publishedAt": "2022-12-28T23:26:15Z",
    //       "content": "Skip to main content\r\nThis content is only available to subscribers.\r\nGet unlimited digital access.\r\nYour subscription supports:\r\nUnlimited access to subscriber only articles on desktop, tablet and m… [+872 chars]"
    //     },
    //     {
    //       "source": { "id": "engadget", "name": "Engadget" },
    //       "author": "https://www.engadget.com/about/editors/igor-bonifacic",
    //       "title": "Researchers develop blood test that can reliably detect Alzheimer’s disease - Engadget",
    //       "description": "This week, a multinational team of researchers announced they developed a new blood test that can reliably detect proteins specific to  Alzheimer’s disease..",
    //       "url": "https://www.engadget.com/researchers-develop-blood-test-detects-alzheimers-disease-224320271.html",
    //       "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-10/00554fd0-3738-11ec-bd7a-e92b6a123340",
    //       "publishedAt": "2022-12-28T22:44:40Z",
    //       "content": "When doctors need to confirm an Alzheimer's diagnosis, they often turn to a combination of brain imaging and cell analysis. Both have their downsides. The latter involves a lumbar puncture, an invasi… [+1757 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "ESPN" },
    //       "author": null,
    //       "title": "UCF vs. Duke - College Football Game Recap - December 28, 2022 - ESPN",
    //       "description": "Get a recap of the UCF Knights vs. Duke Blue Devils football game.",
    //       "url": "https://www.espn.com/college-football/recap/_/gameId/401442008",
    //       "urlToImage": "http://s.espncdn.com/stitcher/sports/football/college-football/events/401442008.png?templateId=espn.com.share.1",
    //       "publishedAt": "2022-12-28T22:25:55Z",
    //       "content": "ANNAPOLIS, Md. -- Duke brushed aside UCF with relative ease in the Military Bowl, capping an impressive turnaround this season. \r\nNow quarterback Riley Leonard is talking about big hopes for the futu… [+3959 chars]"
    //     },
    //     {
    //       "source": { "id": "fox-news", "name": "Fox News" },
    //       "author": "Greg Wehner",
    //       "title": "Maryland Rep. Jamie Raskin diagnosed with 'serious but curable' cancer - Fox News",
    //       "description": "Maryland Rep. Jamie Raskin, a Democrat, announced Wednesday that he has been diagnosed with Diffuse Large B Cell Lymphoma, a \"serious but curable\" cancer.",
    //       "url": "https://www.foxnews.com/politics/maryland-rep-jamie-raskin-diagnosed-serious-curable-cancer",
    //       "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/08/GettyImages-1241860093.jpg",
    //       "publishedAt": "2022-12-28T22:21:28Z",
    //       "content": "Rep. Jamie Raskin, D-Md., on Wednesday announced that he has been diagnosed with \"a serious but curable form of cancer\" called Diffuse Large B Cell Lymphoma.\r\nRaskin, who was the lead impeachment man… [+1346 chars]"
    //     },
    //     {
    //       "source": { "id": "reuters", "name": "Reuters" },
    //       "author": null,
    //       "title": "COVID pressures China's hospitals as countries mandate tests for travelers - Reuters",
    //       "description": "Chinese hospitals and funeral homes were under intense pressure on Wednesday as a surging COVID-19 wave drained resources, while the scale of the outbreak and doubts over official data prompted some countries to enact new <a href=\"/world/us-weighs-new-covid-r…",
    //       "url": "https://www.reuters.com/world/china/chinese-hospitals-extremely-busy-covid-spreads-unchecked-2022-12-28/",
    //       "urlToImage": "https://www.reuters.com/resizer/zZggX63Ny9c7SKtKBIGvFCu9cv4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/YRIWCVJQSRLPLPFFKSLRO3YMGE.jpg",
    //       "publishedAt": "2022-12-28T20:38:00Z",
    //       "content": "CHENGDU, Dec 28 (Reuters) - Chinese hospitals and funeral homes were under intense pressure on Wednesday as a surging COVID-19 wave drained resources, while the scale of the outbreak and doubts over … [+5652 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "CNBC" },
    //       "author": "Nicolas Vega",
    //       "title": "'Avatar: The Way of Water' crosses $1B in ticket sales in just 14 days: Here are the 10 highest-grossing movies of 2022 - CNBC",
    //       "description": "With 'Avatar 2' crossing the $1 billion mark this week, the 2022 box office tripled the number of billion-dollar grossers from 2021.",
    //       "url": "https://www.cnbc.com/2022/12/28/top-gun-to-avatar-these-are-the-highest-grossing-movies-of-2022.html",
    //       "urlToImage": "https://image.cnbcfm.com/api/v1/image/107168568-1671482146688-au_gallerycontents_20cs_avatar2_1_73dfd60a.jpeg?v=1672259541&w=1920&h=1080",
    //       "publishedAt": "2022-12-28T20:15:26Z",
    //       "content": "\"Avatar: The Way of Water\" has made over $1 billion in ticket sales in just two weeks.\r\nJames Cameron's blockbuster, the sequel to the highest-grossing movie of all time, joins \"Jurassic World: Domin… [+2507 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "Yahoo Entertainment" },
    //       "author": "Brian Sozzi",
    //       "title": "Why one Tesla bull sees the stock ripping 127% higher - Yahoo Finance",
    //       "description": "At least one analyst on Wall Street sees Tesla's stock recovering.",
    //       "url": "https://finance.yahoo.com/news/why-one-tesla-bull-sees-the-stock-ripping-127-higher-200944488.html",
    //       "urlToImage": "https://s.yimg.com/ny/api/res/1.2/QOT2t4rMvopGadYGSV..eA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-images/2019-08/3e8eb600-c2b5-11e9-b3bf-40830ac0000d",
    //       "publishedAt": "2022-12-28T20:09:44Z",
    //       "content": "In a growing sea of Wall Street negativity surrounding Tesla's (TSLA) fundamentals and stock price, there is at least one analyst trying to swim against the tide.\r\nOn Wednesday, Baird analyst Ben Kal… [+3068 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "Yahoo Entertainment" },
    //       "author": "Louisa Marshall",
    //       "title": "GMA’s T.J. Holmes Files For Divorce From Marilee Fiebig Amid Amy Robach Relationship Drama - Yahoo Entertainment",
    //       "description": "A long time coming. T.J. Holmes and Marilee Fiebig have filed for divorce after 12 years of marriage, In Touch can confirm. The Good Morning America cohost, ...",
    //       "url": "https://www.yahoo.com/entertainment/gma-t-j-holmes-files-195210549.html",
    //       "urlToImage": "https://s.yimg.com/ny/api/res/1.2/2FlzWqC.A8qaWehub4Yx1A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD0xMjAw/https://media.zenfs.com/en/in_touch_weekly_336/4d46c1ce1ecc581744809b6d02dbae22",
    //       "publishedAt": "2022-12-28T19:52:10Z",
    //       "content": "A long time coming. T.J. Holmes and Marilee Fiebig have filed for divorce after 12 years of marriage, In Touch can confirm. The Good Morning America cohost, 45, and the immigration lawyer, 45, got ma… [+2252 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "YouTube" },
    //       "author": null,
    //       "title": "Luka Makes MVP Case With 60 Point Triple Double And INSANE Ending - BBALLBREAKDOWN",
    //       "description": "#lukadoncic #nba Special Thanks to SeatGeek! Use code BBALL for $20 off your first order https://seatgeek.onelink.me/RrnK/BBALLIn one fo the craziest endings...",
    //       "url": "https://www.youtube.com/watch?v=U7GO7C112kk",
    //       "urlToImage": "https://i.ytimg.com/vi/U7GO7C112kk/maxresdefault.jpg",
    //       "publishedAt": "2022-12-28T19:43:45Z",
    //       "content": null
    //     }
    //   ]
      constructor(){
        super();
        console.log("RUNNING COMPONENT.")

        // setting state
        this.state = {
            // articles : this.articles,   -- we comment out to use API
            articles : [],
            loading  : false,
            page : 1
        }
      }

      // to work with live data -- use direct API key

      async componentDidMount(){
        console.log("FETCHING .....")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d2095ada67fb4b3fad68105f704b1b8f&pagesize=${this.props.pageSize}`
        this.setState({loading:true})
        let dataFetched = await fetch(url)
        let parsedData = await dataFetched.json()
        console.log(parsedData)
        this.setState({articles: parsedData.articles , 
          totalResults: parsedData.totalResults,
        loading: false})
      }

      handleNext = async ()=>{
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {   // this checks if page number is greater than actual page number or not-if bigger then it stops
        }
        else{
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d2095ada67fb4b3fad68105f704b1b8f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
          this.setState({loading: true})
          let dataFetched = await fetch(url)
          let parsedData = await dataFetched.json()
          console.log(parsedData)
          this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
          })
        }
      }

      handlePrev = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d2095ada67fb4b3fad68105f704b1b8f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        this.setState({loading: true})
        let dataFetched = await fetch(url)
        let parsedData = await dataFetched.json()
        console.log(parsedData)
        this.setState({
          page: this.state.page - 1,
          articles: parsedData.articles,
          loading: false
        })
      }
  render() {
    return (
      <div className="container my-3">
        <h1 className='text-center'>NEWS AREA</h1>
        {this.state.loading && <Spinner/>}
        {/* Maps all values */}

        {/* {this.state.articles.map((element)=>{console.log(element)})} */}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4 my-2" key={element.url}>
            <NewsItems title = {element.title?.slice(0,40)} description = {element.description?.slice(0,40)} imgURL = {element.urlToImage} newsURL = {element.url}/>
            </div>
        })}
            
        </div>

        <div class="d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} class="btn btn-dark" onClick={this.handlePrev}>Previous Page</button>

        <button type="button" class="btn btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} onClick={this.handleNext}>Next Page</button>
        </div>
      </div>
    )
  }
}
