import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksList = links.map((link) => {
    return <a href={"#" + link} key={link} > {link}</a >
  })

  return (
    <nav>
      {linksList}
    </nav >
  )
}

export default NavBar;
