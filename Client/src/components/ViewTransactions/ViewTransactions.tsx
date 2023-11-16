import Record from "../Record/Record"
import Search from "../Search/Search"
import Transaction from "../Transaction/Transaction"


const ViewTransactions = () => {
  return (
    <div>
        <Transaction/>
        <Search/>
        <Record/>
    </div>
  )
}

export default ViewTransactions