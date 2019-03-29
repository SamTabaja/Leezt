import React, { Component } from "react";
import Card from "../Card/Card";
import Img from "../Img/Img";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Pagination from "../Pagination/Pagination";
import { paginate } from "../../common/paginate";
import "./Main.scss";
import data from "../../product_list";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [...data],
      itemPerPage: 100,
      currentPage: 1,
      product: "",
      brand: ""
    };
    this.baseState = this.state;
    this.myRef = React.createRef();
  }

  handlePageChange = newPage => {
    this.setState({ currentPage: newPage });
    //console.log(newPage);
  };

  handleShuffle = () => {
    let currentPage = this.state.currentPage;
    currentPage = 1;
    let oldItems = [...this.state.items];
    let items = oldItems.sort(
      (a, b) =>
        parseInt(a.id) * Math.floor(Math.random() * 100) -
        parseInt(b.id) * Math.floor(Math.random() * 100)
    );

    this.setState({ items, currentPage });
  };

  handleAscOrder = () => {
    let currentPage = this.state.currentPage;
    currentPage = 1;
    let oldItems = [...this.state.items];
    let items = oldItems.sort(
      (a, b) => a.actual_price - b.actual_price
    );

    this.setState({ items, currentPage });
  };

  handleDescOrder = () => {
    let currentPage = this.state.currentPage;
    currentPage = 1;
    let oldItems = [...this.state.items];
    let items = oldItems.sort(
      (a, b) => b.actual_price - a.actual_price
    );
    this.setState({ items, currentPage });
  };

  handleProductSearch = e => {
    const { product, items } = this.state;
    this.setState({ product: e.target.value });

    let filteredItems = items.filter(item =>
      item.product_name
        .toLowerCase()
        .includes(product.toLocaleLowerCase())
    );

    this.setState({ items: filteredItems });
  };

  handleBarndSearch = e => {
    e.preventDefault();
    const { brand, items } = this.state;
    this.setState({ brand: e.target.value });

    let filteredItems = items.filter(item =>
      item.brand_name
        .toLowerCase()
        .includes(brand.toLocaleLowerCase())
    );

    this.setState({ items: filteredItems });
  };

  reset = () => this.setState(this.baseState);

  render() {
    const { length: length } = this.state.items;
    const {
      items: allItems,
      itemPerPage,
      currentPage,
      product,
      brand
    } = this.state;

    const items = paginate(
      allItems,
      currentPage,
      itemPerPage
    );

    return (
      <div className="mainWrapper">
        <div className="mainTop">
          <div className="topLeft topDivs">
            <Button
              onClick={this.handleShuffle}
              tag="Shuffle"
            />
            <Button
              onClick={this.handleAscOrder}
              tag="Sort Asc"
            />
            <Button
              onClick={this.handleDescOrder}
              tag="Sort Des"
            />
          </div>
          <div className="topMid topDivs">
            <Input
              value={product}
              name="product"
              id="product"
              onChange={this.handleProductSearch}
              onClick={this.reset}
              type="text"
              holder="Search product"
            />
            {/* <Button onClick={this.handleProductSearch} tag="Search" /> */}
          </div>
          <div className="topRight topDivs">
            <Input
              value={brand}
              name="brand"
              id="brand"
              onChange={this.handleBarndSearch}
              onClick={this.reset}
              type="text"
              holder="Search brand"
            />
            {/* <Button onClick={this.handleBarndSearch} tag="Search" /> */}
            <Button onClick={this.reset} tag="Reset" />
          </div>
        </div>
        <div className="main">
          {items.map(item => (
            <Card
              key={item.id}
              img={<Img imgSrc={item.filename} />}
              brandName={item.brand_name}
              productName={item.product_name}
              price={item.actual_price}
            />
          ))}
        </div>
        <div className="mainBottom">
          <Pagination
            itemsNumber={length}
            itemPerPage={itemPerPage}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Main;

// import React, { Component } from "react";
// import Card from "../Card/Card";
// import Img from "../Img/Img";
// import Input from "../Input/Input";
// import Button from "../Button/Button";
// import Pagination from "../Pagination/Pagination";
// import { paginate } from "../../common/paginate";
// import "./Main.scss";
// import data from "../../product_list";

// class Main extends Component {
//   state = {
//     items: [...data],
//     itemPerPage: 100,
//     currentPage: 1,
//     product: "",
//     brand: ""
//   };

//   handlePageChange = newPage => {
//     this.setState({ currentPage: newPage });
//   };

//   handleShuffle = () => {
//     let currentPage = this.state.currentPage;
//     currentPage = 1;
//     let oldItems = [...this.state.items];
//     let items = oldItems.sort(
//       (a, b) =>
//         parseInt(a.id) * Math.floor(Math.random() * 100) -
//         parseInt(b.id) * Math.floor(Math.random() * 100)
//     );

//     this.setState({ items, currentPage });
//   };

//   handleAscOrder = () => {
//     let currentPage = this.state.currentPage;
//     currentPage = 1;
//     let oldItems = [...this.state.items];
//     let items = oldItems.sort(
//       (a, b) => a.actual_price - b.actual_price
//     );

//     this.setState({ items, currentPage });
//   };

//   handleDescOrder = () => {
//     let currentPage = this.state.currentPage;
//     currentPage = 1;
//     let oldItems = [...this.state.items];
//     let items = oldItems.sort(
//       (a, b) => b.actual_price - a.actual_price
//     );
//     this.setState({ items, currentPage });
//   };

//   handleOnChange = event => {
//     let { product, brand } = this.state;
//     event.currentTarget.name === "product"
//       ? (product = event.currentTarget.value)
//       : (brand = event.currentTarget.value);

//     this.setState({ product, brand });
//   };

//   handleProductSearch = () => {
//     const { product } = this.state;
//     let items = [...this.state.items];
//     let filteredItems = items.filter(item =>
//       item.product_name
//         .toLowerCase()
//         .includes(product.toLocaleLowerCase())
//     );
//     console.log(filteredItems);
//     console.log(product);

//     this.setState({ items: filteredItems });
//   };

//   handleBarndSearch = () => {
//     const { brand, items } = this.state;
//     let filteredItems = items.filter(item =>
//       item.brand_name
//         .toLowerCase()
//         .includes(brand.toLocaleLowerCase())
//     );

//     this.setState({ items: filteredItems });
//   };

//   render() {
//     const { length } = this.state.items;
//     const {
//       items: allItems,
//       itemPerPage,
//       currentPage,
//       product,
//       brand
//     } = this.state;

//     const items = paginate(
//       allItems,
//       currentPage,
//       itemPerPage
//     );

//     return (
//       <div className="mainWrapper">
//         <div className="mainTop">
//           <div className="topLeft topDivs">
//             <Button
//               onClick={this.handleShuffle}
//               tag="Shuffle"
//             />
//             <Button
//               onClick={this.handleAscOrder}
//               tag="Sort Asc"
//             />
//             <Button
//               onClick={this.handleDescOrder}
//               tag="Sort Des"
//             />
//           </div>
//           <div className="topMid topDivs">
//             <Input
//               value={product}
//               name="product"
//               id="product"
//               onChange={this.handleOnChange}
//               type="text"
//               holder="Search product"
//             />
//             <Button
//               onClick={this.handleProductSearch}
//               tag="Search"
//             />
//           </div>
//           <div className="topRight topDivs">
//             <Input
//               value={brand}
//               name="brand"
//               id="brand"
//               onChange={this.handleOnChange}
//               type="text"
//               holder="Search brand"
//             />
//             <Button
//               onClick={this.handleBarndSearch}
//               tag="Search"
//             />
//           </div>
//         </div>
//         <div className="main">
//           {items.map(item => (
//             <Card
//               key={item.id}
//               img={<Img imgSrc={item.filename} />}
//               brandName={item.brand_name}
//               productName={item.product_name.toUpperCase()}
//               price={parseFloat(item.actual_price).toFixed(
//                 2
//               )}
//             />
//           ))}
//         </div>
//         <div className="mainBottom">
//           <Pagination
//             itemsNumber={length}
//             itemPerPage={itemPerPage}
//             onPageChange={this.handlePageChange}
//             currentPage={currentPage}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default Main;
