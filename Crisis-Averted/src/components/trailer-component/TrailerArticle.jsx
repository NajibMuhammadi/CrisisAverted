import NextBtn from "./NextBtn"
import PrevBtn from "./PrevBtn"
import TrailerList from "./TrailerList"

function TrailerArticle() {
  return (
    <article className="carousel">
        <PrevBtn />
        <TrailerList />
        <NextBtn />
    </article>
  )
}

export default TrailerArticle