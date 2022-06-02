import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        //fetch the categories here and have each div be a link
    }

    render() {
        return(
            // <div className="sidebar-wrapper">
            //     <div className="sidebar-struct">
            //         {/* route to = /<categoryname>/ render={CategoryContainer} */}
            //         <Link to="">
            //             <div className="sidebar-animal">
            //                 Rare animals
            //             </div>
            //         </Link>
            //         <Link to ="">
            //             <div className="sidebar-instruments">
            //                 Niche Instruments 
            //             </div>
            //         </Link>
            //         <Link to ="">
            //             <div className="sidebar-crafts">
            //                  Uncommon Crafts
            //             </div>
            //         </Link>
            //         <Link to ="">
            //             <div className="sidebar-sports">
            //                 Sporting Events 
            //             </div>
            //         </Link>

            //     </div>
            // </div>

            <aside class="sidebar">
    <nav class="nav">
      <ul>
        <li class="active"><a href="#">Welcome</a></li>
        <li><a href="#">Who We Are</a></li>
        <li><a href="#">What We Do</a></li>
        <li><a href="#">Get In Touch</a></li>
      </ul>
    </nav>
  </aside>
        );
    }
}

export default SideBar;