import React, {Component} from 'react'
import {connect} from 'react-redux'
import {formatTweet} from '../utils/helpers'
import {TiArrowBackOutline} from "react-icons/ti";
import {TiHeartOutline}from "react-icons/lib/ti"
import {TiHeartFullOutline} from "react-icons/lib/ti"

class Tweet extends Component {
	render(){
		const {tweet} = this.props
		if (tweet === null) {
			return <p>This tweet doesn't existed</p >
		}
		console.log(this.props)
		return(
			<div className = 'tweet'>
			{this.props.authedUser}

			<br/>
			{this.props.tweet.name}
			<br/>	
			{this.props.tweet.text}
			</div>
		)
	}
}

function mapStateToProps ({authedUser, users, tweets}, {id}){
	const tweet = tweets[id]
	const parentTweet = tweet ? tweets[tweet.replyingTo] : null

	return {
		authedUser,
		tweet: tweet
		? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
		: null

	}
}

export default connect(mapStateToProps)(Tweet)