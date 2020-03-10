import React from "react";
import "./Home.css";
import NavBar from "../components/Navbar";

const Home = () => {
  return (
    <div>
  <div className="jumbotron">
 <h1 className="display-4">Natural Is A Trend</h1>
 <p className="lead">You may be amazed you are still unique and beautiful as your natural self. Only you can decide if this style is for you.</p>
</div> 
<h1 className="header">What Are We About ?</h1>
<p1>Coconut oil stimulates hair growth getting deep into its follicles. Coconut oil promotes the scalp health fighting against such problems as insect bites, lice and dandruff. Coconut oil moisturizes dry hair. Coconut oil adds luster, shine and softness to the hair. Coconut oil is a natural way to help your hair grow longer, thicker, and faster. The vitamins and essential fatty acids naturally found in coconut oil nourish the scalp and help to remove sebum build-up from hair follicles.</p1>
  <div className="card" style={{width: "24rem"}}>
  <img src="https://11thavenuefoods.com/wp-content/uploads/2019/02/browncoconut.jpg" className="card-img-top" alt="..."/>
</div>

<div>
<h1 className="header">Health affects of Certain Plants ?</h1>
<h2>Aloe Vera</h2>
<p2>Aloe vera contains something called proteolytic enzymes which repairs dead skin cells on the scalp. It also acts as a great conditioner and leaves your hair all smooth and shiny. It promotes hair growth, prevents itching on the scalp, reduces dandruff and conditions your hair.Aloe vera containsTrusted Source vitamins A, C, and E. All three of these vitamins contribute to cell turnover, promoting healthy cell growth and shiny hair. Vitamin B-12 and folic acid are also containedTrusted Source in aloe vera gel. Both of these components can keep your hair from falling out.
Aloe vera is a popular product that people use on their skin after sun exposure. This is because of its high collagen content and cooling properties. The vitamin content in aloe vera suggests that it might work to repair sun damage to your hair, too.</p2>
  <div className="card" style={{width: "24rem"}}>
  <img src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/08/Aloe_Vera_1296x728-header-1-1-1296x728.jpg?w=1155&h=1528" className="card-img-top" alt="..."/>
</div>
</div>

<div className="w3-card-4"style={{width: "24rem"}}>
<h1 className="header">Health affects of Certain Plants ?</h1>
<h2>Avocado</h2>
<p2>Avocado oil is rich in monounsaturated fatty acids that nourish and strengthen the hair follicles while providing moisture for dazzling shine. Phytosterols and vitamin E are absorbed into the scalp and hair shafts to stimulate growth while protecting against damage and dryness.</p2>
  <img src="https://cdn.cdnparenting.com/articles/2018/11/22093701/avocado-puree-recipe_283227494.jpg" alt="Avocado"/>
  <div className="w3-container w3-center">
    <p>Aloe vera / </p>
  </div>
</div>




</div>

  );
};

export default Home;
