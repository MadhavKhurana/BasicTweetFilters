import React, { Component } from "react";
import "./posts.css";

class Posts extends Component {
    state = {
        posts: [
            {
                name: "Madhav Khurana",
                tweet: "This is TweetFilter. ",
                date: Date.now
            },
            {
                name: "Mikel Jollett",
                tweet:
                    "The hard truth about the United States is that the money other countries spend on health and infrastructure, we spend on war.",
                date: Date.now
            },
            {
                name: "Erick Fernandez",
                tweet:
                    "This statement from Seth Meyers is a real statement from someone who has spoken strongly against Trump throughout.",
                date: Date.now
            },
            {
                name: "Dan Pfeiffer",
                tweet:
                    "Only 8 months into the Trump Presidency we are on the brink of nuclear war and Nazis are in streets of an American city. Seems about right",
                date: Date.now
            },
            {
                name: "RuPaul",
                tweet:
                    "Todays Eyebrow: Plucked thin, defiant. A brow that says “You will soon find out that some wizarding families are better than others, Potter”",
                date: Date.now
            },
            {
                name: "sofie oruene",
                tweet:
                    'frank ocean is wearing rainbow colored shoes rn and a fan said they were cool and he replied "thanks! i found them somewhere in the closet"',
                date: Date.now
            },
            {
                name: "Michael Cohen",
                tweet:
                    "YOU LITERALLY IMPEACHED BILL CLINTON FOR OBSTRUCTING JUSTICE",
                date: Date.now
            },
            {
                name: "Chris Chamberlin",
                tweet:
                    "So... Donald Trump pulling coloured flags out of his nose is now a thing",
                date: Date.now
            },
            {
                name: "Aaron Rose",
                tweet:
                    "Thinking of Sophie Scholl, who was executed on this day in 1943 for leading student resistance against Hitler. She was 21.",
                date: Date.now
            }
        ],

        input: "",
        number: 256,
        numbers: 0
    };

    input = e => {
        this.setState({
            input: e.target.value
        });
    };
    number = e => {
        this.setState({
            number: e.target.value
        });
        //        console.log(this.state.number);
    };

    render() {
        return (
            <div>
                {this.state.number == 0
                    ? this.setState({
                          number: 256
                      })
                    : console.log("fail")}
                <div>
                    <br />
                    <input
                        value={this.state.input}
                        className="form-control"
                        placeholder="Filter by text"
                        onChange={this.input}
                    />
                    <br />

                    <input
                        type="number"
                        className="form-control"
                        placeholder="Number of Characters"
                        onChange={this.number}
                    />
                </div>
                <br />
                <br />
                <br />
                <br />

                <h4>#trendingtweets</h4>
                <br />
                <br />
                {this.state.posts
                    .filter(
                        post =>
                            (post.tweet
                                .toLowerCase()
                                .includes(this.state.input.toLowerCase()) ||
                                post.name
                                    .toLowerCase()
                                    .includes(
                                        this.state.input.toLowerCase()
                                    )) &&
                            post.tweet.length < this.state.number
                    )
                    .map((d, i) => {
                        return (
                            <div key={i} className="jumbotron">
                                <p id="postname">{d.name}</p>
                                <p id="postTweet">{d.tweet}</p>
                            </div>
                        );   
                    })}
            </div>
        );
    }
}

export default Posts;
