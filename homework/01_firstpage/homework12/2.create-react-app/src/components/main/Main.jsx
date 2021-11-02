import React from "react";
import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <><div class="content-left__fish">
        <h1 class="content-left__fish-title"> Рыба на любой вкус</h1>
        <p class="content-left__fish-description">Мы продаем рыбу, а не только показываем!</p>
      </div><div class="content-left__mainfish">
          <div class="content-left__holdfish">
            <a class="content-left__holdfish-title" href="#">Замороженная рыба</a>
            <p class="content-left__holdfish-description">Мы заморозили рыбу для вас</p>
          </div>
          <div class="content-left__livefish">
            <a class="content-left__livefish-title" href="#">Живая рыба</a>
            <p class="content-left__livefish-description">На кухню или на разведение</p>
          </div>
        </div></>
    );
  }
}

export default Main;