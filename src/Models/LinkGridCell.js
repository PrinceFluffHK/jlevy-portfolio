class LinkGridCell {
    constructor (title, thumbnailPath) {
        this.title = title
        this.thumbnail = thumbnailPath
    }

    display () {
        return (
            <div className="thumbnail">
                <img src={this.thumbnailPath}/>
            </div>
        )
    }
}

export default LinkGridCell