import { connect } from "react-redux";
import CategoryPage from "./category_page";

const mSTP = (state, ownProps) => {
    // console.log("ownProps", ownProps)
    return {
        category: ownProps.match.params.category
}};

export default connect(mSTP,null)(CategoryPage);