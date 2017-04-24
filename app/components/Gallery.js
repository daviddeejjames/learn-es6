import React, { Component } from 'react';

class Gallery extends Component{
	render(){
		let default_thumb = "http://www.novelupdates.com/img/noimagefound.jpg";

		return (
			<div className="Gallery">
				{
					this.props.items.map((item, index) => {
						let {title, imageLinks, infoLink} = item.volumeInfo;
						return (
							<div key={index} className="book">
								<a href={infoLink !== undefined ? infoLink : '' } target="_blank">
									<img
										src={imageLinks !== undefined ? imageLinks.thumbnail : default_thumb }
										alt={title + " thumbnail"}
										className="book-img"
									/>
									<div className="book-title">
										{title}
									</div>
								</a>
							</div>
						)
					})
				}
			</div>
		)	
	}
}


export default Gallery;