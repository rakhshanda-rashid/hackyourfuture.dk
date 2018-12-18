import alumniList from './alumni-json'
import CardMember from '../Team/CardMember'
import Content from '../Content'


class Alumni extends React.Component {
  state = {
    tags: [],
    alumniList: alumniList
  }

  componentDidMount() {
    let tags = []
    alumniList.forEach(alumni => tags = [...tags, ...alumni.tags])
    tags = [...new Set(tags)]
    this.setState({tags})
  }

  filterHandler = e => {
    this.setState({
      alumniList: alumniList.filter(alumni => alumni.tags.includes(e.target.value))
    })

  }
  render = () => {
    const {alumniList, tags} = this.state
    return (
      <div>
        {/*language=CSS*/}
        <style jsx>{`
            .members {
                display: flex;
                flex-wrap: wrap;
                max-width: 1200px;
                margin: 0 auto;
            }

            .center {
                text-align: center;
                margin: 4rem;
            }

            .filterMenu {
                padding: .3rem 5rem;
                font-size: 1rem;
                margin-left: 1rem;
                border-radius: 3px;
            }
        `}
        </style>

        <h2 className="center">Alumni</h2>
        <Content>
          <div>
            Filter by:
            <select onChange={this.filterHandler} className="filterMenu">
              {tags.map(tag => <option key={tag} value={tag}>{tag}</option>)}
            </select>
          </div>
        </Content>

        <div className="members">
          {alumniList.sort((a, b) => a.name.localeCompare(b.name)).map((item, key) =>
            <CardMember item={item} key={key} />
          )}
        </div>
      </div>
    )
  }
}

export default Alumni