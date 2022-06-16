import React, { Component } from 'react'

export default class Covid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            totalcases: 0,
            today: 0,
            death: 0,
            todaydeaths: 0,
            recovered: 0,
            todayrecovered: 0,
            loading: false
        };
    }


    fetchData = async () => {
        this.setState({ loading: true });
        await fetch("https://corona.lmao.ninja/v2/countries/India?yesterday")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        loading: false,
                        totalcases: result.cases,
                        today: result.todayCases,
                        death: result.deaths,
                        todaydeaths: result.todayDeaths,
                        recovered: result.recovered,
                        todayrecovered: result.todayRecovered
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
            <div className="forcolor">
                <div className="mainhead container">
                    <div className="row">
                        <div className="col-4 imgs">
                            <img className="rotate" src="images/eksath.png" alt="Unity" width="300" height="300" />
                        </div>

                        <div className="col-8 hding">
                            <h1>Lets Stay Safe and Fight Together Against C<img className="rotate" src="images/corona.png" />rona Virus.</h1></div>
                    </div>
                </div>


                <section className="corono_update container">
                    <div>
                        <h3 className="chead">COVID-19 INDIA</h3>
                    </div>

                    <div className="container row">
                        <div className="total-cases col">
                            <div className="title">Total Cases</div>
                            <div className="value">{this.state.totalcases}</div>
                            <div className="new-value">+{this.state.today}</div>
                        </div>
                        <div className="recovered col">
                            <div className="title">Recovered</div>
                            <div className="value">{this.state.recovered}</div>
                            <div className="new-value">+{this.state.todayrecovered}</div>
                        </div>
                        <div className="deaths col">
                            <div className="title">Deaths</div>
                            <div className="value">{this.state.death}</div>
                            <div className="new-value">+{this.state.todaydeaths}</div>
                        </div>
                    </div>
                </section>



                <div id="aboutid">
                    <div className="abouthead">
                        <h1 className="">About COVID-19</h1>
                    </div>

                    <div className="row">
                        <div className="col">

                            <img src="images/aboutcor.jpg" style={{height: "320px"}} />

                        </div>

                        <div className="col" style={{margin: "auto"}}>
                            <h2 className="">What is COVID-19 (Corona-Virus)</h2>
                            <p>COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus
                                and disease were unknown before the outbreak began in Wuhan, China, in December 2019.</p>
                            <p>Coronaviruses are a large family of viruses which may cause illness in animals or humans. In humans,
                                several coronaviruses are known to cause respiratory infections ranging from the common cold to more
                                severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory
                                Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19.
                            </p>

                        </div>
                    </div>
                </div>





                <div id="sympid" className="container">
                    <div className="section_header" style={{marginBottom: "0.4%"}}>
                        <h1 className="">Coronavirus Symptoms </h1>
                    </div>

                    <div className="symppics">
                        <div className="row">
                            <div className="col">
                                <figure className="text-center">
                                    <img src="images/cough.png" className="img-fluid" width="120" height="120" />
                                    <figcaption> cough </figcaption>
                                </figure>
                            </div>

                            <div className="col">
                                <figure className="text-center">
                                    <img src="images/runnynose.png" className="img-fluid" width="120" height="120" />
                                    <figcaption> runny nose </figcaption>
                                </figure>
                            </div>

                            <div className="col">
                                <figure className="text-center">
                                    <img src="images/fever.png" className="img-fluid" width="120" height="120" />
                                    <figcaption> fever </figcaption>
                                </figure>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col">
                                <figure className="text-center">
                                    <img src="images/sick.png" className="img-fluid" width="120" height="120" />
                                    <figcaption> cold </figcaption>
                                </figure>
                            </div>

                            <div className="col">
                                <figure className="text-center">
                                <img src="images/week.png" className="img-fluid" width="120" height="120"/>
                                <figcaption> tiredness </figcaption>
                                </figure>
                            </div>

                            <div className="col">
                                <figure className="text-center">
                                    <img src="images/breath.png" className="img-fluid" width="120" height="120" />
                                    <figcaption> difficulty breathing (severe cases) </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>

                </div>





                <div id="preventid">
                    <div className="section_header">
                        <h1>6 steps Prevention against Coronavirus </h1>
                    </div>

                    <div className="">
                        <div className="row">
                            <div className="col ma">
                                <div className="row">
                                    <div className="col one">
                                        <figure>
                                            <img src="images/handwash.png" className="img-fluid" width="90" height="90" />
                                        </figure>
                                    </div>
                                    <div className="col two">
                                        <p>Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col ma">
                                <div className="row">
                                    <div className="col one">
                                        <figure>
                                            <img src="images/mask.png" className="img-fluid" width="90" height="90" />
                                        </figure>
                                    </div>
                                    <div className="col two">
                                        <p>Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or
                                            sneeze</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col ma">
                                <div className="row">
                                    <div className="col one">
                                        <figure>
                                            <img src="images/quarantine.png" className="img-fluid" width="90" height="90" />
                                        </figure>
                                    </div>
                                    <div className="col two">
                                        <p>Avoid close contact (1 meter or 3 feet) with people who are unwell</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col ma">
                                <div className="row">
                                    <div className="col one">
                                        <figure>
                                            <img src="images/home.png" className="img-fluid" width="90" height="90" />
                                        </figure>
                                    </div>
                                    <div className="col two">
                                        <p>Stay home and self-isolate from others in the household if you feel unwell</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col ma">
                                <div className="row">
                                    <div className="col one">
                                        <figure>
                                            <img src="images/news.png" className="img-fluid" width="90" height="90" />
                                        </figure>
                                    </div>
                                    <div className="col two">
                                        <p>Stay informed by watching news & follow the recommended practices</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col ma">
                                <div className="row">
                                    <div className="col one" >
                                        <figure>
                                            <img src="images/medical.png" className="img-fluid" width="90" height="90" />
                                        </figure>
                                    </div>
                                    <div className="col two" >
                                        <p>If you have fever, cough and difficulty breathing, seek medical care early</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
